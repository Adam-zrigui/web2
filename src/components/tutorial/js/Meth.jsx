import React from 'react'
import { div, h1, h4, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import pop from '../../../assets/pop.png'
import push from '../../../assets/pushjs.png'
import shift from '../../../assets/shift.png'
import unshift from '../../../assets/unshift.png'
export default function Meth() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>Array methods</h1>
<h4 className={h4}>Popping and Pushing</h4>
<p className={p}>When you work with arrays, it is easy to remove elements and add new elements.</p>
<p className={p}>This is what popping and pushing is:</p>
<p className={p}>Popping items out of an array, or pushing items into an array.</p>
<h4 className={h4}>JavaScript Array pop()</h4>
<p className={p}>The pop() method removes the last element from an array:</p>
<img src={pop} alt="" className={ul} />
<p className={p}>The pop() method returns the value that was "popped out"</p>
<h4 className={h4}>JavaScript Array push()</h4>
<p className={p}>The push() method adds a new element to an array (at the end):</p>
<img src={push} alt="" className={ul} />
<p className={p}>The push() method returns the new array length</p>
<h4 className={h4}>Shifting Elements</h4>
<p className={p}>The shift() method removes the first array element and "shifts" all other elements to a lower index.</p>
<img src={shift} alt="" className={ul} />
<p className={p}>The shift() method returns the value that was "shifted out"</p>
<p className={p}>The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:</p>
<img src={unshift} alt="" className={ul} />
<p className={p}>The unshift() method returns the new array length</p>

</div>
    </div>
  )
}
