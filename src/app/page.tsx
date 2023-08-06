import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { prisma } from "../lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/LoginButton";
import TaskItem from "@/components/TaskItem";

export default async function Home() {
  const user = auth();

  const id = user.userId as string;

  const tasks = await prisma.tasks.findMany({
    where: {
      userId: id,
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
          <LoginButton />
        </div>
      </div>
      <TaskItem tasks={tasks} />
    </main>
  );
}
