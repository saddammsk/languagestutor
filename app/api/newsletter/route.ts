import { NextRequest, NextResponse } from 'next/server'
import { sendAdminEmail } from '@/app/lib/mailer'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    await sendAdminEmail(email)

    return NextResponse.json({ message: 'Thanks for subscribing!' }, { status: 201 })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
