import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
 
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Connect to the database
    await connectMongo();

    // Create a new contact entry
    await Contact.create({ name, email, message });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ message: "Error sending message" }, { status: 500 });
  }
}