import { getAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request, res: Response) {
  const session = await getAuthSession();
  const body = await req.json();
  const { name } = body;

  if (!session?.user) {
    return NextResponse.json(
      { error: "User has to be logged in to create tags." },
      { status: 401 }
    );
  }

  const createTag = await prisma.tags.create({
    data: {
      name: name,
      userId: session.user.id,
    },
  });
  return NextResponse.json({ name: `${name}` });
}

export async function DELETE(req: Request, res: Response) {
  const body = await req.json();
  const { tagId } = body;

  const deleteTag = await prisma.tags.delete({
    where: {
      id: tagId,
    },
  });
  return NextResponse.json({ tagId: { tagId } });
}

export async function PUT(req: Request, res: Response) {
  const body = await req.json();
  const { taskId, tagId } = body;

  const deleteTagSpecific = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      tags: {
        disconnect: {
          id: tagId,
        },
      },
    },
  });
  return NextResponse.json({ message: "tag deleted" });
}

export async function PATCH(req: Request, res: Response) {
  const body = await req.json();
  const { taskId, tagId } = body;

  const connectTag = await prisma.tasks.update({
    where: {
      id: taskId,
    },
    data: {
      tags: {
        connect: { id: tagId },
      },
    },
  });
  return NextResponse.json({ message: "Tag successfully created." });
}
