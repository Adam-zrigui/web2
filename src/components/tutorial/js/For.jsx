import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import i from '../../../assets/instead.png'
import e from '../../../assets/dothis.png'
import fo from '../../../assets/for.png'
import f from '../../../assets/fo.png'
export default function For() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript For Loop</h1>
            <p className={p}>Loops can execute a block of code a number of times.</p>
        <h4 className={h4}>JavaScript Loops</h4>
        <p className={p}>Loops are handy, if you want to run the same code over and over again, each time with a different value.</p>
        <p className={p}>Often this is the case when working with arrays:</p>
        <p className={p}>Instead of writing:</p>
        <img src={i} alt="" className={ul} />
        <p className={p}>You can write:</p>
        <img src={e} alt="" className={ul} />
        <h4 className={h4}>For loop explained:</h4>
        <p className={p}>A for loop in JavaScript is a control structure that allows you to iterate over a sequence of elements, such as an array. It has the following syntax:</p>
        <img src={fo} alt="" className={ul} />
        <p className={p}>The initialization statement is executed before the loop starts. It is used to initialize a loop variable.</p>
        <p className={p}>The condition statement is evaluated before each iteration of the loop. If it is true, the loop continues. If it is false, the loop stops.</p>
        <p className={p}>The increment statement is executed after each iteration of the loop. It is used to update the loop variable.</p>
        <p className={p}>Here's an example of a for loop that iterates over an array of numbers and prints out the square of each number:</p>
        <img src={f} alt="" className={ul} />
        </div>
    </div>
  )
}
