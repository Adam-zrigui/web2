import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import notCss from '../../../assets/notcss.png'
import Css from '../../../assets/iscss.png'
export default function Nest() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Sass Nested Rules</h1>
            <p className={p}>Sass lets you nest CSS selectors in the same way as HTML.</p>
            <p className={p}>Look at an example of some Sass code for a site's navigation:</p>
            <h4 className={h4}>Example</h4>
            <p className={p}>SCSS Syntax:</p>
            <img src={notCss} alt="" width={450} className={ul} />
    <p className={p}>Notice that in Sass, the ul, li, and a selectors are nested inside the nav selector.</p>
    <p className={p}>While in CSS, the rules are defined one by one (not nested):</p>
   <p className={p}>CSS Syntax:</p>
<img src={Css} alt="" className={ul} width={450}/>
<p className={p}>Because you can nest properties in Sass, it is cleaner and easier to read than standard CSS.</p>
        </div>
    </div>
  )
}
