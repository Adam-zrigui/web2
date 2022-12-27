import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import coloring   from '../../../assets/color.png'
import t   from '../../../assets/test.png'
export default function Color() {
    
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>CSS Colors</h1>
            <p className={p}>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
       <h4 className={h4}>Css Color Names</h4>
        <p className={p}>In CSS, a color can be specified by using a predefined color name:</p>
        <ul className={`${ul} flex justify-evenly `}>
<li className='bg-blue-700 w-24 text-center'>blue</li>
<li className=' w-24 text-center bg-orange-500'>Orange</li>
<li className=' w-24 text-center bg-gray-500'>Gray </li>
<li className=' w-24 text-center bg-gray-300'>LightGray</li>
<li className=' w-24 text-center bg-purple-800'>purple</li>
<li className=' w-24 text-center bg-red-700'>Tomato</li>
        </ul>
<h4 className={h4}>CSS Background Color</h4>
<p className={p}>You can set the background color for HTML elements:</p>
        <img src={coloring} width={550} className='p-7' alt="" />
      <h4 className={h4}>CSS Text Color</h4>
      <p className={p}>You set the color of text:</p>
      <p style={{color:"Tomato"}} className='p-4'>Hello World</p>
<p style={{color:"DodgerBlue"}} className='p-4'>Lorem ipsum...</p>
<p style={{color: "MediumSeaGreen"}} className='p-4'>Ut wisi enim...</p>
       <img src={t} width={550} className='p-4' alt="" />
        </div>
    </div>
  )
}
