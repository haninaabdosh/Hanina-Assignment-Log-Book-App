import { NextRequest, NextResponse } from "next/server";
import assignments from "@/lib/data";

export async function GET() {
  return NextResponse.json(assignments, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  const newAssignment = {
    id: Date.now(),
    title: body.title,
    description: body.description || "",
    status: body.status || "pending",
  };
  assignments.push(newAssignment);
  return NextResponse.json(newAssignment, { status: 201 });
}
