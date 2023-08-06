import React from 'react'
import { Button } from './ui/button'
import { SignOutButton } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const LoginButton = (props: Props) => {
  return (
    <>
        <UserButton />
    </>
  )
}

export default LoginButton