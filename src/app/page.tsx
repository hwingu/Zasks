import { prisma } from "../lib/db";
import TaskItem from "@/components/TaskItem";
import { getAuthSession } from "@/lib/auth";
import NavBar from "@/components/NavBar";
import LoadingBar from "@/components/LoadingBar";

export default async function Home() {
  const session = await getAuthSession();
  const tasks = await prisma.tasks.findMany({
    where: {
      userId: session?.user?.id ?? "",
      taskId: "",
    },
    include: {
      tags: true,
    },
  });

  return (
    <main className="">
      <NavBar />
      <div className="container mx-auto mt-24">
        <TaskItem tasks={tasks} />
      </div>
    </main>
  );
}
