import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import TagOptions from "./TagOptions";

type Props = {
  tags: any;
  task: any;
};

const TagsScrollArea = async (props: Props) => {
  return (
    <ScrollArea className="h-[200px] w-[250px] rounded-md p-2">
      {props.tags.map((tag : any) => (
        <div className="flex flex-col align-top">
          {<TagOptions tag={tag} task={props.task} />}
        </div>
      ))}
    </ScrollArea>
  );
};

export default TagsScrollArea;
