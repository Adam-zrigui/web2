import React from 'react'
import { div, h1, h4, li, Nli, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'

export default function I() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Sass Introduction</h1>
            <p className={p}>Sass is a CSS pre-processor.</p>
            <p className={p}>Sass reduces repetition of CSS and therefore saves time.</p>
            <h4 className={h4}>What You Should Already Know</h4>
            <p className={p}>Before you continue you should have a basic understanding of the following:</p>
            <ul className={ul}>
                <li className={Nli}>HTML</li>
                <li className={Nli}>CSS</li>
            </ul>
            <h4 className={h4}>What is Sass?</h4>
            <ul className={ul}>
                <li className={li}>Sass stands for Syntactically Awesome Stylesheet</li>
                <li className={li}>Sass is an extension to CSS</li>
                <li className={li}>Sass is a CSS pre-processor</li>
                <li className={li}>Sass is completely compatible with all versions of CSS</li>
                <li className={li}>Sass reduces repetition of CSS and therefore saves time</li>
                <li className={li}>Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006</li>
                <li className={li}>Sass is free to download and use</li>
            </ul>
            <h4 className={h4}>Why Use Sass?</h4>
            <p className={p}>Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.</p>
            <p className={p}>Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.</p>
            <h4 className={h4}>Sass File Type</h4>
            <p className={p}>Sass files has the ".scss" file extension.</p>
            <h4 className={h4}>Sass Comments</h4>
            <p className={p}>Sass supports standard CSS comments /* comment */, and in addition it supports inline comments // comment</p>
            <h4 className={h4}>Install Sass</h4>
            <p className={p}>There are several ways to install Sass in your system. There are many applications that will get you up and running with Sass in a few minutes for Mac, Windows, and Linux. Some of these are free, but some are paid apps.</p>
            <p className={p}>You can read more about them here: <a className='underline' href="https://sass-lang.com/install">https://sass-lang.com/install</a></p>
 
        </div>
    </div>
  )
}
