import { NextRequest, NextResponse } from 'next/server'
import { createToken, COOKIE_NAME, TOKEN_MAX_AGE_S } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json(
        { error: 'ADMIN_PASSWORD is niet geconfigureerd op de server.' },
        { status: 500 },
      )
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: 'Ongeldig wachtwoord' },
        { status: 401 },
      )
    }

    const token = await createToken()

    const response = NextResponse.json({ success: true })
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: TOKEN_MAX_AGE_S,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json(
      { error: 'Er ging iets mis' },
      { status: 500 },
    )
  }
}
