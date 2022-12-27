import React from 'react'
import Side from '../../EveryComponent/Side'
import ee from './ee.png'
export default function El() {
  return (
    <div className='flex items-start text-white'>
<Side />
    <div className="">
        <div className="">
            <h1 className='text-[#FF009E] text-4xl font-bold p-4'>HTML element</h1>
            <p className='p-4 font-semibold text-lg'>the HTML element is everything from the start tag to the end tag: </p>
            <span className='font-semibold ml-96 text-3xl'> &lt;<span className='font-bold text-[#FF009E]'>TagName</span>&gt; Content goes here... &lt;/<span className='font-bold text-[#FF009E]'>TagName</span>&gt; </span>
              <p className="p-4 font-semibold text-lg">more examples of some HTML elements:</p>
              <span className='font-semibold ml-96 text-3xl'> &lt;<span className='font-bold text-[#FF009E]'>h1</span>&gt;heading&lt;/<span className='font-bold text-[#FF009E]'>h1</span>&gt; </span>
              <span className='font-semibold  text-3xl'> &lt;<span className='font-bold text-[#FF009E]'>p</span>&gt;paragraph&lt;/<span className='font-bold text-[#FF009E]'>p</span>&gt; </span>
              <p className='font-bold mt-[70px] transition  hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-24 text-3xl p-4 rounded-md bg-[#FF009E] w-[70vw] ml-24 text-black text-center'>Note: Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!</p>
        </div> 
        <div className="">
        <h4 className='font-bold p-4 text-3xl'>Nested elements in HTML:</h4>
        <ul className="p-7">
            <li className="p-4 first-letter:text-[#FF009E]  list-disc font-semibold" id="FF009E">HTML elements can be nested (this means that elements can contain other elements).</li>
            <li className="p-4 first-letter:text-[#FF009E]  list-disc font-semibold" id="FF009E">All HTML documents consist of nested HTML elements.</li>
            <li className="p-4 first-letter:text-[#FF009E]  list-disc font-semibold" id="FF009E">The following example contains four HTML elements (&lt;<span className='text-[#FF009E]'>html</span>&gt;, &lt;<span className='text-[#FF009E]'>body</span>&gt;, &lt;<span className='text-[#FF009E]'>h1</span>&gt; and &lt;<span className='text-[#FF009E]'>p</span>&gt;) </li>
      <img src={ee} alt="why" width={500} />
        </ul>
     
    </div>
    </div>
  
    </div>
  )
}
