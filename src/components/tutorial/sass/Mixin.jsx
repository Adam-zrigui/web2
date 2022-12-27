import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import mix from '../../../assets/mix.png'
import mixin from '../../../assets/dangers.png'
import danger from '../../../assets/danger.png'
export default function Mixin() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Sass @mixin and @include</h1>
            <p className={p}>The @mixin directive lets you create CSS code that is to be reused throughout the website.</p>
            <p className={p}>The @include directive is created to let you use (include) the mixin.</p>
<h4 className={h4}>Defining a Mixin</h4>
<p className={p}>A mixin is defined with the @mixin directive.</p>
<img src={mix} alt="" className={ul} />
<h4 className={h4}>Using a Mixin</h4>
<p className={p}>The @include directive is used to include a mixin</p>
<img src={mixin} alt="" className={ul} />      
<p className={p}>The Sass transpiler will convert the above to normal CSS:</p>
<p className={p}>CSS output</p>
<img src={danger} alt="" className={ul} />
        </div>
    </div>
  )
}
