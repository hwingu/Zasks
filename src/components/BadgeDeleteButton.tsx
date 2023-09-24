"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  tag: any;
  task: any;
};

const BadgeDeleteButton = ({ tag, task }: Props) => {
  const router = useRouter();
  const deleteBadge = async () => {
    await fetch("/api/tags", {
      method: "PUT",
      body: JSON.stringify({ taskId: `${task.id}`, tagId: `${tag.id}` }),
    });
    router.refresh();
  };
  return (
    <button
      className="opacity-0 text-xs text-zinc-200 bg-red-500 rounded-full mr-1 px-1 text-center hover:opacity-100 duration-200 "
      onClick={() => deleteBadge()}
    >
      x
    </button>
  );
};

export default BadgeDeleteButton;
