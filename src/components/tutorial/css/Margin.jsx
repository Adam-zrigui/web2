import React from 'react'
import { div, h1, h4, li, p, ul , span } from '../../../data'
import Side from '../../EveryComponent/Side'
import m from '../../../assets/m.png'
export default function Margin() {
  return (
    <div className={div}>
    <Side />
        <div className="">
            <h1 className={h1}>CSS Margins</h1>
            <p className={p}>The CSS margin properties are used to create space around elements, outside of any defined borders.</p>
            <p className={p}>With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</p>
            <h4 className={h4}>Margin - Individual Sides</h4>
            <p className={p}>CSS has properties for specifying the margin for each side of an element:</p>
            <ul className={ul}>
                <li className={li}>margin-top</li>
                <li className={li}>margin-right</li>
                <li className={li}>margin-bottom</li>
                <li className={li}>margin-left</li>
            </ul>
            <p className={p}>All the margin properties can have the following values:</p>
            <ul className={ul}>
                <li className={li}>auto - the browser calculates the margin</li>
                <li className={li}>length - specifies a margin in px, pt, cm, etc</li>
                <li className={li}>% - specifies a margin in % of the width of the containing element</li>
                <li className={li}>inherit - specifies that the margin should be inherited from the parent element</li>
            </ul>
            <p className='font-bold mt-[70px] transition  hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-16 text-3xl p-4 rounded-md bg-[#FF009E] ml-96 text-black text-center'>Note: Negative values are allowed. </p>
<h4 className={h4}>Example</h4>
<p className={p}>Set different margins for all four sides of a &lt;<span className={span}>p</span>&gt; element:</p>
        <img src={m} alt="" className={ul} width={450} />
        </div>
    </div>
  )
}
