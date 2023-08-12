"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

const BackButton = (props: Props) => {
    const router = useRouter();
  return (
    <Button onClick={router.back}>Back</Button>
  );
};

export default BackButton;
