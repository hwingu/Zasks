import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  page: string;
  name: string;
};

const ButtonLink = ({ page, name }: Props) => {
  return (
    <Button asChild className="mx-1">
      <Link href={`/${page}"}`}>{name}</Link>
    </Button>
  );
};

export default ButtonLink;
