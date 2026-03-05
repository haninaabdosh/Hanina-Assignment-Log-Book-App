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
  if (!body.dueDate) {
    return NextResponse.json({ error: "Due date is required" }, { status: 400 });
  }

  const validStatuses = ["on process", "complete", "submitted"];
  if (body.status && !validStatuses.includes(body.status)) {
    return NextResponse.json({ error: "Status must be: on process, complete, or submitted" }, { status: 400 });
  }

  const newAssignment = {
    id: Date.now(),
    title: body.title,
    description: body.description || "",
    createdAt: new Date().toISOString(),
    dueDate: body.dueDate,
    status: body.status || "on process",
  };

  assignments.push(newAssignment);
  return NextResponse.json(newAssignment, { status: 201 });
}
