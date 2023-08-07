import React from "react";
import SpecificCreateTaskForm from "@/components/SpecificCreateTaskForm";
import { auth } from "@clerk/nextjs";

type Props = {
  params: { taskId: string };
};

const page = ({ params }: Props) => {
  const user = auth();

  const id = user.userId as string;

  return <SpecificCreateTaskForm userId={id} taskId={params.taskId} />;
};

export default page;
