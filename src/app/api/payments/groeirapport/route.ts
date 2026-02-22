import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, vatNumber, revenue, employees, situation } = body

    if (!firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      )
    }

    // Create order
    const order = await prisma.groeirapportOrder.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        vatNumber: vatNumber || null,
        revenue: revenue || null,
        employees: employees || null,
        situation: situation || null,
        paymentStatus: 'pending',
        amount: 150000, // €1.500 in cents
      },
    })

    // TODO: Create Mollie payment for 50% (€750)
    // const molliePayment = await mollieClient.payments.create({
    //   amount: { currency: 'EUR', value: '750.00' },
    //   description: `COBIZ Groeirapport - Aanbetaling - Order #${order.id}`,
    //   redirectUrl: `${process.env.NEXT_PUBLIC_URL}/groeirapport/bevestiging?orderId=${order.id}`,
    //   webhookUrl: `${process.env.NEXT_PUBLIC_URL}/api/payments/webhook`,
    //   method: ['bancontact', 'creditcard'],
    //   metadata: { orderId: order.id.toString(), type: 'groeirapport' },
    // })

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'Bestelling ontvangen! Je wordt doorgestuurd naar de betaalpagina.',
      // paymentUrl: molliePayment.getCheckoutUrl()
    })
  } catch (error) {
    console.error('Groeirapport order error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het opnieuw.' },
      { status: 500 }
    )
  }
}
