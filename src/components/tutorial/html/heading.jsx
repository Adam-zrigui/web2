import React from 'react'
import Side from '../../EveryComponent/Side'
import picer from '../../../assets/head.png'
export default function Heading() {
  return (
    <div className='flex items-start text-white'>
        <Side />
        <div className="">
            <h1 className='font-bold text-4xl text-[#FF009E] p-4'>HTML Headings</h1>
            <p className="p-4 font-semibold text-lg">HTML headings are titles or subtitles that you want to display on a webpage, Example:</p>
    <ul className="p-7">
        <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]"><h1 className='text-[24px]'>Heading 1 </h1></li>
        <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]"><h2 className='text-[22px]'>Heading 2 </h2></li>
        <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]"><h3 className='text-[20px]'>Heading 3 </h3></li>
        <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]"><h4 className='text-[18px]'>Heading 4 </h4></li>
        <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]"><h5 className='text-[16px]'>Heading 5 </h5></li>
        <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]"><h6 className='text-[14px]'>Heading 6 </h6></li>
    </ul>
    <ul className='p-7'>
<li className="list-disc font-semibold text-lg p-4 first-letter:text-[#FF009E]">HTML heading  are defined with the &lt;<span className='text-[#FF009E]'>h1</span>&gt; to   &lt;<span className='text-[#FF009E]'>h6</span>&gt;  </li>
<li className="list-disc font-semibold text-lg p-4">
&lt;<span className='text-[#FF009E]'>h1</span>&gt; defines the most important heading  and  &lt;<span className='text-[#FF009E]'>h6</span>&gt;  the least important heading   
</li>
    </ul>
    <img src={picer} className='p-7' width={400}  alt="" />
    <p className='font-bold mt-[70px] transition  hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-24 text-3xl p-4 rounded-md bg-[#FF009E] w-[70vw] ml-24 text-black text-center'>Note: Browsers automatically add some white space (a margin) before and after a heading.</p>
        </div>
    </div>
  )
}
