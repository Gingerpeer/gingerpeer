import React from 'react'
import Image from 'next/image'
import gitHub from '../../public/github.svg'
import twitter from '../../public/twitter.svg'
import linkedin from '../../public/linkedin.svg'

export const Socials = () => {

  return (
    <div className='p-3 text-center bg-slate-100 rounded mt-5'>
      <a className='hover:opacity-50 col-start-3 mr-5' href='https://github.com/gingerpeer' target="_blank" rel="noreferrer" >
        <Image width={64} height={64} src={gitHub} alt="github icon from https://freeicons.io/programming-language-logo/github-icon-33249" />
      </a>
      <a className='hover:opacity-50 mr-5' href='https://twitter.com/Gingerp8r' target="_blank" rel="noreferrer" >
        <Image width={64} height={64} src={twitter} alt="twitter icon from https://freeicons.io/social-media-7/twitter-icon-674" />
      </a>
      <a className='hover:opacity-50' href='https://www.linkedin.com/in/pierre-van-zyl-3a1413b8/' target="_blank" rel="noreferrer" >
        <Image width={64} height={64} src={linkedin} alt="Linkedin icon from https://freeicons.io/social-media-3/linkedin-icon-306" />
      </a>
    </div>
  )
}
