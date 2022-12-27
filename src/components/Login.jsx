import React from 'react'
import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { login } from '../redux/UserSlice'
import {Link} from 'react-router-dom'
import {selectUser} from '../redux/UserSlice'
import { v4 as uuidv4 } from 'uuid';
export default function Login() {
const [name , setName] = useState("")
const [password , setPassword] = useState("")
const [ email, setEmail ] = useState("")   
const [img] = useState( 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEWD1qfw8PD18fR71KKZ27Xc6+Ke3LjY6t/g7OWT2bH08fOX2rSA1qXa6uGH16n78/jL5tbs7+1z057E5dKq3sB6JI1NAAAB4ElEQVR4nO3dTU/CUBCG0UJBQVrx6///VhM3JtrI3KT2zuh5dmxe7tmTYdj99YbeD/j1COtHWD/C+hHWj7B+hPUjrN//FD7ULSZ8no9Vm08R4cP8MpbtvI8Ij+NQtelASJg9QsL8ERLmj5Awf4SE+SMkzB8hYf4ICfNHSJg/QsL8ERLmj7BNOEUKPmytqVWFj4dA59C71ptaUzgdrvvbnTafWlP4fSvnFCEhYf8pQkLC/lOEhIT9pwgJCftPERIS9p8iJCTsP0VISNh/ipCQsP8U4Q9bgSMOHabWE55PgSsOT6HzDLGprYXDFHn7y+t8f7PjJXQQIvSozX8xNM5L10a+tL8L/uzmdh2E97eBhC0RErZHSNgaIWF7hIStERK2R0jYGiFhe4SErREStkdI2BohYXuEhK0RErY3HgO3BK6VhdPlLtDjet+3uXCYpo+zHp+3PRY/rvd12ws3jpAwf4SE+SMkzB8hYf4ICfNHSJg/QsL8ERLmj5Awf4SE+SMkzB8hYf4ICfNHSJg/QsL8ERLmj5Awf4SE+SMkzB8hYf4ICfNHSJg/QsL8Ef4b4TxOZbtEhLvT+VC1y9v3f5tYEO4C1zqytvB3GkvCvxVh/QjrR1g/wvoR1o+wfoT1I6zfO1pEl7TpwP3kAAAAAElFTkSuQmCC')

const dispatch = useDispatch()
const user = useSelector(selectUser)
const Handler = (e) => {
  dispatch(login({
name: name,
email: email,
password: password,
loggedIn: true,
id: uuidv4() ,
image: img

  })
  )
  e.preventDefault()
  setName('')
  setEmail('')
  setPassword('')
} 
return (     
    <div className='flex justify-center items-center w-[100%] h-[73.5vh]'>
<div className="w-full max-w-xs  ">
  <form  className='bg-[#2e2a2a] shadow-md rounded px-8 pt-6 pb-8 mb-4 h-96 ' onSubmit={Handler}>
    <label className='block  text-[#FF009E] text-md font-bold mb-2'>username:</label>
      <input type="name" placeholder='your username' className='shadow shake appearance-none border mb-5 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' minLength={4} maxLength={15} required value={name} onChange={(e) => setName(e.target.value)} />
      <label className='block  text-[#FF009E] text-md font-bold mb-2'>email:</label>
      <input type="email" placeholder='your email' className='shadow shake appearance-none border mb-5 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className='block  text-[#FF009E] text-md font-bold mb-2'>password:</label>
      <input type="password" className='shadow appearance-none border shake rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  required placeholder='********' minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
{ user ?  <><Link to='/'><button   className='bg-indigo-500 hover:bg-indigo-700 text-white mt-7 ml-20 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>continue</button></Link>  </> : <button type="submit"  className='bg-[#FF009E] hover:bg-[#62083f] text-white mt-7 ml-20 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>}
      </form>   
</div>
    </div>
  )
}
