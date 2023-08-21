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
import { createTag } from "../lib/taskFunctions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  userId: string;
};

const tagSchema = z.object({
  name: z.string().min(1, {
    message: "Tag cannot be empty",
  }),
});

const CreateTagForm = (props: Props) => {
  const [submit, setSubmit] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof tagSchema>>({
    resolver: zodResolver(tagSchema),
    defaultValues: {},
  });
  function onSubmit(values: z.infer<typeof tagSchema>) {
    setSubmit(!submit)
    createTag(values.name, props.userId);
    router.refresh();
    router.back();
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
                <FormLabel>Tag</FormLabel>
                <FormControl>
                  <Input placeholder="Tag name..." {...field} />
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

export default CreateTagForm;
