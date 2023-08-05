import Image from 'next/image'
import { auth } from '@clerk/nextjs';
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  const user = auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user.userId}
      <SignOutButton />
    </main>
  )
}
