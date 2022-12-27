import React from 'react'
import Side from '../../EveryComponent/Side'

export default function Intro() {
  return (
    <div className='flex text-[#fff] items-start '>
<Side />
<div className="">
    <h1 className='text-[#FF009E] text-4xl font-bold p-4'>What's html?</h1>
    <div className="">
        <ul className='p-7 list-disc'>
            <li className='font-semibold first-letter:text-[#FF009E] p-4'>HTML stands for Hyper Text Markup Language</li>
            <li className='font-semibold first-letter:text-[#FF009E] p-4'>HTML is the standard markup language for creating Web pages</li>
            <li className='font-semibold first-letter:text-[#FF009E] p-4'>HTML describes the structure of a Web page</li>
            <li className='font-semibold first-letter:text-[#FF009E] p-4'>HTML consists of a series of elements</li>
            <li className='font-semibold first-letter:text-[#FF009E] p-4'>HTML elements tell the browser how to display the content</li>
            <li className='font-semibold first-letter:text-[#FF009E] p-4'>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
        </ul>
    </div>
    <div className="">
        <h1 className='text-[#FF009E] text-4xl font-bold p-4'>What's an HTML Element?</h1>
<p className='p-4 font-semibold text-lg'>an HTML element has 2 things , a starting tag , a closing tag:</p>
<span className='font-semibold ml-96 text-3xl'> &lt;<span className='font-bold text-[#FF009E]'>TagName</span>&gt; Content goes here... &lt;/<span className='font-bold text-[#FF009E]'>TagName</span>&gt; </span>

<p className='font-bold mt-[70px] transition  hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-16 text-3xl p-4 rounded-md bg-[#FF009E] ml-96 text-black text-center'>Note: some tags like &lt;br&gt; doesn't have a closing tag</p>
    </div>
    <div className="">
        <p className='font-semibold first-letter:text-4xl first-letter:text-[#FF009E]  text-lg p-4 '>At this point, i would recommend starting with this video:</p>
        <iframe className='ml-96 mt-16 ' width="680" height="415" src="https://www.youtube.com/embed/HD13eq_Pmp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
    </div>
  )
}
