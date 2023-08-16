"use server";
import { prisma } from "./db";

export async function createTask(name: string, userId: string) {
  const task = await prisma.tasks.create({
    data: {
      name: name,
      userId: userId,
    },
  });
}

export async function createTaskSpecific(
  name: string,
  userId: string,
  taskId: string
) {
  const task = await prisma.tasks.create({
    data: {
      name: name,
      userId: userId,
      taskId: taskId,
    },
  });
}

export async function deleteTask(id: string) {
  const task = await prisma.tasks.delete({
    where: {
      id: id,
    },
  });
  const taskDelete = await prisma.tasks.deleteMany({
    where: {
      taskId: id,
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

export async function updateTag(name: string, tagId: string, taskId:string) {
  const createdTag = await prisma.tasks.update({
    where: {
      id: taskId
    },
    data: {
      tags: {
        connect: { id: tagId },
      },
    },
  });
}

export async function createTag(name:string){
  const createTag = await prisma.tags.create({
    data: {
      name:name,
    }
  })
}
