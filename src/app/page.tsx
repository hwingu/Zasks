import { auth } from "@clerk/nextjs";
import { prisma } from "../lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TaskItem from "@/components/TaskItem";
import { UserButton } from '@clerk/nextjs'


export default async function Home() {
  const user = auth();

  const id = user.userId as string;
  
  const tasks = await prisma.tasks.findMany({
    where: {
      userId: id,
      taskId: ""
    },
  });

  return (
    <main className="">
      <div className="flex justify-between border-b px-4 h-16 items-center">
        <h1 className="text-2xl font-extrabold">Task Manager</h1>
        <div className="flex ">
          <Button asChild className="mx-2">
            <Link href={"/newTask"}>New</Link> 
          </Button>
          <UserButton />
        </div>
      </div>
      <TaskItem tasks={tasks} />
    </main>
  );
}
