"use client";
import React from "react";
import { Button } from "./ui/button";
import { updateTag } from "@/lib/taskFunctions";
import { useRouter } from "next/navigation";

type Props = {
  tag: any;
  task: any;
};

const TagOptions = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      className="p-1 mb-1 cursor-pointer hover:opacity-80"
      onClick={() => {
        updateTag(props.tag.name, props.tag.id,props.task.id);
        router.refresh();
      }}
    >
      {props.tag.name}
    </Button>
  );
};

export default TagOptions;
