import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message, type, preference } = body

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Naam en email zijn verplicht' },
        { status: 400 }
      )
    }

    await prisma.contactSubmission.create({
      data: {
        firstName,
        lastName: lastName || '',
        email,
        phone: phone || null,
        company: company || null,
        message: message || (preference ? `Voorkeur: ${preference}` : ''),
        type: type || 'contact',
      },
    })

    // TODO: Send notification email to info@cobiz.be
    // TODO: Send confirmation email to user

    const messages: Record<string, string> = {
      'contact': 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.',
      'gratis-gesprek': 'Bedankt! We plannen zo snel mogelijk een gesprek in en nemen contact met je op.',
    }

    return NextResponse.json({
      success: true,
      message: messages[type] || messages['contact'],
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw.' },
      { status: 500 }
    )
  }
}
