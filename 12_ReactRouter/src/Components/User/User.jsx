import React from 'react'
import { useParams } from 'react-router-dom'

function  User() {
    const {userId} = useParams()
    
  return (
    <div className=' bg-rose-200 text-fuchsia-950 p-4 text-center text-3xl '> User: {userId}</div>
  )
}

export default  User