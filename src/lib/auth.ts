const COOKIE_NAME = 'cobiz-admin'
const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
const TOKEN_MAX_AGE_S = 7 * 24 * 60 * 60 // 7 days in seconds

function getSecret(): string {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw) throw new Error('ADMIN_PASSWORD niet ingesteld')
  return pw
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data))
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function createToken(): Promise<string> {
  const exp = (Date.now() + TOKEN_MAX_AGE_MS).toString()
  const sig = await hmacSign(exp, getSecret())
  return `${exp}.${sig}`
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const secret = getSecret()
    const [exp, sig] = token.split('.')
    if (!exp || !sig) return false

    const expectedSig = await hmacSign(exp, secret)
    if (sig !== expectedSig) return false

    if (parseInt(exp) < Date.now()) return false

    return true
  } catch {
    return false
  }
}

export { COOKIE_NAME, TOKEN_MAX_AGE_S }
