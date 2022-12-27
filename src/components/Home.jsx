import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'
import { selectUser } from '../redux/UserSlice'
export default function Home() {
  const user = useSelector(selectUser)
  return (
    <div>
      
       <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white ">
<p className='text-[#FF009E] text-3xl font-bold p-2'>LOFR  , library of free resources </p>
<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Made by developer for developers</h1>
<div className="flex justify-center items-center">
    <p className='md:text-5-xl sm:text-4xl text-xl font-bold'>including </p>
    <Typed strings={['HTML' ,  'CSS' , 'Git , GitHub', 'Javascript' , 'SASS' , 'React' ,'FrontEnd dev' ]} className='md:text-5-xl sm:text-4xl text-xl  text-[#FF009E] font-bold pl-2' typeSpeed={140} backSpeed={120} loop/>
</div>
{ user ? <Link to='/starting'><button className='bg-[#FF009E] rounded-md font-medium w-[200px] my-6 mx-auto py-6  hover:bg-[#6a174a] active:bg-[#7a1252] focus:outline-none focus:ring focus:ring-violet-300'>Get started</button></Link> :  <Link to='/login'><button className='bg-[#FF009E] rounded-md font-medium w-[200px] my-6 mx-auto py-6  hover:bg-[#6a174a] active:bg-[#7a1252] focus:outline-none focus:ring focus:ring-violet-300'>Login</button></Link>}

        </div> 
    </div>
  )
}
