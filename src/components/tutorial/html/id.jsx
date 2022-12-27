import React from 'react'
import { div , h1 , p , ul , li , h4} from '../../../data'
import Side from '../../EveryComponent/Side'
import coding from '../../../assets/style.png'
export default function Id() {
  return (
    <div className={div}>
        <Side />
        <div className="">
            <h1 className={h1}>HTML id  , class Attributes</h1>
            <h4 className={h4}>Using The id Attribute:</h4>
            <ul className={ul}>
              <li className={li}>The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.</li>
              <li className={li}>The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.</li>
              <li className={li}>The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.</li>
            </ul>
            <h4 className={h4}>Using The class Attribute:</h4>
          
            <ul className={ul}>
              <li className={li}>The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.</li>
              <li className={li}>To create a class; write a period (.) character, followed by a class name. Then, define the CSS properties within curly braces {}:</li>
              <li className={li}>Different HTML elements can point to the same class name.</li>
          <li className={li}>The HTML class attribute is used to specify a class for an HTML element.</li>
            </ul>
            <h4 className={h4}>Difference Between Class and ID</h4>
            <p className={p}>A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page example:</p>
   <img src={coding} alt="" width={750} className='p-7' />
        </div>
    </div>
  )
}
