import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { getDefaults } from '@/lib/content'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')

  if (!page) {
    return NextResponse.json({ error: 'page parameter is vereist' }, { status: 400 })
  }

  const defaults = getDefaults(page)
  const prisma = getDb()

  if (!prisma) {
    return NextResponse.json(defaults)
  }

  try {
    const blocks = await prisma.contentBlock.findMany({ where: { page } })
    const result = { ...defaults }
    for (const block of blocks) {
      try {
        result[block.section] = JSON.parse(block.content)
      } catch {
        // skip invalid JSON
      }
    }
    return NextResponse.json(result)
  } catch {
    return NextResponse.json(defaults)
  }
}

export async function PUT(request: NextRequest) {
  const prisma = getDb()
  if (!prisma) {
    return NextResponse.json({ error: 'Database niet beschikbaar' }, { status: 500 })
  }

  try {
    const { page, section, content } = await request.json()

    if (!page || !section || content === undefined) {
      return NextResponse.json(
        { error: 'page, section en content zijn vereist' },
        { status: 400 },
      )
    }

    const serialized = JSON.stringify(content)

    await prisma.contentBlock.upsert({
      where: { page_section: { page, section } },
      create: { page, section, content: serialized },
      update: { content: serialized },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Content save error:', err)
    return NextResponse.json(
      { error: 'Fout bij het opslaan' },
      { status: 500 },
    )
  }
}
