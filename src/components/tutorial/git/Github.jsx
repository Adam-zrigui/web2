import React from 'react'
import { div, h1, h4, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import remote from '../../../assets/remote.png'
import push from '../../../assets/pushing.png'
export default function Github() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>Git GitHub Getting Started</h1>
    <h4 className={h4}>GitHub Account</h4>
    <p className={p}>Go to GitHub and sign up for an account:</p>
    <p className={p}>i highly recommend you to start watching this video</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8JJ101D3knE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='ml-96' allowfullscreen></iframe>
<h4 className={h4}>Push Local Repository to GitHub</h4>
<p className={p}>Since we have already set up a local Git repo, we are going to push that to GitHub:</p>
<p className={p}>Copy the URL, or click the clipboard marked in the image above.</p>
<p className={p}>Now paste it the following command:</p>
<img src={remote} alt="" className={ul} />
<p className={p}>git remote add origin URL specifies that you are adding a remote repository, with the specified URL, as an origin to your local Git repo.</p>
<p className={p}>Now we are going to push our master branch to the origin url, and set it as the default remote branch:</p>
<img src={push} alt="" className={ul} width={750} />
<p className={` ${note} w-[30vw]`}>Note: Since this is the first time you are connecting to GitHub, you will get some kind of notification you to authenticate this connection.</p>
</div>
    </div>
  )
}
