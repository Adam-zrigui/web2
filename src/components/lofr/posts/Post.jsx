import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editTask } from '../../../redux/CrudSlice';
import {FiEdit2} from 'react-icons/fi'
import {GiConfirmed , GiCancel} from 'react-icons/gi'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import {p} from '../../../data'
import { selectUser } from '../../../redux/UserSlice';

export default function Post({task}) {
const user = useSelector(selectUser)
    const dispatch = useDispatch()
const [OnUp, setUp] = useState(false);
const [Edit, setEdit] = useState(task);
  return (
    <div className='flex m-7  text-white'>
      {OnUp ? 
      <>
<div className="rounded bg-gray-500 w-96 h-52 ">
<h4 className={` ${p} text-[#FF009E]`}>@{user.name} editing:</h4>
       <textarea rows={3}  className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' defaultValue={task.title} onChange={(e) =>  setEdit({...Edit , title: e.target.value})}/>
    <div className="flex justify-end items-end h-12">
        <button  className='m-4' onClick={() => setUp(false)}>
         <GiCancel  className='text-[20px]'/>
        </button>
        <button  className='m-4' onClick={() => {dispatch(editTask(Edit)); setUp(false) }}>
         <GiConfirmed  className='text-[20px]'/>
         </button>
    </div>
</div>  
      </>
       :   <>
          <div className="bg-gray-500 rounded h-52 w-96">
              <h4 className={` ${p} text-[#FF009E]`}>@{user.name} posted:</h4>
                     <p className={`font-semibold p-4 text-sm break-words`}>{task.title}</p>
                      <div className="flex justify-end m-4">
                          <button className='m-4' onClick={ () => setUp(true)}>
                                          <FiEdit2 className='text-[20px]' />
                          </button>
                          <button  className='m-4' onClick={() => dispatch(deleteTask(task))}>
                                          <RiDeleteBack2Fill  className='text-[20px]'/>
                          </button>
                      </div>
          </div>
        </>
        }
     
    </div>
  )
}
