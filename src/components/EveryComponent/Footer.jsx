import React from 'react'
import { FaDiscord  , FaInstagram  , FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-[#282A35]  text-white relative bottom-0'>
        <div className="text-white flex justify-between  h-24 max-w-[1240px] mx-auto px-4 items-center">
<h6 className='w-full text-3xl font-bold '>About</h6>
<div className="flex">
    <a href="https://discord.gg/6RpDwa4cP2"  rel="noreferrer" target='_blank'>
      <FaDiscord className='mr-[10px]' />
    </a>
    <a href="https://www.linkedin.com/in/adem-zrigui-2b6a65240/"  rel="noreferrer" target='_blank'>
      <FaLinkedin className='mr-[10px]' />
    </a>
    <a href="https://www.instagram.com/,h,hy,uiui,iu/"  rel="noreferrer" target='_blank'>
      <FaInstagram className='mr-[10px]' />
    </a>

</div>
        </div>
        <div className="">
          <p className='text-center  text-1xl text-[15px]'>LOFR was made  for these new developers who just  got introduced to the web development, we create and collect guides to make it easier beginner friendly learning  </p>
          <p className='text-center  text-1xl text-[15px]'>while you using this site ,you have agree to our <span className='decoration-solid' style={{
            "textDecoration": "underline"
          }}>
        terms of use   </span>
        </p>
          <p className='text-center  text-1xl text-[15px]'>Copyright © 2022 LOFR</p>
        </div>
    </div>
  )
}
