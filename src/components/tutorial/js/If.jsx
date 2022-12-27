import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import elif from '../../../assets/elif.png'
import el from '../../../assets/el.png'
import i from '../../../assets/if.png'
export default function If() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript if, else, and else if</h1>
            <p className={p}>Conditional statements are used to perform different actions based on different conditions.</p>
      <h4 className={h4}>Conditional Statements</h4>
      <p className={p}>Very often when you write code, you want to perform different actions for different decisions.</p>
      <p className={p}>You can use conditional statements in your code to do this.</p>
      <p className={p}>In JavaScript we have the following conditional statements:</p>
 <ul className={ul}>
    <li className={li}>Use if to specify a block of code to be executed, if a specified condition is true</li>
    <li className={li}>Use else to specify a block of code to be executed, if the same condition is false</li>
    <li className={li}>Use else if to specify a new condition to test, if the first condition is false</li>
 </ul>
 <h4 className={h4}>The if Statement</h4>
 <p className={p}>Use the if statement to specify a block of JavaScript code to be executed if a condition is true.</p>
   <p className={p}>Use the if statement to specify a block of JavaScript code to be executed if a condition is true.</p>
   <img src={i} alt="" className={ul} />
   <h4 className={h4}>The else Statement</h4>
   <p className={p}>Use the else statement to specify a block of code to be executed if the condition is false.</p>
   <p className={p}>If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":</p>
       <img src={el} alt="" className={ul} />
   <h4 className={h4}>The else if Statement</h4>
   <p className={p}>Use the else if statement to specify a new condition if the first condition is false.</p>
   <p className={p}>If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":</p>
   <img src={elif} alt="" className={ul} />
        </div>
    </div>
  )
}
