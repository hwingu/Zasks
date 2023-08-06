import React from "react";
import Link from "next/link";
import CheckBoxAndTitle from "./CheckBoxAndTitle";
import DeleteButton from "./DeleteButton";

type Props = {
  tasks: any;
};

const TaskItem = (props: Props) => {
  return (
    <>
    
      {props.tasks.map((task: any) => {
        return (
          <div className="my-4 py-4 px-2 border border-slate-300 rounded-lg">
            <div className="flex justify-between ">
              <div className="items-top flex space-x-2 max-w-xs truncate lg:max-w-2xl ">
                <CheckBoxAndTitle
                  taskId={task.id}
                  taskCompleted={task.completed}
                />
                <Link href={`/tasks/${task.id}`}>
                  <label
                    className={
                      !task.completed
                        ? "text-sm font-medium leading-none my-auto hover:cursor-pointer"
                        : "text-sm font-medium leading-none line-through opacity-70 my-auto hover:cursor-pointer"
                    }
                  >
                    {task.name}
                  </label>
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
