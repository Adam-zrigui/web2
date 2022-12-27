import React from 'react'
import Side from '../../EveryComponent/Side'

export default function Basic() {
  return (
    <div className='flex items-start text-white'>
<Side />
<div className="">
    <h1 className='text-[#FF009E] text-4xl font-bold p-4'>HTML basics</h1>

<p className='p-4 font-bold text-2xl'>in this chapter we're gonna see some html basics to start with:</p>

<div className="">
    <h4 className='font-bold p-4 text-3xl'>HTML Documents:</h4>
<ul className='p-7'>
    <li className="p-4 first-letter:text-[#FF009E] list-disc font-semibold text-lg">All documents in HTML starts with  &lt;<span className='text-[#FF009E]'>!DOCTYPE html</span>&gt;</li>
    <li className="p-4 first-letter:text-[#FF009E] list-disc font-semibold text-lg">The actual HTML document starts with <span> &lt;<span className='text-[#FF009E]'>html</span>&gt; and ends with &lt;/<span className=' text-[#FF009E]'>html</span>&gt; </span></li>
    <li className="p-4 first-letter:text-[#FF009E] list-disc font-semibold text-lg">The client only sees the visible part of the code which is in the <span> &lt;<span className='text-[#FF009E]'>body</span>&gt; , &lt;/<span className=' text-[#FF009E]'>body</span>&gt; </span>  </li>
</ul>
</div>
<div className="">
    <h4  className='font-bold p-4 text-3xl'>What does  &lt;<span>!DOCTYPE</span>&gt; do? </h4>
    <ul className="p-7">
        <li className="p-4 first-letter:text-[#FF009E] list-disc font-semibold text-lg">The &lt;<span className='text-[#FF009E]'>!DOCTYPE</span>&gt; declaration represents the document type , and helps browser to display web pages</li>
        <li className="p-4 first-letter:text-[#FF009E] list-disc font-semibold text-lg">It only appears at the top of the page before any tag</li>
        <li className="p-4 first-letter:text-[#FF009E] list-disc font-semibold text-lg">In HTML 5 the declaration of DOCTYPE is &lt;<span className='text-[#FF009E]'>!DOCTYPE html</span>&gt;</li>
    </ul>
</div>
<div className="">
    <h4 className='font-bold p-4 text-3xl'>What is HTML Heading?</h4>
    <ul className='p-7'>
<li className="list-disc font-semibold text-lg p-4 first-letter:text-[#FF009E]">HTML heading  are defined with the &lt;<span className='text-[#FF009E]'>h1</span>&gt; to   &lt;<span className='text-[#FF009E]'>h6</span>&gt;  </li>
<li className="list-disc font-semibold text-lg p-4">
&lt;<span className='text-[#FF009E]'>h1</span>&gt; defines the most important heading  and  &lt;<span className='text-[#FF009E]'>h6</span>&gt;  the least important heading   
</li>
    </ul>
</div>
</div>
    </div>
  )
}

