import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import ht from '../../../assets/ht.png'
import commit from '../../../assets/com.png'
import push from '../../../assets/push.png'
export default function Push() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>Git Push to GitHub</h1>
    <h4 className={h4}>Push Changes to GitHub</h4>
    <p className={p}>Let's try making some changes to our local git and pushing them to GitHub.</p>
    <img src={ht} alt="" className={ul} width={750} />
    <p className={p}>Commit the changes:</p>
    <img src={commit} alt="" className={ul} />
    <p className={p}>Now push our changes to our remote origin:</p>
    <img src={push} alt="" className={ul} />
</div>
    </div>
  )
}
