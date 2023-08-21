import React from "react";
import { prisma } from "../lib/db";
import { Badge } from "./ui/badge";
type Props = {
  task: any;
};

const TaskItemCount = async (props: Props) => {
  return (
    <>
      {(await prisma.tasks.count({
        where: {
          taskId: props.task.id,
        },
      })) >= 1 ? (
        <Badge className="bg-slate-200 text-slate-900 rounded-md mr-1">
          {prisma.tasks.count({
            where: {
              taskId: props.task.id,
            },
          })}
        </Badge>
      ) : null}
    </>
  );
};

export default TaskItemCount;
