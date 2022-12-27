import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import add from '../../../assets/add.png'
import S from '../../../assets/status.png'
import adding from '../../../assets/gitadd.png'
import addings from '../../../assets/gitadds.png'
export default function Staging() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>Git Staging</h1>
            <ul className={ul}>
                <li className={li}>One of the core functions of Git is the concepts of the Staging Environment, and the Commit.</li>
                <li className={li}>As you are working, you may be adding, editing and removing files. But whenever you hit a milestone or finish a part of the work, you should add the files to a Staging Environment.</li>
                <li className={li}>Staged files are files that are ready to be committed to the repository you are working on. You will learn more about commit shortly.</li>
            </ul>
            <p className={p}>For now, we are done working with index.html. So we can add it to the Staging Environment:</p>
            <img src={add} alt="" className={ul} />
<p className={p}>The file should be Staged. Let's check the status:</p>
<img src={S} alt="" className={ul} />
<h4 className={h4}>Git Add More than One File</h4>
<p className={p}>Using . or --all instead of individual filenames will stage all changes (new, modified, and deleted) files.</p>
<img src={addings} alt="" className={ul} width={370} />
<p className={p}>OR</p>
<img src={adding} alt="" className={ul} width={370} />
        </div>
    </div>
  )
}
