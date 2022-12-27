import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import s from '../../../assets/s.png'
import c from '../../../assets/c.png'
import e from '../../../assets/e.png'
export default function Sta() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript Statements</h1>
            <img src={s} alt="" className={ul} />
            <h4 className={h4}>JavaScript Programs</h4>
            <p className={p}>A computer program is a list of "instructions" to be "executed" by a computer.</p>
            <p className={p}>In a programming language, these programming instructions are called statements.</p>
            <p className={p}>A JavaScript program is a list of programming statements.</p>
            <h4 className={h4}>JavaScript Statements</h4>
            <p className={p}>JavaScript statements are composed of:</p>
            <p className={p}>Values, Operators, Expressions, Keywords, and Comments.</p>
            <h4 className={h4}>Semicolons </h4>
            <p className={p}>Semicolons separate JavaScript statements.</p>
            <p className={p}>Add a semicolon at the end of each executable statement:</p>
            <img src={c} alt="" className={ul} />
            <p className={p}>When separated by semicolons, multiple statements on one line are allowed:</p>
            <img src={e} alt="" className={ul} />
        </div>
    </div>
  )
}
