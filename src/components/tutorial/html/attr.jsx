import React from 'react'
import Side from '../../EveryComponent/Side'
import pic from '../../../assets/code.png'
import code from '../../../assets/coder.png'
export default function Attr() {
  return (
    <div className='flex items-start text-white'>
<Side />
<div className="">
    <h1 className="font-bold text-4xl p-4 text-[#FF009E]">HTML attribute</h1>
    <ul className="p-7">
      <li className="p-4 font-semibold list-disc text-lg first-letter:text-[#FF009E]">All HTML elements can have attributes</li>
      <li className="p-4 font-semibold list-disc text-lg first-letter:text-[#FF009E]">Attributes provide<b> additional information </b>about elements</li>
      <li className="p-4 font-semibold list-disc text-lg first-letter:text-[#FF009E]">Attributes are always specified in<b> the start tag</b></li>
      <li className="p-4 font-semibold list-disc text-lg first-letter:text-[#FF009E]">Attributes usually come in name/value pairs like: <b>name="value"</b></li>
    </ul>
    <h4 className='font-bold p-4 text-3xl'>The href attribute</h4>
    <p className='p-4 font-semibold text-lg'>The &lt;<span className='text-[#FF009E]'>a</span>&gt; tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to, example:</p>
<img src={pic} alt="" className='p-4' width={1000} />
<h4 className='font-bold p-4 text-3xl'>The src attribute</h4>
    <p className='p-4 font-semibold text-lg'>The &lt;<span className='text-[#FF009E]'>img</span>&gt; tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed , example:</p>
<img src={code} alt="" className='p-4' width={500} />
</div>
    </div>
  )
}
