import React from 'react'
import { div, h1, h4, p  , span, ul} from '../../../data'
import Side from '../../EveryComponent/Side'
import media from '../../../assets/media.png'
import med from '../../../assets/med.png'
export default function Media() {
  return (
    <div className={div}>
        <Side />
        <div className="">
          <h1 className={h1}>Responsive Web Design - Media Queries</h1>
          <h4 className={h4}>What is a Media Query?</h4>
          <p className={p}>Media query is a CSS technique introduced in CSS3.</p>
          <p className={p}>It uses the <span className={span}>@media</span> rule to include a block of CSS properties only if a certain condition is true.</p>
          <h4 className={h4}>Example</h4>
          <p className={p}>If the browser window is 600px or smaller, the background color will be lightblue:</p>
          <img src={media} alt="" width={450} className={ul} />
          <h4 className={h4}>Add a Breakpoint</h4>
<p className={p}>Earlier in this tutorial we made a web page with rows and columns, and it was responsive, but it did not look good on a small screen.</p>
<p className={p}>Media queries can help with that. We can add a breakpoint where certain parts of the design will behave differently on each side of the breakpoint.</p>
<h4 className={h4}>Example</h4>
<p className={p}>When the screen (browser window) gets smaller than 768px, each column should have a width of 100%:</p>
<img src={med} alt="" width={650} className={ul} />

        </div>
    </div>
  )
}
