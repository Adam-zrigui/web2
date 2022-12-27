import React from 'react'
import { div, h1, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import bscss from '../../../assets/bscss.png'
import bcss from '../../../assets/bcss.png'
export default function Extend() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Sass @extend and Inheritance</h1>
            <ul className={ul}>
                <li className={li}>The @extend directive lets you share a set of CSS properties from one selector to another.</li>
                <li className={li}>The @extend directive is useful if you have almost identically styled elements that only differ in some small details.</li>
            </ul>
            <p className={p}>The following Sass example first creates a basic style for buttons (this style will be used for most buttons). Then, we create one style for a "Report" button and one style for a "Submit" button. </p>
<p className={p}>SCSS Syntax:</p>
<img src={bscss} alt="" className={ul} width={450} />
   <p className={p}>After compilation, the CSS will look like this:</p>
   <p className={p}>Css Output</p>
<img src={bcss} alt="" className={ul}  width={450}  />
<p className={p}>By using the @extend directive,  You just need to specify .button-report to get both sets of styles.</p>
<p className={p}>The @extend directive helps keep your Sass code very DRY</p>
        </div>
    </div>
  )
}
