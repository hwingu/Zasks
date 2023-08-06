"use client";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { updateComplete } from "../lib/taskFunctions";
import { useRouter } from "next/navigation";
type Props = {
  taskId: string;
  taskCompleted: boolean;
};

const CheckBoxAndTitle = (props: Props) => {
  const router = useRouter();
  return (
    <Checkbox
      onClick={() => {
        updateComplete(props.taskId, props.taskCompleted);
        router.refresh();
      }}
      checked={props.taskCompleted}
      className="w-9 h-9"
    />
  );
};

export default CheckBoxAndTitle;
