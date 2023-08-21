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
      {props.tags.length === 0 ? (
        <div className="flex flex-col text-center">
          <h1 className="text-sm font-bold">{`No tags available :(`}</h1>
          <br />
          <h1 className="text-sm">{`Add a new tag with 'Create tag'!`}</h1>
            </div>
      ) : (
        props.tags.map((tag: any) => (
          <div className="flex flex-col align-top" key={tag.id}>
            <TagOptions tag={tag} task={props.task} />
          </div>
        ))
      )}
    </ScrollArea>
  );
};

export default TagsScrollArea;
