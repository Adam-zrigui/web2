import React from 'react'
import { div, h1, h4, li, p, span, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import pa from '../../../assets/p.png'
export default function Padding() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>CSS Padding</h1>
            <p className={p}>The CSS padding properties are used to generate space around an element's content, inside of any defined borders.</p>
            <p className={p}>With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
            <h4 className={h4}>Padding - Individual Sides</h4>
            <p className={p}>CSS has properties for specifying the padding for each side of an element:</p>
            <ul className={ul}>
                <li className={li}>padding-top</li>
                <li className={li}>padding-right</li>
                <li className={li}>padding-bottom</li>
                <li className={li}>padding-left</li>
            </ul>
            <p className={p}>All the paddings properties can have the following values:</p>
            <ul className={ul}>
                <li className={li}>auto - the browser calculates the margin</li>
                <li className={li}>length - specifies a margin in px, pt, cm, etc</li>
                <li className={li}>% - specifies a margin in % of the width of the containing element</li>
                <li className={li}>inherit - specifies that the margin should be inherited from the parent element</li>
            </ul>
            <p className='font-bold mt-[70px] transition  hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-16 text-3xl p-4 rounded-md bg-[#FF009E] ml-96 text-black text-center'>Note: Negative values are not allowed. </p>
            <p className={p}>Set different padding for all four sides of a &lt;<span className={span}>p</span>&gt; element:</p>
        <img src={pa} alt="" className={ul} width={450} />
        </div>
    </div>
  )
}
