import React from 'react'
import Side from '../EveryComponent/Side'

export default function Start() {
  return (
    <div className='flex text-[#fff] items-start '>
      <Side />

<div className="">
  
    <h1 className='text-[#FF009E] text-4xl font-bold p-4 '>What's needed?</h1>
  
  <div className="text-[21px] font-bold">
    <p className='p-4'>to start learning web , we will  be needing three things:</p>
    <h4 className='p-4'>Code editor:</h4>
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_720/https://ubuntu.com/wp-content/uploads/c9f4/visualstudio_code-card.png" className='w-[30vw] ml-96' alt="" />
    <p className='p-4 mt-11'>I would highly recommend <a className='text-[#3b3b9e] underline hover:text-[#181847]' download href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user">vscode</a> as your code editor</p>
  </div>
  <div className="text-[21px] font-bold mt-16">
    <h4 className='p-4'>Git Bash:</h4>
    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className='w-[15vw] ml-96' alt="" />
    <p className='p-4 mt-11'>This is gonna be needed later to push code to Github through   <a className='text-[#3b3b9e] underline hover:text-[#181847]' download href="https://github.com/git-for-windows/git/releases/download/v2.39.0.windows.1/Git-2.39.0-64-bit.exe">Git bash</a> terminal</p>
  </div>
  <div className="text-[21px] font-bold mt-16">
    <h4 className='p-4'>Nodejs:</h4>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" className='w-[30vw] ml-96' alt="" />
    <p className='p-4 mt-11'><a className='text-[#3b3b9e] underline hover:text-[#181847]' download href="https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi">Nodejs</a> is the only way to access npm , to start react application later in the course</p>
  </div>
</div>
    </div>
  )
}
