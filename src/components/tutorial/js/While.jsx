import React from 'react'
import { div, h1, h4, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import d from '../../../assets/d.png'
import x from '../../../assets/r.png'
import o from '../../../assets/do.png'
import z from '../../../assets/dowhile.png'
export default function While() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript While Loop</h1>
            <p className={p}>Loops can execute a block of code as long as a specified condition is true.</p>
            <h4 className={h4}>The While Loop</h4>
            <p className={p}>The while loop loops through a block of code as long as a specified condition is true.</p>
            <p className={p}>Syntax:</p>
            <img src={d} alt="" className={ul} />
            <p className={p}>In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:</p>
            <img src={x} alt="" className={ul} />
            <p className={note}>note: If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.</p>
            <h4 className={h4}>The Do While Loop</h4>
            <p className={p}>The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</p>
            <p className={p}>Syntax:</p>
            <img src={o} alt="" className={ul} />
            <p className={p}>The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:</p>
            <img src={z} alt="" className={ul} />
        </div>
    </div>
  )
}
