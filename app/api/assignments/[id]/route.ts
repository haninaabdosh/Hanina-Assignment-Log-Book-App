import { NextRequest, NextResponse } from "next/server";
import assignments from "@/lib/data";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = assignments.find(a => a.id === Number(id));
  if (!item) return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  return NextResponse.json(item, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = assignments.findIndex(a => a.id === Number(id));
  if (index === -1) return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  const body = await req.json();
  assignments[index] = { ...assignments[index], ...body };
  return NextResponse.json(assignments[index], { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = assignments.findIndex(a => a.id === Number(id));
  if (index === -1) return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  assignments.splice(index, 1);
  return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
}