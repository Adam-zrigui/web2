import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import x from '../../../assets/x.png'
import y from '../../../assets/num.png'
import str from '../../../assets/str.png'
import z from '../../../assets/z.png'
export default function Syntax() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>JavaScript Syntax</h1>
    <p className={p}>JavaScript syntax is the set of rules, how JavaScript programs are constructed:</p>
    <img width={300} src={x} alt=""  className={ul} />
    <h4 className={h4}>JavaScript Values</h4>
    <p className={p}>The JavaScript syntax defines two types of values:</p>
    <ul className={ul}>
        <li className={li}>Fixed values</li>
        <li className={li}>Variable values</li>
    </ul>
    <p className={p}>Fixed values are called Literals.</p>
    <p className={p}>Variable values are called Variables.</p>
    <h4 className={h4}>JavaScript Literals</h4>
    <p className={p}>The two most important syntax rules for fixed values are:</p>
    <p className={p}>1. Numbers are written with or without decimals:</p>
    <img width={300} src={y} alt="" className={ul} />
    <p className={p}>2. Strings are text, written within double or single quotes:</p>
    <img width={300} src={str} alt="" className={ul} />
    <h4 className={h4}>JavaScript Variables</h4>
    <p className={p}>In a programming language, variables are used to store data values.</p>
    <p className={p}>JavaScript uses the keywords var, let and const to declare variables.</p>
    <p className={p}>An equal sign is used to assign values to variables.</p>
    <p className={p}>In this example, x is defined as a variable. Then, x is assigned (given) the value 6:</p>
    <img width={300} src={z} alt="" className={ul} />
</div>
    </div>
  )
}
