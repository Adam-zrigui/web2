import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import commit from '../../../assets/commit.png'
import html from '../../../assets/change.png'
import  short  from '../../../assets/short.png'
export default function Commit() {
  return (
    <div className={div}>
      <Side />
      <div className="">
        <h1 className={h1}>Git Commit</h1>
      <p className={p}>Since we have finished our work, we are ready move from stage to commit for our repo.</p>
      <p className={p}>Adding commits keep track of our progress and changes as we work. Git considers each commit change point or "save point". It is a point in the project you can go back to if you find a bug.</p>
      <p className={p}>When we commit, we should always include a message.</p>
      <p className={p}>By adding clear messages to each commit, it is easy for yourself (and others) to see what has changed and when</p>
      <img src={commit} alt="" className={ul} />
      <p className={p}>The commit command performs a commit, and the -m "message" adds a message.</p>
      <p className={p}>The Staging Environment has been committed to our repo, with the message:
"First release of Hello World!"</p>
<h4 className={h4}>Git Commit without Stage</h4>
<p className={p}>It is possible to commit changes directly, skipping the staging environment. The -a option will automatically stage every changed, already tracked file.</p>
<p className={p}>Let's add a small update to index.html:</p>
<img src={html} alt="" width={550} className={ul} />
<p className={p}>And check the status of our repository. But this time, we will use the --short option to see the changes in a more compact way:</p>  
<img src={short} alt="" className={ul} />
      </div>
    </div>
  )
}
