import React from "react";
import Link from "next/link";
import CheckBoxAndTitle from "./CheckBoxAndTitle";
import DeleteButton from "./DeleteButton";
import AddTaskItemBadge from "./AddTaskItemBadge";
import TaskItemCount from "./TaskItemCount";
import TaskItemBadge from "./TaskItemBadge";
import { prisma } from "../lib/db";
import { buttonVariants } from "./ui/button";

type Props = {
  tasks: any;
};

const TaskItem = async (props: Props) => {
  const tags = await prisma.tags.findMany();
  return (
    <>
      {props.tasks.map(async (task: any) => {
        return (
          <div className="my-4 py-4 px-2 border border-slate-300 rounded-lg" key={task.id}>
            <div className="flex justify-between ">
              <div className="items-top flex space-x-2 max-w-xs truncate lg:max-w-2xl ">
                <CheckBoxAndTitle
                  taskId={task.id}
                  taskCompleted={task.completed}
                />
                <div className="">
                  <Link href={`/${task.id}?taskName=${task.name}`} className="hover:bg-opacity-75">
                    <label
                      className={
                        !task.completed
                          ? "flex text-sm font-medium leading-none my-auto hover:cursor-pointer"
                          : "flex text-sm font-medium leading-none line-through opacity-70 my-auto hover:cursor-pointer"
                      }
                    >
                      {task.name}
                    </label>

                    <TaskItemCount task={task} />
                    <TaskItemBadge task={task} />
                  </Link>
                  <AddTaskItemBadge task={task} tags={tags} />
                </div>
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
