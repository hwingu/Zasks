import React from "react";
import { Badge } from "./ui/badge";

type Props = {
  task: any;
};

const TaskItemBadge = (props: Props) => {
  return (
    <>
      {props.task.tags.map((tag: any) => (
        <Badge className="rounded-md mr-1" key={tag.id}>{tag.name}</Badge>
      ))}
    </>
  );
};

export default TaskItemBadge;
