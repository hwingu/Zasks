import React from "react";
import { Badge } from "./ui/badge";
import BadgeDeleteButton from "./BadgeDeleteButton";

type Props = {
  task: any;
};

const TaskItemBadge = ({task}: Props) => {
  return (
    <>
      {task.tags.map((tag: any) => (
        <Badge className={`rounded-md mr-1 inline-block`} >
          <BadgeDeleteButton tagId={tag.id} taskId={task.id}/>
          {tag.name}
        </Badge>
      ))}
    </>
  );
};

export default TaskItemBadge;
