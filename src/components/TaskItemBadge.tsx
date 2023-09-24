import React from "react";
import { Badge } from "./ui/badge";
import BadgeDeleteButton from "./BadgeDeleteButton";

type Props = {
  task: any;
};

const TaskItemBadge = (props: Props) => {
  return (
    <>
      {props.task.tags.map((tag: any) => (
        <Badge className="rounded-md mr-1 inline-block hover:" >
          <BadgeDeleteButton />
          {tag.name}
        </Badge>
      ))}
    </>
  );
};

export default TaskItemBadge;
