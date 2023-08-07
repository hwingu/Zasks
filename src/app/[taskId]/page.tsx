import { auth } from "@clerk/nextjs";
import { prisma } from "../../lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TaskItem from "@/components/TaskItem";
import { UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

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
      }
    },
  });

  return (
    <main className="">
      <div className="flex justify-between border-b px-4 h-16 items-center">
        <Link href={"/"} className={`${buttonVariants()} mx-2`}>
          Back
        </Link>
        <h1 className="text-2xl font-extrabold">{searchParams.taskName}</h1>
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
