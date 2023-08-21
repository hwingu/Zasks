import React from 'react'
import CreateTagForm from '@/components/CreateTagForm'
import { auth } from "@clerk/nextjs";


type Props = {}

const newTag = (props: Props) => {
  const user = auth();

  const id = user.userId as string;
  return (
    <CreateTagForm userId={id}/>
  )
}

export default newTag