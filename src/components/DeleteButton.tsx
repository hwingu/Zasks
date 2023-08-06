"use client";
import React from "react";
import { Button } from "./ui/button";
import { deleteTask } from "../lib/taskFunctions";
import { useRouter } from "next/navigation";

type Props = {
  taskId: string;
};

const DeleteButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      variant="destructive"
      onClick={() => {
        deleteTask(props.taskId);
        router.refresh();
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
