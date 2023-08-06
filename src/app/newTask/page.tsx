import React from "react";
import CreateTaskForm from "@/components/CreateTaskForm";
import { auth } from "@clerk/nextjs";

type Props = {};

const form = (props: Props) => {
  const user = auth();

  const id = user.userId as string;
  return <CreateTaskForm userId={id}/>;
};

export default form;
