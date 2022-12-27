import React from 'react'
import { div, h1, h4, note, p, span, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import carf from '../../../assets/carf.png'
import camp from '../../../assets/comp.png'
import iN from '../../../assets/comps.png'
export default function Comp() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>React Components</h1>
            <p className={p}>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
            <p className={p}>Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
        <h4 className={h4}>Create Your First Component</h4>
        <p className={p}>When creating a React component, the component's name MUST start with an upper case letter.</p>
       <h4 className={h4}>Function Component</h4>
       <p className={p}>A Function component also returns HTML, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.</p>
      <p className={p}>Create a Function component called Car</p>
      <img src={carf} className={ul} alt="" />
      <h4 className={h4}>Rendering a Component</h4>
      <p className={p}>Now your React application has a component called Car, which returns an &lt;<span className={span}>h2</span>&gt; element.</p>
      <p className={p}>To use this component in your application, use similar syntax as normal HTML: &lt;<span className={span}>Car</span> /&gt;</p>
  <img src={camp} alt="" className={ul} />
        <h4 className={h4}>Components in Components</h4>
        <p className={p}>We can refer to components inside other components:</p>
        <img src={iN} className={ul} alt="" />
        <h4 className={h4}>Components in Files</h4>
        <p className={p}>React is all about re-using code, and it is recommended to split your components into separate files.</p>
        <p className={p}>To do that, create a new file with a .js or .jsx file extension and put the code inside it:</p>
        <p className={note}>Note: that the filename must start with an uppercase character.</p>
        </div>
    </div>
  )
}
