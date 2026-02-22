import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { workshopDateId, firstName, lastName, email, phone, company, vatNumber } = body

    // Validate required fields
    if (!workshopDateId || !firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      )
    }

    // Check workshop date exists and has capacity
    const workshopDate = await prisma.workshopDate.findUnique({
      where: { id: workshopDateId },
      include: { _count: { select: { bookings: true } } },
    })

    if (!workshopDate) {
      return NextResponse.json(
        { error: 'Workshop datum niet gevonden' },
        { status: 404 }
      )
    }

    if (workshopDate.status !== 'open') {
      return NextResponse.json(
        { error: 'Deze workshop is niet meer beschikbaar' },
        { status: 400 }
      )
    }

    const bookedCount = workshopDate._count.bookings
    if (bookedCount >= workshopDate.capacity) {
      return NextResponse.json(
        { error: 'Deze workshop is volzet. Schrijf je in op de wachtlijst.' },
        { status: 400 }
      )
    }

    // Check for duplicate email on same date
    const existingBooking = await prisma.workshopBooking.findFirst({
      where: { workshopDateId, email },
    })

    if (existingBooking) {
      return NextResponse.json(
        { error: 'Je bent al ingeschreven voor deze datum' },
        { status: 400 }
      )
    }

    // Create booking
    const booking = await prisma.workshopBooking.create({
      data: {
        workshopDateId,
        firstName,
        lastName,
        email,
        phone,
        company,
        vatNumber: vatNumber || null,
        paymentStatus: 'pending',
      },
    })

    // TODO: Integrate Mollie payment here
    // For now, return success with booking ID
    // In production: create Mollie payment and redirect to checkout

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      message: 'Boeking ontvangen! Je wordt doorgestuurd naar de betaalpagina.',
      // paymentUrl: molliePayment.getCheckoutUrl() // TODO: Mollie integration
    })
  } catch (error) {
    console.error('Workshop booking error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw.' },
      { status: 500 }
    )
  }
}
