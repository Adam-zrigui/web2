import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import x from '../../../assets/ath.png'
import y from '../../../assets/plus.png'
import z from '../../../assets/multi.png'
import pi from '../../../assets/y.png'
export default function Op() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript Operators</h1>
            <p className={p}>The Assignment Operator (=) assigns a value to a variable.</p>
            <img src={y} alt="" className={ul} />
            <p className={p}>The Multiplication Operator (*) multiplies numbers.</p>
            <img src={z} alt="" className={ul} />
      
              <h4 className={h4}>Types of JavaScript Operators</h4>
            <p className={p}>There are different types of JavaScript operators:</p>
            <ul className={ul}>
                <li className={li}>Arithmetic Operators</li>
                <li className={li}>Assignment Operators</li>
                <li className={li}>Comparison Operators</li>
                <li className={li}>Logical Operators</li>
                <li className={li}>Conditional Operators</li>
                <li className={li}>Type Operators</li>
            </ul>
            <h4 className={h4}>JavaScript Arithmetic Operators</h4>
            <p className={p}>Arithmetic Operators are used to perform arithmetic on numbers:</p>
            <img src={x} alt="" className={ul} />
            <h4 className={h4}>JavaScript Assignment Operators</h4>
            <p className={p}>Assignment operators assign values to JavaScript variables.</p>
            <p className={p}>The Addition Assignment Operator (+=) adds a value to a variable.</p>
          <img src={pi} className={ul} alt="" />
        </div>
    </div>
  )
}
