import React from 'react'
import { div, h1, Nli, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import scss from '../../../assets/scssvar.png'
import sass from '../../../assets/scssv.png'
import sout from '../../../assets/sout.png'
export default function Var() {
  return (
    <div className={div}>
        <Side />
    <div className="">
        <h1 className={h1}>Sass Variables</h1>
        <p className={p}>With Sass, you can store information in variables, like:</p>
        <ul className={ul}>
            <li className={Nli}>strings</li>
            <li className={Nli}>numbers</li>
            <li className={Nli}>colors</li>
            <li className={Nli}>booleans</li>
            <li className={Nli}>lists</li>
            <li className={Nli}>nulls</li>
        </ul>
        <p className={p}>Sass uses the $ symbol, followed by a name, to declare variables:</p>
        <p className={p}>Sass Variable Syntax:</p>
        <img src={scss} alt="" className={ul} width={450}/>
        <p className={p}>The following example declares 4 variables named myFont, myColor, myFontSize, and myWidth. After the variables are declared, you can use the variables wherever you want:</p>
  <img src={sass} alt="" className={ul} width={450}/>
  <p className={p}>So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:</p>
  <img src={sout} alt="" className={ul} width={450} />
    </div>
    </div>
  )
}
