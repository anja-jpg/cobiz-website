import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const targetName = (formData.get('filename') as string) || 'anja-dirk.jpg'

    if (!file) {
      return NextResponse.json(
        { error: 'Geen bestand geüpload' },
        { status: 400 },
      )
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Alleen JPG, PNG en WebP bestanden zijn toegestaan' },
        { status: 400 },
      )
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'Bestand is te groot (max 5 MB)' },
        { status: 400 },
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Determine extension from uploaded file
    const ext = file.type === 'image/png' ? '.png'
      : file.type === 'image/webp' ? '.webp'
      : '.jpg'

    // Keep the target name but ensure correct extension
    const baseName = targetName.replace(/\.[^.]+$/, '')
    const fileName = `${baseName}${ext}`

    const publicDir = join(process.cwd(), 'public')
    const filePath = join(publicDir, fileName)

    await writeFile(filePath, buffer)

    return NextResponse.json({ success: true, url: `/${fileName}`, fileName })
  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json(
      { error: 'Fout bij het uploaden van het bestand' },
      { status: 500 },
    )
  }
}
