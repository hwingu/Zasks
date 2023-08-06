import React from 'react'

type Props = {
    params : {taskId:string}
}

const page = ({params}:Props) => {
  return (
    <div>id: {params.taskId}</div>
  )
}

export default page