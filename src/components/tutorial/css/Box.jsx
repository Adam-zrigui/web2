import React from 'react'
import { div, h1, h4, li, p, span, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import box from '../../../assets/box.png'
export default function Box() {
  return (
    <div className={div}>
        <Side />
        <div className="">
          <h1 className={h1}>CSS Box Model</h1>
          <p className={p}>All HTML elements can be considered as boxes.</p>
          <h4 className={h4}>The CSS Box Model</h4>
          <p className={p}>In CSS, the term "box model" is used when talking about design and layout.</p>
          <p className={p}>Explanation of the different parts:</p>
          <ul className={ul}>
<li className={li}>Content - The content of the box, where text and images appear</li>
<li className={li}>Padding - Clears an area around the content. The padding is transparent</li>
<li className={li}>Border - A border that goes around the padding and content</li>
<li className={li}>Margin - Clears an area outside the border. The margin is transparent</li>
          </ul>
          <p className={p}>The box model allows us to add a border around elements, and to define space between elements.</p>
          <h4 className={h4}>Example</h4>
          <p className={p}>This &lt;<span className={span}>div</span>&gt; element will have a total width of 350px:</p>
        <img src={box} width={450} alt="" className={ul} />
        <p className='font-bold mt-[20px] transition  hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  text-2xl p-4 rounded-md bg-[#FF009E] ml-96 w-96 text-black text-center'>Important: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.</p>
        </div>
    </div>
  )
}
