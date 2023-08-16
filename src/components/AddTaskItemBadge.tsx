import React from "react";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TagsScrollArea from "./TagsScrollArea";

type Props = {
  task: any;
  tags: any;
};

const AddTaskItemBadge = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Badge className="rounded-md m-auto cursor-pointer">+</Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col">
        <TagsScrollArea tags={props.tags} task={props.task}/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddTaskItemBadge;
