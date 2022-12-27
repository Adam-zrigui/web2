import React from 'react'
import { div, h1, h4, p, span, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import dom from '../../../assets/dom.png'
import om from '../../../assets/body.png'
import x from '../../../assets/header.png'
import y from '../../../assets/sandy.png'
export default function Render() {
  return (
    <div className={div}>
<Side />
<div className="">
    <h1 className={h1}>React Render HTML</h1>
    <p className={p}>React's goal is in many ways to render HTML in a web page.</p>
    <p className={p}>React renders HTML to the web page by using a function called ReactDOM.render().</p>
<h4 className={h4}>The Render Function</h4>
<p className={p}>The ReactDOM.render() function takes two arguments, HTML code and an HTML element.</p>
<p className={p}>The purpose of the function is to display the specified HTML code inside the specified HTML element.But render where?</p>
<p className={p}>There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.</p>
<p className={p}>You'll notice a single &lt;<span className={span}>div</span>&gt; in the body of this file. This is where our React application will be rendered.</p>

<p className={p}>Display a paragraph inside an element with the id of "root":</p>
<img src={dom} alt="" className={ul} />
<p className={p}>The result is displayed in the &lt;<span className={span}>div</span> id="root"&gt; element:</p>
<img src={om} alt="" className={ul} />
<h4 className={h4}>The Root Node</h4>
<p className={p}>The root node is the HTML element where you want to display the result.</p>
<p className={p}>It is like a container for content managed by React.</p>
<p className={p}>It does NOT have to be a &lt;<span className={span}>div</span>&gt;  element and it does NOT have to have the id='root':</p>
<p className={p}>The root node can be called whatever you like:</p>
<img src={x} alt="" className={ul} />
<p className={p}>Display the result in the &lt;<span className={span}>header</span> id="sandy"&gt; element:</p>
<img src={y} alt="" className={ul} />
</div>
    </div>
  )
}
