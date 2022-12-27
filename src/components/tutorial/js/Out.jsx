import React from 'react'
import { div, h1, h4, li, p, ul } from '../../../data'
import Side from '../../EveryComponent/Side'
import script from '../../../assets/script.png'
import scripts from '../../../assets/scripts.png'
import scripting from '../../../assets/alerting.png'
import log from '../../../assets/log.png'
import print from '../../../assets/print.png'
export default function Out() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>JavaScript Output</h1>
            <h4 className={h4}>JavaScript Display Possibilities</h4>
            <p className={p}>JavaScript can "display" data in different ways:</p>
            <ul className={ul}>
                <li className={li}>Writing into an HTML element, using innerHTML.</li>
                <li className={li}>Writing into the HTML output using document.write().</li>
                <li className={li}>Writing into an alert box, using window.alert().</li>
                <li className={li}>Writing into the browser console, using console.log().</li>
            </ul>
            <h4 className={h4}>Using innerHTML</h4>
            <p className={p}>To access an HTML element, JavaScript can use the document.getElementById(id) method.</p>
            <p className={p}>The id attribute defines the HTML element. The innerHTML property defines the HTML content:</p>
            <img width={450} src={script} alt="" className={ul} />
            <h4 className={h4}>Using document.write()</h4>
            <p className={p}>For testing purposes, it is convenient to use document.write():</p>
            <img width={450} src={scripts} alt="" className={ul} />
            <h4 className={h4}>Using window.alert()</h4>
            <p className={p}>You can use an alert box to display data:</p>
            <img width={450} src={scripting} alt="" className={ul} />
            <h4 className={h4}>Using console.log()</h4>
            <p className={p}>For debugging purposes, you can call the console.log() method in the browser to display data.</p>
            <img width={450} src={log} alt="" className={ul} />
            <h4 className={h4}>JavaScript Print</h4>
            <p className={p}>JavaScript does not have any print object or print methods.</p>
            <p className={p}>You cannot access output devices from JavaScript.</p>
            <p className={p}>The only exception is that you can call the window.print() method in the browser to print the content of the current window.</p>
            <img width={450} src={print} alt="" className={ul} />
        </div>
    </div>
  )
}
