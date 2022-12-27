import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

export default function List() {
 const posts =  useSelector((store)=> store.post)
  return (
    <div className='flex  flex-wrap '>
      {
        posts.map((post , i) => <Post key={i} task={post} />)
      }
    </div>
  )
}
