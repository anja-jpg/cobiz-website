import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { email, firstName, companyName, answers, score, category } = body

    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email en voornaam zijn verplicht' },
        { status: 400 }
      )
    }

    // Validate score and category
    const validCategories = ['green', 'orange', 'red', 'fit', 'zwalkend', 'blind']
    if (typeof score !== 'number' || !validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Ongeldige score data' },
        { status: 400 }
      )
    }

    // Save result
    await prisma.healthCheckResult.create({
      data: {
        email,
        firstName,
        companyName: companyName || null,
        score,
        category,
        answers: JSON.stringify(answers),
      },
    })

    // Also add to email subscribers
    const existingSubscriber = await prisma.emailSubscriber.findUnique({
      where: { email },
    })

    if (!existingSubscriber) {
      await prisma.emailSubscriber.create({
        data: {
          email,
          firstName,
          source: 'gezondheidscheck',
          tags: category,
        },
      })
    }

    // TODO: Send result email with PDF
    // TODO: Start nurturing email sequence based on category
    // TODO: Integrate with Mailchimp/ConvertKit

    return NextResponse.json({
      success: true,
      score,
      category,
      message: 'Resultaat opgeslagen!',
    })
  } catch (error) {
    console.error('Health check error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw.' },
      { status: 500 }
    )
  }
}
