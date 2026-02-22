import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { workshopDateId, firstName, lastName, email, phone, company } = body

    if (!firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      )
    }

    // Check for duplicate
    const existing = await prisma.waitlistEntry.findFirst({
      where: { email, workshopDateId: workshopDateId || undefined },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Je staat al op de wachtlijst' },
        { status: 400 }
      )
    }

    await prisma.waitlistEntry.create({
      data: {
        workshopDateId: workshopDateId || null,
        firstName,
        lastName,
        email,
        phone,
        company,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Je staat op de wachtlijst! We contacteren je zodra er een plek vrijkomt.',
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw.' },
      { status: 500 }
    )
  }
}
