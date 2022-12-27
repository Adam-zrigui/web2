import React from 'react'
import { div, h1, h4, p, span, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import gitting from '../../../assets/gits.png'
import init from '../../../assets/init.png'
let link = 'https://www.maketecheasier.com/assets/uploads/2021/07/git-config-list.png'
export default function Starting() {
  return (
    <div className={div}>
      <Side />
      <div className="">
        <h1 className={h1}>Git Getting Started</h1>
        <h4 className={h4}>Using Git with Command Line</h4>
        <p className={p}>To start using Git, we are first going to open up our Command shell.</p>
        <p className={p}>For Windows, you can use Git bash, which comes included in Git for Windows. For Mac and Linux you can use the built-in terminal.</p>
        <p className={p}>The first thing we need to do, is to check if Git is properly installed:</p>
<p className={p}>If Git is installed, it should show something like git version X.Y</p>
<h4 className={h4}>Configure Git</h4>
<p className={p}>Now let Git know who you are. This is important for version control systems, as each Git commit uses this information:</p>
<img src={link} alt="" className=" p-7" />
<p className={p}>Change the user name and e-mail address to your own. You will probably also want to use this when registering to GitHub later on.</p>
<h4 className={h4}>Creating Git Folder</h4>
<p className={p}>Now, let's create a new folder for our project:</p>
<img src={gitting} alt="" className={ul} />
<p className={p}><span className={span}>mkdir</span> makes a new directory.</p>
<p className={p}><span className={span}>cd </span>changes the current working directory.</p>
    <p className={p}>Now that we are in the correct directory. We can start by initializing Git!</p>
    <h4 className={h4}>Initialize Git</h4>
    <p className={p}>Once you have navigated to the correct folder, you can initialize Git on that folder:</p>
<img src={init} alt="" className={ul} />
<p className={p}>You just created your first Git Repository!</p>
      </div>
    </div>
  )
}
