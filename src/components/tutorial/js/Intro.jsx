import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'

export default function Intr() {
  return (
    <div className={div}>
      <Side />
      <div className="">
      <h1 className={h1}>JavaScript Tutorial</h1>
      <ul className={ul}>
        <li className={li}>JavaScript is the world's most popular programming language.</li>
        <li className={li}>JavaScript is the programming language of the Web.</li>
        <li className={li}>JavaScript is easy to learn.</li>
        <li className={li}>This tutorial will teach you JavaScript from basic to advanced.</li>
      </ul>
      <h4 className={h4}>Why Study JavaScript?</h4>
      <p className={p}>JavaScript is one of the 3 languages all web developers must learn:</p>
      <ul className={ul}>
        <li className={li}>1. HTML to define the content of web pages</li>
        <li className={li}>2. CSS to specify the layout of web pages</li>
        <li className={li}>3. JavaScript to program the behavior of web pages</li>
      </ul>
      <h4 className={h4}>Commonly Asked Questions</h4>
      <ul className={ul}>
        <li className={li}>How do I get JavaScript?</li>
        <li className={li}>Where can I download JavaScript?</li>
        <li className={li}>Is JavaScript Free?</li>
      </ul>
      <p className={p}>You don't have to get or download JavaScript.</p>
      <p className={p}>JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.</p>
      <p className={p}>JavaScript is free to use for everyone.</p>
      </div>
    </div>
  )
}
