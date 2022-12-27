import React from 'react'
import Side from '../../EveryComponent/Side'

export default function Img() {
  return (
    <div className='flex text-white items-start'>
        <Side />
        <div className="">
            <h1 className="font-bold p-4 text-[#FF009E] text-4xl">HTML images</h1>
            <p className='font-semibold text-lg p-4'>Images can improve the design and the appearance of a web page.</p>
            <h4 className='text-3xl font-bold p-4'>HTML images syntax</h4>
            <p className='font-semibold text-lg p-4'>The HTML &lt;<span className='text-[#FF009E]'>img</span>&gt; tag is used to embed an image in a web page.</p>
            <p className='font-semibold text-lg p-4'>Images are not technically inserted into a web page; images are linked to web pages. The &lt;<span className='text-[#FF009E]'>img</span>&gt; tag creates a holding space for the referenced image.</p>
            <p className='font-semibold text-lg p-4'>The &lt;<span className='text-[#FF009E]'>img</span>&gt; tag is empty, it contains attributes only, and does not have a closing tag.
            <p className='font-semibold text-lg mt-12'>The &lt;<span className='text-[#FF009E]'>img</span>&gt; tag has two required attributes:</p>
<ul className="p-7">
    <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]">src - Specifies the path to the image</li>
    <li className="p-4 list-disc font-semibold first-letter:text-[#FF009E]">alt - Specifies an alternate text for the image</li>
</ul>
<h4 className="text-3xl font-bold p-4">Syntax</h4>
<span className='font-semibold ml-96  text-3xl'>&lt;<span className='font-bold text-[#FF009E]'>img <span className='text-yellow-700'>src</span></span>="<span className='text-green-700' >url</span>" <span className='text-yellow-700'>alt</span>="<span className='text-green-700' >alternatetext</span>" &gt;</span>
</p>
<h4 className='text-3xl font-bold p-4'>The alt Attribute</h4>
<p className='font-semibold text-lg p-4'>The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</p>
 <h4 className='text-3xl font-bold p-4'>The src Attribute</h4>
 <p className='font-semibold text-lg p-4'>The required src attribute specifies the path (URL) to the image.

</p>
        </div>
    </div>
  )
}
