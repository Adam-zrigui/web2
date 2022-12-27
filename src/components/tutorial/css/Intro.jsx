import React from 'react'
import { div, h1, h4, li, p, ul , span } from '../../../data'
import Side from '../../EveryComponent/Side'
import scss from '../../../assets/css.png'

export default function Int() {
  return (
    <div className={div}>
        <Side />
        <div className="">

            <h1 className={h1}>What is CSS?</h1>
            <ul className={ul}>
            <li className={li}>CSS is the language we use to style a Web page.</li>
<li className={li}>CSS stands for Cascading Style Sheets</li>
<li className={li}>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
<li className={li}>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
<li className={li}>External stylesheets are stored in CSS files</li>
            </ul>
            <h4 className={h4}>Why Use Css?</h4>
            <p className={p}>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
      <img src={scss} alt="" width={550} className='p-4' />
      <h4 className={h4}>CSS Solved a Big Problem</h4>
      <p className={p}>HTML was NEVER intended to contain tags for formatting a web page!</p>
      <p className={p}>HTML was created to describe the content of a web page, like:</p>
        <p className={p}> &lt;<span className={span}>h1</span>&gt;this is a heading&lt;/<span className={span}>h1</span>&gt;</p>
        <p className={p}> &lt;<span className={span}>p</span>&gt;this is a paragraph&lt;/<span className={span}>p</span>&gt;</p>
       <p className={p}>To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p>
        <p className={p}>CSS removed the style formatting from the HTML page!</p>
    
        </div>
    </div>
  )
}
