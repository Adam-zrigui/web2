import React from 'react'
import { div , h1, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import x from '../../../assets/func.png'
import y from '../../../assets/ad.png'
import z from '../../../assets/f.png'
import fun from '../../../assets/arrow.png'
import fu from '../../../assets/res.png'
export default function Func() {
  return (
    <div className={div}>
        <Side />
        <div className="">
<h1 className={h1}>function tutorial</h1>
<p className={p}>A function in JavaScript is a block of code designed to perform a specific task.</p>
<p className={p}>defined using the function keyword, followed by the name of the function, a list of parameters in parentheses, and a block of code in curly braces.</p>
<p className={p}>Here's an example of a function that takes in two parameters, x and y, and returns the sum of those two values:
<img src={x} alt="" className={ul} />
</p>
<p className={p}>To call or invoke a function, you simply use its name followed by the arguments in parentheses. For example:</p>
       <img src={y} alt="" className={ul} />
       <p className={p}>You can also define functions using the function expression syntax:</p>
    <img src={z} alt="" className={ul} />
       <p className={p}>This syntax is useful when you want to assign a function to a variable or pass it as an argument to another function.</p>
       <p className={p}>You can also use the arrow function syntax, which is a shorter and more concise way to define functions:</p>
       <img src={fun} alt="" className={ul} />
       <p className={p}>Functions can be nested, meaning you can define a function within another function.</p>
       <p className={p}>The inner function has access to the variables and parameters of the outer function. This is called a closure.</p>
       <img src={fu} alt="" className={ul} />
        </div>
     </div>
  )
}
