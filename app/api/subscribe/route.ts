import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Store the email in a database
    // 2. Send a confirmation email
    // 3. Add the email to your newsletter service (e.g., Mailchimp, ConvertKit)

    // For now, we'll just simulate success
    return NextResponse.json({ message: "Subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
