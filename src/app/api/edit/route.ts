import { NextResponse } from "next/server";
import { updateTodoById } from "@/app/lib/data";
export async function POST(req: Request) {
  const { todoId, text } = await req.json();
  await updateTodoById(todoId, text);
  return NextResponse.json({ todoId, text });
}
