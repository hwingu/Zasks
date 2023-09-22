"use client"

import React, { useEffect, useState } from 'react'
import { Progress } from './ui/progress'

type Props = {}

const LoadingBar = (props: Props) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66),500)
        return () => clearTimeout(timer)
    }, [])
  return (
    <Progress value={progress} className='rounded-none w-full fixed top-0 h-1 bg-opacity-0'/>
  )
}

export default LoadingBar