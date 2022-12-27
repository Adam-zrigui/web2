import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import x from '../../../assets/leted.png'
import y from '../../../assets/vared.png'
import z from '../../../assets/consted.png'

export default function Declare() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript Variables</h1>
            <p className={p}>4 Ways to Declare a JavaScript Variable:</p>
            <ul className={ul}>
                <li className={li}>Using var</li>
                <li className={li}>Using let</li>
                <li className={li}>Using const</li>
                <li className={li}>Using nothing</li>
            </ul>
            <h4 className={h4}>What are Variables?</h4>
            <p className={p}>Variables are containers for storing data (storing data values).</p>
            <p className={p}>In this example, x, y, and z, are variables, declared with the var keyword:</p>
            <img width={450} src={x} alt="" className={ul} />
            <p className={p}>In this example, x, y, and z, are variables, declared with the let keyword:</p>
            <img width={450} src={y} alt="" className={ul} />
            <h4 className={h4}>When to Use JavaScript const?</h4>
            <p className={p}>If you want a general rule: always declare variables with const.</p>
            <p className={p}>If you think the value of the variable can change, use let.</p>
            <p className={p}>In this example, price1, price2, and total, are variables:</p>
            <img width={450} src={z} alt="" className={ul} />
            <p className={p}>The two variables price1 and price2 are declared with the const keyword.</p>
            <p className={p}>These are constant values and cannot be changed.</p>
            <p className={p}>The variable total is declared with the let keyword.</p>
            <p className={p}>This is a value that can be changed.</p>
        </div>
    </div>
  )
}
