import React from "react";
import { Badge } from "./ui/badge";

type Props = {
    task: any;
};

const TaskItemBadge = (props: Props) => {
  return (
    <>
      {props.task.tags.map((tag) => (
        <Badge className="rounded-md mr-1">{tag.name}</Badge>
      ))}
    </>
  );
};

export default TaskItemBadge;
