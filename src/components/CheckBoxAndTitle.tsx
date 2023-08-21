"use client";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { updateComplete } from "../lib/taskFunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";
type Props = {
  taskId: string;
  taskCompleted: boolean;
};

const CheckBoxAndTitle = (props: Props) => {
  const router = useRouter();
  const [taskCompleted, setTaskCompleted] = useState(props.taskCompleted);
  return (
    <Checkbox
      onClick={() => {
        setTaskCompleted(!taskCompleted)
        updateComplete(props.taskId, taskCompleted);
        router.refresh();
      }}
      checked={taskCompleted}
      className="w-9 h-9"
    />
  );
};

export default CheckBoxAndTitle;
