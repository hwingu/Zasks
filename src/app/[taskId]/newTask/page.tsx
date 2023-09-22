import React from "react";
import SpecificCreateTaskForm from "@/components/SpecificCreateTaskForm";

type Props = {
  params: { taskId: string };
};

const page = ({ params }: Props) => {

  return <SpecificCreateTaskForm taskId={params.taskId}/>;
};

export default page;
