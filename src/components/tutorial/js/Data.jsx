import React from 'react'
import { div, h1, h4, li, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import x from '../../../assets/vol.png'
import y from '../../../assets/volvo.png'
import z from '../../../assets/type.png'

export default function Data() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>JavaScript Data Types</h1>
    <h4 className={h4}>JavaScript has 8 Datatypes</h4>
    <ul className={ul}>
        <li className={li}>String</li>
        <li className={li}>Number</li>
        <li className={li}>Bigint</li>
        <li className={li}>Boolean</li>
        <li className={li}>Undefined</li>
        <li className={li}>Null</li>
        <li className={li}>Symbol</li>
        <li className={li}>Object</li>
    </ul>
    <h4 className={h4}>The Object Datatype</h4>
    <p className={p}>The object data type can contain:</p>
    <ul className={ul}>
        <li className={li}>An object</li>
        <li className={li}>An array</li>
        <li className={li}>A date</li>
    </ul>
    <img width={750} src={z} alt="" className={ul} />
    <p className={note}>note:A JavaScript variable can hold any type of data.</p>
    <h4 className={h4}>The Concept of Data Types</h4>
    <p className={p}>In programming, data types is an important concept.</p>
    <p className={p}>To be able to operate on variables, it is important to know something about the type.</p>
    <p className={p}>Without data types, a computer cannot safely solve this:</p>
    <img width={750} src={x} alt="" className={ul} />
    <p className={p}>Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?</p>
    <p className={p}>JavaScript will treat the example above as:</p>
    <img width={750} src={y} alt="" className={ul} />
    <p className={note}>note:When adding a number and a string, JavaScript will treat the number as a string.</p>
</div>
    </div>
  )
}
