import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'; 
import { useSelector } from 'react-redux';
import { h4 ,  span} from '../data';
import { selectUser } from '../redux/UserSlice';
export default function Profile() {
const [img , set] = useState([])
const [Url, setUrl] = useState([]);

const user = useSelector(selectUser)
useEffect(() => {
  if (img.length < 1) return;
  const newUrl = []
img.forEach(
 i => newUrl.push(URL.createObjectURL(i))
)
setUrl(newUrl);
}, [img])
function onImg(e){
  set([...e.target.files])
}
  return (
    <div className='text-white h-[100vw]'>
  <div className="flex justify-center ">
    {Url.map((src , key) => <><img src={src} key={key}  className="object-cover w-[160px] my-12 h-[160px] rounded-[50%] border-4  border-pink-600" alt="e" />
      </>)}
  </div>
      <div className="flex justify-center"><input type="file" accept='image/*' onChange={onImg}  className="rounded    my-4 file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 file:before:content-['select an image'] border-pink-600 py-4 px-2 border-4"/></div>
    

    <h4 className={h4}>Your email: <span className={span}> <input type="text"className='bg-transparent outline-none'   readOnly value={user.email} /></span></h4>
    <h4 className={h4}>Your id: <span className={span}> <input type="password" className='bg-transparent outline-none text-lg w-96' id="e" readOnly value={user.id} /></span> </h4>
    <p className='font-semibold '>  <input type="checkbox"  className='checked:bg-blue-500 mx-7'  onClick={() => {
       let x = document.getElementById("e");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
    }}} />show id</p>
    
    <h4 className={h4}>Your password: <span className={span}> <input type="password"  id="a" className='bg-transparent outline-none' readOnly value={user.password} /></span></h4> <p className='font-semibold '> <input type="checkbox" className='checked:bg-blue-500 mx-7' onClick={() => {
       let x = document.getElementById("a");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
    }}}  />show password</p>
    </div>
  )}