import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {  logout, selectUser } from '../../redux/UserSlice';
export default function Nav() {
const user = useSelector(selectUser)
const dispatch = useDispatch()
return (
    <nav className='text-white flex justify-between  h-24 max-w-[1240px] mx-auto px-4 items-center'>
        <h3 className='w-full text-3xl font-bold text-[#FF009E]'>LOFR</h3>
{  user ?  <ul className='flex'>
       <Link to='/'>
        <li className='p-4 list-none'>home</li>
           </Link>
           <Link to='/guide'>
        <li className='p-4 list-none'>guide</li>
           </Link>
           <Link to={`/profile/${user.id}&username=${user.name}`} >
            <li className="p-4 list-none">{user.name}</li>
           </Link>
           <Link to='/'>
             <li className='p-4 list-none' onClick={() => dispatch(logout())}>logout</li>
           </Link>
     </ul> : <>   <Link to='/login'>
      <li className='p-4 list-none'>login</li>
    </Link></>  }
    </nav>
  )
}
