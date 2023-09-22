import React from "react";
import { Button } from "./ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="container flex justify-between px-4 h-16 items-center">
        <Link href={"/"}>
          <h1 className="text-2xl font-extrabold">Zasks</h1>
        </Link>
        <div className="flex ">
          <Button asChild>
            <Link href={"/newTag"}>Create tag</Link>
          </Button>
          <Button asChild className="mx-2">
            <Link href={"/newTask"}>New</Link>
          </Button>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
