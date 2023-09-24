"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";

type Props = {
  tag: any;
  task: any;
};

const TagOptions = ({ tag, task }: Props) => {
  const tagColour = tag.colour
  const router = useRouter();
  const deleteTag = async () => {
    await fetch("/api/tags", {
      method: "DELETE",
      body: JSON.stringify({ tagId: `${tag.id}` }),
    });
    router.refresh();
  };
  const updateTag = async () => {
    await fetch("/api/tags", {
      method: "PATCH",
      body: JSON.stringify({  taskId: `${task.id}`, tagId: `${tag.id}` }),
    });
    router.refresh();
  };
  return (
    <div className="flex rounded-none">
      <Button
        key={tag.id}
        variant={"ghost"}
        className="mb-1 cursor-pointer w-4/5 hover:opacity-80"
        onClick={() => {
          updateTag();
        }}
      >
        {tag.name}
      </Button>
      <TrashIcon
        onClick={() => {
          deleteTag();
        }}
        className="m-auto h-8 w-8 rounded-lg p-2 cursor-pointer hover:bg-red-500"
      />
    </div>
  );
};

export default TagOptions;
