import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const session = await getAuthSession();
  const body = await req.json();
  const { name, taskName } = body;

  if (!session?.user) {
    return NextResponse.json(
      {
        error: "You must be logged in to create a task.",
      },
      {
        status: 401,
      }
    );
  }

  const task = await prisma.tasks.create({
    data: {
      name: name,
      userId: session.user.id,
    },
  });
  return NextResponse.json({ name: { name } });
}

export async function DELETE(req: Request, res: Response) {
  const body = await req.json();
  const { id } = body;

  const task = await prisma.tasks.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ message: "Successfully deleted" });
}
