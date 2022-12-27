import React from 'react'
import { div, h1, h4, note, p } from '../../../data'
import Side from '../../EveryComponent/Side'

export default function It() {
  return (
    <div className={div}>
        <Side />
    <div className="">
        <h1 className={h1}>React Introduction</h1>
 <h4 className={h4}>What is React?</h4>
 <p className={p}>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</p>
 <p className={p}>React is a tool for building UI components.</p>
 <h4 className={h4}>How does React Work?</h4>
 <p className={note}>React creates a VIRTUAL DOM in memory.</p>
 <p className={p}>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
 <p className={note}>React only changes what needs to be changed!</p>
 <p className={p}>React finds out what changes have been made, and changes only what needs to be changed.</p>
      <h4 className={h4}>React.JS History</h4>
      <p className={p}>Current version of React.JS is V18.2.0 (December 2022).</p>
      <p className={p}>Initial Release to the Public (V0.3.0) was in July 2013.</p>
      <p className={p}>React.JS was first used in 2011 for Facebook's News feed feature.</p>
      <p className={p}>Facebook Software Engineer, Jordan Walke, created it.</p>
      <p className={p}>create-react-app includes built tools such as webpack, Babel, and ESLint.</p>
<h4 className={h4}>React Getting Started</h4>
<p className={p}>To get an overview of what React is, you can write React code directly in HTML.</p>
<p className={p}>But in order to use React in production, you need npm and<a className='text-[#3b3b9e] underline hover:text-[#181847]' download href="https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi"> Node.js</a> installed.</p>
        </div>    
    </div>
  )
}
