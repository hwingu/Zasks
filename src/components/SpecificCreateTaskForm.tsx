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
import { createTaskSpecific } from "../lib/taskFunctions";

type Props = {
  userId: string;
  taskId: string;
};

const taskSchema = z.object({
  name: z.string().min(1, {
    message: "Task cannot be empty",
  }),
});

const CreateTaskFormSpecific = (props: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof taskSchema>) {
    createTaskSpecific(values.name, props.userId, props.taskId);
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
                  <Input placeholder="Task..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button onClick={() => router.back()} className="mx-2">Back</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateTaskFormSpecific;
