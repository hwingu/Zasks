"use server";
import { prisma } from "./db";

export async function createTask(name:string, userId:string) {
  const task = await prisma.tasks.create({
    data: {
      name: name,
      userId: userId,
    },
  });
}

export async function deleteTask(id: string) {
  const task = await prisma.tasks.delete({
    where: {
      id: id,
    },
  });
}

export async function updateComplete(id: string, completed: boolean) {
  const task = await prisma.tasks.update({
    where: {
      id: id,
    },
    data: {
      completed: !completed,
    },
  });
}

