import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/CrudSlice'


import List from './posts/List'

export default function Guide() {
const [dec , setdec] = useState({title:''})
const dispatch = useDispatch()
  return (
<>
<div className='flex justify-center items-center w-[100%] h-[73.5vh]'>
  <div className="w-full max-w-xs">
  <form className="bg-[#2e2a2a] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => {
    e.preventDefault()
    dispatch(addTask({...dec , id:Math.floor(Math.random()* 100000000 )}))}}
  >
    <div className="mb-4">
      <label className="block  text-[#FF009E] text-sm font-bold mb-2" htmlFor="title">
        topic
      </label>
  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="topic"  placeholder="t" required>
    <option value="html">html</option>
    <option value="css">css</option>
    <option value="git">git</option>
    <option value="sass">sass</option>
    <option value="javascript">javascript</option>
    <option value="react">react.js</option>
    </select>   
    </div>
    <div className="mb-6">
      <label className="block  text-[#FF009E] text-sm font-bold mb-2" htmlFor="text">
      description
      </label>
<textarea name="" id="" className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' cols="30" rows="5" onChange={(e) => setdec({...dec, title:e.target.value})}  required/>
  </div>
    <div className="flex items-center ju">
      <input type='submit' value='submit'  className="bg-[#FF009E] hover:bg-[#62083f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
    </div>
  </form>
</div>

  </div>
  <List />
  </>
  )
}
