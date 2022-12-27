import React from 'react'
import { div, h1, h4, li, p, span, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import w from '../../../assets/W.png'
export default function W() {
  return (
    <div className={div}>
        <Side />
        <div>
            <h1 className={h1}>CSS Height, Width </h1>
            <p className={p}>The height and width properties are used to set the height and width of an element.</p>
            <p className={p}>The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.</p>
       <h4 className={h4}>CSS height and width Values</h4>
       <p className={p}>The height and width properties may have the following values:</p>
       <ul className={ul}>
        <li className={li}>auto - This is default. The browser calculates the height and width</li>
        <li className={li}>length - Defines the height/width in px, cm, etc</li>
        <li className={li}>% - Defines the height/width in percent of the containing block</li>
        <li className={li}>initial - Sets the height/width to its default value</li>
        <li className={li}>inherit - The height/width will be inherited from its parent value</li>
       </ul>
       <h4 className={h4}>CSS height and width Example</h4>
       <p className={p}>Set the height and width of a  &lt;<span className={span}>div</span>&gt; element </p>
        <img src={w} alt="" className={ul} />
        </div>
    </div>
  )
}
