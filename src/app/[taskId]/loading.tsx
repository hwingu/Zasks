import NavBarTaskItem from '@/components/NavBarTaskItem'
import React from 'react'
import BackButton from '@/components/BackButton'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'


type Props = {}

const loading = (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="container flex justify-between px-4 h-16 items-center">
        <BackButton />
        <Skeleton className='h-8 w-[250px]'/>
        <div className="flex ">
          <Button asChild>
            Create Tag
          </Button>
          <Button asChild className="mx-2">
           New
          </Button>
          <Skeleton className='h-9 w-9 rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default loading