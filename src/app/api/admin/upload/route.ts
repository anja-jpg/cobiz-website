import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { getDb } from '@/lib/db'
import { ensureTable } from '@/lib/content'

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

export async function GET() {
  try {
    const prisma = getDb()
    if (!prisma) {
      return NextResponse.json({ url: '/anja-dirk.jpg' })
    }
    await ensureTable()
    const block = await prisma.contentBlock.findUnique({
      where: { page_section: { page: 'settings', section: 'about-photo' } },
    })
    const url = block ? JSON.parse(block.content) : '/anja-dirk.jpg'
    return NextResponse.json({ url })
  } catch {
    return NextResponse.json({ url: '/anja-dirk.jpg' })
  }
}

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

    const ext = file.type === 'image/png' ? '.png'
      : file.type === 'image/webp' ? '.webp'
      : '.jpg'

    const baseName = targetName.replace(/\.[^.]+$/, '')
    const fileName = `${baseName}${ext}`

    const blob = await put(fileName, file, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
    })

    // Save URL to database so public pages can use it
    try {
      const prisma = getDb()
      if (prisma) {
        await ensureTable()
        await prisma.contentBlock.upsert({
          where: { page_section: { page: 'settings', section: 'about-photo' } },
          update: { content: JSON.stringify(blob.url) },
          create: { page: 'settings', section: 'about-photo', content: JSON.stringify(blob.url) },
        })
      }
    } catch (dbErr) {
      console.error('Failed to save photo URL to database:', dbErr)
      // Upload still succeeded, continue
    }

    return NextResponse.json({ success: true, url: blob.url, fileName })
  } catch (err) {
    console.error('Upload error:', err)
    const detail = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      { error: `Upload fout: ${detail}` },
      { status: 500 },
    )
  }
}
