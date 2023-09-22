"use client";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useRouter } from "next/navigation";
type Props = {
  taskId: string;
};
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const DeleteButton = ({ taskId }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const deleteTask = async () => {
    await fetch("/api/tasks", {
      method: "DELETE",
      body: JSON.stringify({ id: `${taskId}` }),
    });
    router.refresh();
  };
  
  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({variant:"destructive"})}>
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your task
            and any children tasks.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {loading === false ? (
            <Button
              variant="destructive"
              onClick={() => {
                deleteTask();
                setLoading(true);
              }}
            >
              Delete
            </Button>
          ) : (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
