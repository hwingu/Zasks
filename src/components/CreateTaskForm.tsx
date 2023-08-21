"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createTask } from "../lib/taskFunctions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  userId: string;
};

const taskSchema = z.object({
  name: z.string().min(1, {
    message: "Task cannot be empty",
  }),
});

const CreateTaskForm = (props: Props) => {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof taskSchema>) {
    setSubmit(!submit);
    createTask(values.name, props.userId);
    router.back();
    router.refresh();
  }

  return (
    <div className="container mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task</FormLabel>
                <FormControl>
                  <Input placeholder="Task name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Link className={`${buttonVariants()} mx-2`} href={"/"}>
              Back
            </Link>
            {submit === false ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateTaskForm;
