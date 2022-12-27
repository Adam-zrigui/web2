import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import logic from '../../../assets/logic.png'
import temp from '../../../assets/temp.png'
import temps from '../../../assets/temps.png'
export default function Con() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>React Conditional Rendering</h1>
<p className={p}>In React, you can conditionally render components.</p>
<p className={p}>There are several ways to do this.</p>
<h4 className={h4}>Logical && Operator</h4>
<p className={p}>The way to conditionally render a React component is by using the && operator.</p>
<img src={logic} alt="" className={ul} />
<p className={p}>If cars.length &gt; 0 is equates to true, the expression after && will render.</p>
<h4 className={h4}>Ternary Operator</h4>
<p className={p}>Another way to conditionally render elements is by using a ternary operator.</p>
<img src={temp} alt="" className={ul} />
<p className={p}>Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:</p>
<img src={temps} alt="" className={ul} />
</div>
    </div>
  )
}
