import React from 'react'
import Side from '../../EveryComponent/Side'
export default function Style() {
  return (
    <div className='flex text-white items-start'>
        <Side />
        <div className="">
            <h1 className='text-[#FF009E] font-bold text-4xl p-4'>Inline style</h1>
            <p className="font-semibold text-lg p-4">The HTML style attribute is used to add styles to an element, such as color, font, size, and more , example</p>
<ul className="p-7">
  <li className="p-4 list-disc text-red-800">i'm red</li>
  <li className="p-4 list-disc text-blue-700">i'm blue</li>
  <li className="p-4 ml-7 list-disc text-[35px]">i'm big</li>
</ul>
<h4 className='font-bold text-3xl p-4'>The HTML Style Attribute</h4>
<p className='font-semibold text-lg p-4'>Setting the style of an HTML element, can be done with the style attribute.</p>
<p className='font-semibold text-lg p-4 mb-24'>The HTML style attribute has the following syntax:</p>

<span className='font-semibold ml-96  text-3xl'>&lt;<span className='font-bold text-[#FF009E]'>TagName <span className='text-yellow-700'>style</span></span>="<span className='text-green-700' >property:value;</span>"&gt;</span>
<p className='text-lg font-semibold mt-32 p-4'>The property is a CSS property. The value is a CSS value.</p>


        </div>
    </div>
  )
}
