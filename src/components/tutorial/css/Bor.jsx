import React from 'react'
import { div, h1, h4, Nli, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import ber from '../../../assets/border.png'
export default function Bor() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>CSS Borders</h1>
    <p className={p}>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
    <h4 className={h4}>CSS Border Style</h4>
    <p className={p}>The border-style property specifies what kind of border to display.</p>
    <p className={p}>The following values are allowed:</p>
    <ul className={ul}>
        <li className={Nli}>dotted - Defines a dotted border</li>
        <li className={Nli}>dashed - Defines a dashed border</li>
        <li className={Nli}>solid - Defines a solid border</li>
        <li className={Nli}>double - Defines a double border</li>
        <li className={Nli}>groove - Defines a 3D grooved border. The effect depends on the border-color value</li>
        <li className={Nli}>ridge - Defines a 3D ridged border. The effect depends on the border-color value</li>
        <li className={Nli}>inset - Defines a 3D inset border. The effect depends on the border-color value</li>
        <li className={Nli}>outset - Defines a 3D outset border. The effect depends on the border-color value</li>
        <li className={Nli}>none - Defines no border</li>
        <li className={Nli}>hidden - Defines a hidden border</li>
    </ul>
    <p className={p}>The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).</p>
    <img src={ber} width={400} className={ul} alt="" />
</div>
    </div>
  )
}
