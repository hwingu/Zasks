import { auth } from "@clerk/nextjs";
import { prisma } from "../../lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TaskItem from "@/components/TaskItem";
import { UserButton } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import BackButton from "@/components/BackButton";
type Props = {
  params: { taskId: string };
  searchParams: { taskName: string };
};

const page = async ({ params, searchParams }: Props) => {
  const user = auth();

  const id = user.userId as string;

  const tasks = await prisma.tasks.findMany({
    where: {
      AND: {
        userId: id,
        taskId: params.taskId,
      },
    },
  });

  const taskCompleted = await prisma.tasks.findUnique({
    where: {
      id: params.taskId,
    },
  });

  return (
    <main className="">
      <div className="flex justify-between border-b px-4 h-16 items-center">
        <BackButton />
        <h1 className="text-2xl font-extrabold">
          {searchParams.taskName}
          {taskCompleted?.completed === true && (
            <Badge className="bg-lime-500 m-auto rounded-md mx-2">
              Completed
            </Badge>
          )}
        </h1>
        <div className="flex ">
          <Button asChild className="mx-2">
            <Link href={`/${params.taskId}/newTask`}>New</Link>
          </Button>
          <UserButton />
        </div>
      </div>
      <TaskItem tasks={tasks} />
    </main>
  );
};

export default page;
