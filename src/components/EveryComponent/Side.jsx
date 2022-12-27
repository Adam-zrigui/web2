import React from "react";

import { Link, useLocation } from "react-router-dom";



export default function Side() {
  const path = useLocation()

  return (
    <>
      <div className={`w-[15vw] ${path.pathname ===  "/starting" || "/tutorial/html/idss" || "/tutorial/git/intro" ? 'h-[235vh]': 'h-[130vh]' } ${path.pathname === "/tutorial/js/output" ||  '/tutorial/js/dataTypes' ? "h-[360vh]" : "h-[130vh]"} overflow-y-scroll`}>
        <ul className="flex flex-col justify-center text-center">
          <li className="text-[#FF009E] m-7">
            
              <Link to='/starting'>Getting started</Link>
        </li>
          <li className="m-7 text-[#FF009E]">
            <details>
              <summary>HTML</summary>
              <ol>
                <Link to='/tutorial/html/intro'>
                  <li className="py-4">html introduction</li>
                </Link>
                <Link to='/tutorial/html/basic'>
                  <li className="py-4">html basics</li>
                </Link>
        <Link to='/tutorial/html/elements'>
          
          <li className="py-4">html elements</li>
        </Link>
                <Link to='/tutorial/html/attributes'>
                  <li className="py-4">html attributes</li>
                </Link>
                <Link to='/tutorial/html/heading'>
                  <li className="py-4">html headings</li>
                </Link>
                <Link to='/tutorial/html/inline'>
                  <li className="py-4">html style</li>
                </Link>
                <Link to='/tutorial/html/images'>
                  <li className="py-4">html images</li>
                </Link>
                <Link to='/tutorial/html/css'>
                  <li className="py-4">html css</li>
                </Link>
                <Link to='/tutorial/html/idss'>
                  <li className="py-4">html class & id </li>
                </Link>
            
              </ol>
            </details>
          </li>
          <li className="m-7 text-[#FF009E]">
            <details>
              <summary>CSS</summary>
              <ol>
            <Link to='/tutorial/css/intro'> <li className="py-4">css introduction</li></Link>   
                <Link to='/tutorial/css/color'><li className="py-4">css colors</li></Link>
                <Link to='/tutorial/css/w'><li className="py-4">css width/height</li></Link>
                <Link to='/tutorial/css/bor'><li className="py-4">css borders</li></Link>
                <Link to='/tutorial/css/m'><li className="py-4">css margin</li></Link>
                <Link to='/tutorial/css/p'><li className="py-4">css padding</li></Link>
                <Link to='/tutorial/css/box'><li className="py-4">css box </li></Link>
                <Link to='/tutorial/css/media'><li className="py-4">css media </li></Link>
              </ol>
            </details>
          </li>
          <li className="m-7 text-[#FF009E]">
            <details>
              <summary>Git , Github</summary>
              <ol>
                <Link to='/tutorial/git/intro'>
                  <li className="py-4">Git introduction</li>
                </Link>
                <Link to='/tutorial/git/started'>
                  <li className="py-4">Git get started</li>
                </Link>
                <Link to='/tutorial/git/stage'>
                  <li className="py-4">Git staging</li>
                </Link>
                <Link to='/tutorial/git/commit'>
                  <li className="py-4">Git commit</li>
                </Link>
                <Link to='/tutorial/git/github'>
                  <li className="py-4">Github get Started</li>
                </Link>
                <Link to='/tutorial/git/push'>
                  <li className="py-4">Git push</li>
                </Link>
              </ol>
            </details>
          </li>
          <li className="m-7 text-[#FF009E]">
            <details>
              <summary>Javascript</summary>
              <ol>
                <Link to='/tutorial/js/intro'>
                  <li className="py-4">js introduction</li>
                </Link>
                <Link to='/tutorial/js/output'>
                  <li className="py-4">js output</li>
                </Link>
                <Link to='/tutorial/js/statements'>
                  <li className="py-4">js statements</li>
                </Link>
                <Link to='/tutorial/js/syntax'>
                  <li className="py-4">js syntax</li>
                </Link>
                <Link to='/tutorial/js/declare'>
                  <li className="py-4">js declare</li>
                </Link >
                <Link to='/tutorial/js/dataTypes'>
                  <li className="py-4">js data types</li>
                </Link>
                <Link to='/tutorial/js/operators'>
                  <li className="py-4">js operators</li>
                </Link>
                <Link to='/tutorial/js/function'>
                  <li className="py-4">js function</li>
                </Link>
                <Link to='/tutorial/js/array'>
                  <li className="py-4">js array</li>
                </Link>
                <Link to='/tutorial/js/if'>
                  <li className="py-4">js if/else</li>
                </Link>
                <Link to='/tutorial/js/for'>
                  <li className="py-4">js for loop</li>
                </Link>
                <Link to='/tutorial/js/while'>
                  <li className="py-4">js while loop</li>
                </Link>
                <Link to='/tutorial/js/methods'>
                  <li className="py-4">array methods</li>
                </Link>
        
              </ol>
            </details>
          </li>
          <li className="m-7 text-[#FF009E]">
            <details>
              <summary>SASS</summary>
              <ol>
            <Link to='/tutorial/sass/intro'> <li className="py-4">sass introduction</li></Link>   
                <Link to='/tutorial/sass/var'><li className="py-4">sass variables</li></Link>
                <Link to='/tutorial/sass/nest'><li className="py-4">sass nesting</li></Link>
                <Link to='/tutorial/sass/import'><li className="py-4">sass @import</li></Link>
                <Link to='/tutorial/sass/mixin'><li className="py-4">sass @mixin</li></Link>
                <Link to='/tutorial/sass/extend'><li className="py-4">sass @extend</li></Link>
              </ol>
            </details>
          </li>
          <li className="m-7 text-[#FF009E]">
            <details>
              <summary>React</summary>
              <ol>
            <Link to='/tutorial/react/intro'> <li className="py-4">react introduction</li></Link> 
            <Link to='/tutorial/react/render'><li className="py-4">react render</li></Link>
                <Link to='/tutorial/react/jsx'><li className="py-4">react jsx</li></Link>
                <Link to='/tutorial/react/components'><li className="py-4">react components</li></Link>
                <Link to='/tutorial/react/props'><li className="py-4">react props</li></Link>
                <Link to='/tutorial/react/conditions'><li className="py-4">react conditions</li></Link>
                <Link to='/tutorial/react/hooks'><li className="py-4">react hooks</li></Link>
                <Link to='/tutorial/react/route'><li className="py-4">react routes</li></Link>
                <Link to='/tutorial/react/css'><li className="py-4">react css</li></Link>
              </ol>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}