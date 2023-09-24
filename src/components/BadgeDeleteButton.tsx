"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  tagId: string;
  taskId: string;
};

const BadgeDeleteButton = ({ tagId, taskId }: Props) => {
  const router = useRouter();
  const deleteBadge = async () => {
    await fetch("/api/tags", {
      method: "PUT",
      body: JSON.stringify({ taskId: `${ taskId }`, tagId: `${ tagId }` }),
    });
    router.refresh();
  };
  return (
    <div className="bg-red-500 rounded-full h-2.5 w-2.5 inline-block mr-1 my-auto">
      <button
        className="opacity-0 text-xs text-zinc-200 hover:opacity-100 duration-200"
        onClick={() => deleteBadge()}
      >
        x
      </button>
    </div>
  );
};

export default BadgeDeleteButton;
