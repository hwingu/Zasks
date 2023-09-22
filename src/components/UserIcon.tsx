"use client";
import { Avatar } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

type Props = {};

const UserIcon = (props: Props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-9 h-9">
            <Image
              src={session?.user?.image ?? ""}
              alt="image"
              height={40}
              width={40}
            />
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel className="pb-0 font-medium">{session?.user.name}</DropdownMenuLabel>
          <DropdownMenuLabel className="w-[200px] truncate text-xs text-zinc-700">{session?.user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
          <DropdownMenuItem  className="cursor-pointer text-red-600 hover:text-red-900" onClick={() => signOut()}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return <Button onClick={() => signIn()}>Login</Button>;
};

export default UserIcon;
