"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserIcon from "./UserIcon";
import BackButton from "./BackButton";
import { Badge } from "./ui/badge";

type Props = {
  taskName: string;
  taskId: string;
  taskCompleted: any;
};

const NavBarTaskItem = ({ taskName, taskId, taskCompleted }: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="container flex justify-between px-4 h-16 items-center">
        <BackButton />
        <h1 className="text-2xl font-extrabold">
          {taskName}
          {taskCompleted === true && (
            <Badge className="bg-lime-500 m-auto rounded-md mx-2">
              Completed
            </Badge>
          )}
        </h1>
        <div className="flex ">
        <Button asChild>
            <Link href={"/newTag"}>Create tag</Link>
          </Button>
          <Button asChild className="mx-2">
            <Link href={`/${taskId}/newTask`}>New</Link>
          </Button>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBarTaskItem;
