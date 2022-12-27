import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'

export default function In() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Git and GitHub Introduction</h1>
<p className={p}>Git is a popular version control system. It was created by Linus Torvalds in 2005, and has been maintained by Junio Hamano since then.</p>
<p className={p}>It is used for:</p>
<ul className={ul}>
<li className={li}>Tracking code changes</li>
<li className={li}>Tracking who made changes</li>
<li className={li}>Coding collaboration</li>
</ul>
<h4 className={h4}>What does Git do?</h4>
<ul className={ul}>
  <li className={li}>Manage projects with Repositories</li>
  <li className={li}>Clone a project to work on a local copy</li>
  <li className={li}>Control and track changes with Staging and Committing</li>
  <li className={li}>Branch and Merge to allow for work on different parts and versions of a project</li>
  <li className={li}>Pull the latest version of the project to a local copy</li>
  <li className={li}>Push local updates to the main project</li>
</ul>
<h4 className={h4}>Working with Git</h4>
<ul className={ul}>
  <li className={li}>Initialize Git on a folder, making it a Repository</li>
  <li className={li}>Git now creates a hidden folder to keep track of changes in that folder</li>
  <li className={li}>When a file is changed, added or deleted, it is considered modified</li>
  <li className={li}>You select the modified files you want to Stage</li>
  <li className={li}>The Staged files are Committed, which prompts Git to store a permanent snapshot of the files</li>
  <li className={li}>Git allows you to see the full history of every commit.</li>
  <li className={li}>You can revert back to any previous commit.</li>
  <li className={li}>Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit!</li>
</ul>
<h4 className={h4}>Why Git?</h4>
<ul className={ul}>
  <li className={li}>Over 70% of developers use Git!</li>
  <li className={li}>Developers can work together from anywhere in the world.</li>
  <li className={li}>Developers can see the full history of the project.</li>
  <li className={li}>Developers can revert to earlier versions of a project.</li>
</ul>
<h4 className={h4}>What is GitHub?</h4>
<ul className={ul}>
  <li className={li}>Git is not the same as GitHub.</li>
  <li className={li}>GitHub makes tools that use Git.</li>
  <li className={li}>GitHub is the largest host of source code in the world, and has been owned by Microsoft since 2018.</li>
  <li className={li}>In this tutorial, we will focus on using Git with GitHub.</li>
</ul>
  </div>
    </div>

  )
}
