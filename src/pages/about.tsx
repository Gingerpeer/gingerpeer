import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Profile from '../../public/profilePic.jpg'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gingerpeer | About</title>
      </Head>
      <div>
        <h1>About</h1>
        <div className='image-wrapper'>
          <Image 
            layout="responsive"
            src={Profile}
            alt="Gingerpeer Profile Picture"
            width={150}
            height={185}
          />
        </div>
      </div>
    </>
  )
}
export default About
