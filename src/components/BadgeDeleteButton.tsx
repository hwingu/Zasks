'use client'
import React from 'react'

type Props = {}

const BadgeDeleteButton = (props: Props) => {
    const deleteBadge = async () => {
        await fetch("/api/tags", {
            method: "PUT",
            body: JSON.stringify({taskId : ""})
        })
    }
  return (
    <div className="bg-red-500 rounded-full h-2.5 w-2.5 inline-block mr-1 my-auto" onClick={() => deleteBadge()}/>
  )
}

export default BadgeDeleteButton