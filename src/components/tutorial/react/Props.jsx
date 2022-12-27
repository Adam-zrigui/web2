import React from 'react'
import { div, h1, h4, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import prop from '../../../assets/prop.png'
import carname from '../../../assets/carname.png'
import props from '../../../assets/props.png'
import c from '../../../assets/b.png'
import a from '../../../assets/a.png'
export default function Props() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>React Props</h1>
            <p className={p}>React Props are like function arguments in JavaScript and attributes in HTML.</p>
            <p className={p}>To send props into a component, use the same syntax as HTML attributes:</p>
 <img width={650} src={c} alt="" className={ul} />
 <p className={p}>The component receives the argument as a props object:</p>
 <img width={650} src={a} alt="" className={ul} />
 <h4 className={h4}>Pass Data</h4>
 <p className={p}>Props are also how you pass data from one component to another, as parameters.</p>
 <img width={650} src={prop} alt="" className={ul} />
 <p className={p}>If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:</p>
 <img width={650} src={carname} alt="" className={ul} />
 <p className={p}>Or if it was an object:</p>
 <img width={650} src={props} alt="" className={ul} />
 <p className={note}>Note: React Props are read-only! You will get an error if you try to change their value.</p>
        </div>
    </div>
  )
}
