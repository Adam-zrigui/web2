import React from 'react'
import { h4, p , span } from '../../../data'
import Side from '../../EveryComponent/Side'

export default function Css() {
  return (
    <div className='flex items-start text-white'>
        <Side  />
        <div className="">
        <h1 className='text-4xl font-bold text-[#FF009E] p-4 '>HTML Styles - CSS</h1>
<p className='p-4 text-lg font-semibold'>CSS stands for Cascading Style Sheets.</p>
<p className='p-4 text-lg font-semibold'>CSS saves a lot of work. It can control the layout of multiple web pages all at once.</p>
<h4 className="font-bold p-4 text-3xl">What is CSS?</h4>
<p className='p-4 text-lg font-semibold '>Cascading Style Sheets (CSS) is used to format the layout of a webpage.</p>
<p className='p-4 text-lg font-semibold '>With CSS, you can control the color, font, the size of text, the spacing between elements , what background images or background colors are to be used, different displays for different devices</p>
<h4 className="font-bold p-4 text-3xl">Using CSS?</h4>
<p className="font-semibold text-lg p-4">CSS can be added to HTML documents in 3 ways:</p>
<ul className="p-7">
  <li className="p-4 font-semibold text-lg list-disc"><b>Inline</b> - by using the style attribute inside HTML elements</li>
  <li className="p-4 font-semibold text-lg list-disc"><b>Internal </b>- by using a &lt;<span className='text-[#FF009E]'>style</span>&gt; element in the &lt;<span className='text-[#FF009E]'>head</span>&gt;  section</li>
  <li className="p-4 font-semibold text-lg list-disc"><b>External</b>- by using a &lt;<span className='text-[#FF009E]'>link</span>&gt; element to link to an external CSS file
</li>
</ul>
<p className="font-semibold text-lg p-4">The most common way to add CSS, is to keep the styles in external CSS files.</p>
<h4 className='font-bold text-3xl p-4 '>Inline css</h4>
<p className='font-semibold text-lg p-4'>An inline CSS is used to apply a unique style to a single HTML element.</p>
<p className='font-semibold text-lg p-4'>An inline CSS uses the style attribute of an HTML element.</p>  
<h4 className={h4}>Internal CSS</h4>
<p className={p}>An internal CSS is used to define a style for a single HTML page.</p>
<p className={p}>An internal CSS is defined in the &lt;<span className={span}>head</span>&gt; section of an HTML page, within a &lt;<span className={span}>style</span>&gt; element.</p>
<h4 className={h4}>Internal CSS</h4>
<p className={p}>An internal CSS is used to define a style for a single HTML page.</p>
<p className={p}>To use an external style sheet, add a link to it in the &lt;<span className={span}>head</span>&gt;  section of each HTML page:</p>
        </div>
        </div>
    
  )
}
