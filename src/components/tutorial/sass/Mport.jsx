import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import Daimport from '../../../assets/scssimport.png'
import theimport from '../../../assets/scsstext.png'
import imp from '../../../assets/imp.png'
import impo from '../../../assets/impo.png'
export default function Mport() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Sass @import and Partials</h1>
            <p className={p}>Sass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files.</p>
            <p className={p}>You can create small files with CSS snippets to include in other Sass files. Examples of such files can be: reset file, variables, colors, fonts, font-sizes, etc. </p>
 <h4 className={h4}>Sass Importing Files</h4>
<p className={p}>Just like CSS, Sass also supports the @import directive.</p>
<p className={p}>The @import directive allows you to include the content of one file in another.</p>
<p className={p}>The CSS @import directive has a major drawback due to performance issues; it creates an extra HTTP request each time you call it.</p>
        <p className={p}>Sass Import Syntax:</p>
        <img src={Daimport} alt="" className={ul} width={250} />
<p className={p}>Let's look at an example: Let's assume we have a reset file called "reset.scss", that looks like this:</p>
        <p className={p}>Scss Syntax (reset.scss)</p>
        <img src={theimport} alt="" className={ul} width={250} />
        <p className={p}>and now we want to import the "reset.scss" file into another file called "standard.scss".</p>
        <p className={p}>Here is how we do it: It is normal to add the @import directive at the top of a file; this way its content will have a global scope:</p>
        <p className={p}>SCSS Syntax (standard.scss):</p>
        <img src={imp} alt="" className={ul} width={350} />
        <p className={p}>So, when the "standard.css" file is transpiled, the CSS will look like this:</p>
        <p className={p}>CSS output:</p>
        <img src={impo} alt="" className={ul} width={350}/>
        </div>
    </div>
  )
}
