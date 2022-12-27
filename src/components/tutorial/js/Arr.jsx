import React from 'react'
import { div, h1, h4, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import a from '../../../assets/ar.png'
import ar from '../../../assets/arr.png'
import aa from '../../../assets/car.png'
export default function Arr() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript Arrays</h1>
            <p className={p}>An array is a special variable, which can hold more than one value:</p>
        <img src={a} alt="" className={ul}/>
        <h4 className={h4}>Why Use Arrays?</h4>
        <p className={p}>If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</p>
        <img src={aa} alt="" className={ul} />
        <p className={p}>However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?</p>
        <p className={p}>The solution is an array!</p>
        <p className={p}>An array can hold many values under a single name, and you can access the values by referring to an index number.</p>
        <h4 className={h4}>Creating an Array</h4>
        <p className={p}>Using an array literal is the easiest way to create a JavaScript Array.</p>
        <p className={p}>Syntax:</p>
        <img src={ar} alt="" className={ul} />
        <p className={note}>note: It is a common practice to declare arrays with the const keyword.</p>
        <p className={note}>Note: Array indexes start with 0. [0] is the first element. [1] is the second element.</p>
        </div>
    </div>
  )
}
