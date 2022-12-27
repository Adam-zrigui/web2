import React from 'react'
import { div, h1, h4, li, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import jsx from '../../../assets/jsx.png'
import no from '../../../assets/no.png'
import close from '../../../assets/closed.png'
export default function X() {
  
  return (
    <div className={div}>
        <Side />
        <div className="">
           <h1 className={h1}>React JSX</h1>
           <h4 className={h4}>What is JSX?</h4>
           <ul className={ul}>
            <li className={li}>JSX stands for JavaScript XML.</li>
            <li className={li}>JSX allows us to write HTML in React.</li>
            <li className={li}>JSX makes it easier to write and add HTML in React.</li>
           </ul>
           <h4 className={h4}>Coding JSX</h4>
           <p className={p}>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.</p>
           <p className={p}>JSX converts HTML tags into react elements.</p>
           <p className={note}>You are not required to use JSX, but JSX makes it easier to write React applications.</p>
           
    <p className={p}>Here are two examples. The first uses JSX and the second does not:</p>
 <p className={p}>JSX:</p>
    <img src={jsx} alt="" className={ul} />
    <p className={p}>Without JSX:</p>
    <img src={no} alt="" className={ul}/>
    <p className={p}>As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.</p>
    <p className={p}>JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.</p>
      <h4 className={h4}>Elements Must be Closed</h4>
      <p className={p}>JSX follows XML rules, and therefore HTML elements must be properly closed.</p>
      <p className={p}>Close empty elements with /&gt;</p>
      <img src={close} alt="" className={ul} />
      <p className={note}>JSX will throw an error if the HTML is not properly closed.</p>
        </div>
    </div>
  )
}
