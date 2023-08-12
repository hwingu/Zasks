import React from "react";
import Link from "next/link";
import CheckBoxAndTitle from "./CheckBoxAndTitle";
import DeleteButton from "./DeleteButton";
import { prisma } from "../lib/db";
import { Badge } from "./ui/badge";

type Props = {
  tasks: any;
};

const TaskItem = async (props: Props) => {
  return (
    <>
      {props.tasks.map(async (task: any) => {
        return (
          <div className="my-4 py-4 px-2 border border-slate-300 rounded-lg">
            <div className="flex justify-between ">
              <div className="items-top flex space-x-2 max-w-xs truncate lg:max-w-2xl ">
                <CheckBoxAndTitle
                  taskId={task.id}
                  taskCompleted={task.completed}
                />
                <Link href={`/${task.id}?taskName=${task.name}`}>
                  <label
                    className={
                      !task.completed
                        ? "flex text-sm font-medium leading-none my-auto hover:cursor-pointer"
                        : "flex text-sm font-medium leading-none line-through opacity-70 my-auto hover:cursor-pointer"
                    }
                  >
                    {task.name}
                  </label>
                  <div>
                    {(await prisma.tasks.count({
                      where: {
                        taskId: task.id,
                      },
                    })) >= 1 ? (
                      <Badge className="bg-slate-200 text-slate-900">
                        {prisma.tasks.count({
                          where: {
                            taskId: task.id,
                          },
                        })}
                      </Badge>
                    ) : null}
                    {task.tags.map(tag => <Badge>{tag.name}</Badge>)}
                  </div>
                </Link>
              </div>
              <DeleteButton taskId={task.id} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskItem;
