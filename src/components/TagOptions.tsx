"use client";
import React from "react";
import { Button } from "./ui/button";
import { updateTag, deleteTag } from "@/lib/taskFunctions";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";

type Props = {
  tag: any;
  task: any;
};

const TagOptions = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex">
      <Button
        key={props.tag.id}
        variant={"ghost"}
        className="p-1 mb-1 cursor-pointer w-4/5 hover:opacity-80"
        onClick={() => {
          updateTag(props.tag.name, props.tag.id, props.task.id);
          router.refresh();
        }}
      >
        {props.tag.name}
      </Button>
      <TrashIcon
        onClick={() => {
          deleteTag(props.tag.id);
          router.refresh();
        }}
        className="m-auto h-8 w-8 rounded-lg p-2 cursor-pointer hover:bg-red-400"
      />
    </div>
  );
};

export default TagOptions;
