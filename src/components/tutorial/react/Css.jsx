import React from 'react'
import { div, h1, h4, li, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import bod from '../../../assets/bod.png'
import imported from '../../../assets/imported.png'
import sass from '../../../assets/sass.png'
import css from '../../../assets/csss.png'
import csss from '../../../assets/cssss.png'
export default function Cs() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Styling React Using CSS/SASS</h1>
            <p className={p}>There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:</p>
            <ul className={ul}>
                <li className={li}>Inline styling</li>
                <li className={li}>CSS stylesheets</li>
                <li className={li}>CSS Modules</li>
            </ul>
            <p className={p}>in this tutorial , we're gonna be using css stylesheet.</p>
        <h4 className={h4}>CSS Stylesheet</h4>
        <p className={p}>You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.</p>
        <img width={400} src={bod} alt="" className={ul} />
        <p className={note}>Note: You can call the file whatever you like, just remember the correct file extension.</p>
        <p className={p}>Import the stylesheet in your application:</p>
        <img width={800} src={imported} alt="" className={ul} />
<h4 className={h4}>Can I use Sass?</h4>
<p className={p}>If you use the create-react-app in your project, you can easily install and use Sass in your React projects.</p>
        <img width={400} src={sass} alt="" className={ul} />
        <h4 className={h4}>Create a Sass file</h4>
        <p className={p}>Create a Sass file the same way as you create CSS files, but Sass files have the file extension .scss</p>
        <img width={400} src={css} alt="" className={ul} />
       <p className={p}>Import the Sass file the same way as you imported a CSS file:</p>
       <img width={800} src={csss} alt="" className={ul} />
        </div>
    </div>
  )
}
