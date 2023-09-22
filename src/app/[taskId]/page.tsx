import { prisma } from "@/lib/db";
import TaskItem from "@/components/TaskItem";
import { getAuthSession } from "@/lib/auth";
import NavBarTaskItem from "@/components/NavBarTaskItem";

type Props = {
  params: { taskId: string };
  searchParams: { taskName: string };
};

const page = async ({ params, searchParams }: Props) => {
  const session = await getAuthSession();

  const tasks = await prisma.tasks.findMany({
    where: {
      AND: {
        userId: session?.user.id,
        taskId: params.taskId,
      },
    },
    include: {
      tags: true,
    },
  });

  const taskCompleted = await prisma.tasks.findUnique({
    where: {
      id: params.taskId,
    },
  });

  return (
    <main className="">
      <NavBarTaskItem taskName={searchParams.taskName} taskId={params.taskId} taskCompleted={taskCompleted?.completed}/>
      <div className="container mx-auto mt-24">
        <TaskItem tasks={tasks} />
      </div>
    </main>
  );
};

export default page;
