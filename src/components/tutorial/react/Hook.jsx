import React from 'react'
import { div, h1, h4, li, note, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'

export default function Hook() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>React Hooks</h1>
            <p className={p}>Hooks were added to React in version 16.8.</p>
            <p className={p}>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
            <p className={note}>Note: Hooks will not work in React class components.</p>
<h4 className={h4}>What is a Hook?</h4>
<p className={p}>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
<h4 className={h4}>Hook Rules</h4>
<p className={p}>There are 3 rules for hooks:</p>
<ul className={ul}>
    <li className={li}>Hooks can only be called inside React function components.</li>
    <li className={li}>Hooks can only be called at the top level of a component.</li>
    <li className={li}>Hooks cannot be conditional</li>
</ul>
<h1 className={h1}>Hooks explained:</h1>
<h4 className={h4}>useState:</h4>
<p className={p}>Allows a functional component to have state. It returns an array with the current state value and a function to update it.</p>
<h4 className={h4}>useEffect:</h4>
<p className={p}>Runs a function after a component renders. It can be used for things like setting up subscriptions or making an HTTP request.</p>
<h4 className={h4}>useContext:</h4>
<p className={p}>Allows a functional component to consume a context value. It returns the current context value.</p>
<h4 className={h4}>useReducer:</h4>
<p className={p}>Similar to useState, but for more complex state changes. It returns the current state value and a dispatch function to update it</p>
<h4 className={h4}>useCallback:</h4>
<p className={p}> Returns a memoized callback function. This can be useful for optimizing performance by avoiding unnecessary re-renders.</p>
<h4 className={h4}>useMemo:</h4>
<p className={p}> Returns a memoized value. This can be useful for optimizing performance by avoiding unnecessary calculations.</p>
<h4 className={h4}>useRef:</h4>
<p className={p}> Creates a mutable ref object. This can be useful for accessing DOM elements or for creating a side-effect that doesn't depend on the component's props or state.</p>
        </div>
    </div>
  )
}
