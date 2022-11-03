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
      <div className='p-5'>
        <h1 className="text-3xl md:text-6xl text-center">About Me</h1>
        <div className="flex-row">
              <article className="">
                <h2 className='flex-none text-2xl mt-10 text-center'>Soft-Skills</h2>
                <ul className="lg:ml-40 lg:mr-40 ml-5 mr-5 mt-5 mb-7">
                  <li className='list-disc'>Confident working in corporate and business environments.</li>
                  <li className='list-disc'>Skilled in conducting meetings and communicating with clients.</li>
                  <li className='list-disc'>Well-versed and confident in communicating verbally or in writing in English and Afrikaans.</li>
                  <li className='list-disc'>I have a great passion for software development and creating well-thought-out UX and UI designs</li>
                  <li className='list-disc'>I am a self motivated individual that has practical experience working remotely and in person</li>
                  <li className='list-disc'>I have a very cheerful personality and love input from others making me a great team player</li>
                </ul>
                <h2 className='flex-none text-2xl mt-10 text-center'>Coding-Skills</h2>
                <ul className="lg:ml-40 lg:mr-40 ml-5 mr-5 mt-5 mb-7">
                  <li className='list-disc'>Confident working in both the Frontend & Backend due to my experience working with startups and the necessity for a Fullstack developer within such environments</li>
                  <li className='list-disc'>I am well versed in Frontend technologies including but not limited to HTML, CSS, Bootstrap, Tailwind, Scss, JavaScript, TypeScript, React, Vue, Next, Nuxt, Redux, React Query, tRCP, Prisma, Firebase & React Native</li>
                  <li className='list-disc'>I am also well versed in Backend technologies including but not limited to JavaScript, TypeScript, Python, Java, Node.js, Express, Django, Spring Boot, Laravel, PostgresSql, MongoDb</li>
                  <li className='list-disc'>I am well versed in the Unix Terminal, Git and Github for version control</li>
                  <li className='list-disc'>I am also comfortable with working with Apis specifically Google Api, Email.js and Creating Restful Apis of my own</li>
                </ul>
              </article>
              {/* <span className="md:basis-1/2 mt-40  lg:mr-20 sm:ml-5">
                <Image 
                  className='rounded'
                  layout="responsive"
                  src={Profile}
                  alt="Gingerpeer Profile Picture"
                  width={150}
                  height={185}
                />
              </span> */}            
              <h2 className='text-2xl mt-10 text-center'>Work Experience</h2>
              <article className='lg:flex lg:gap-7 md:flex-row'>
              <ul className="flex-auto lg:w-64 card bg-white text-black p-5 rounded mt-7 mb-7">
                <li><em className='font-bold'>Zohe Enterprise</em>, Polokwane, South-Africa</li>
                <li className='ml-2 list-disc'>Practical Labour Relations and Human Resources Management Training </li>
                <li className='ml-2 list-disc'>IT Technician for Zohe Enterprise</li>
                <li><em className='font-bold'>Date:</em> January 2009 - January 2011</li>
                <li><em className='font-bold'>Details:</em> During my final year in school, I decided to start work while completing my schooling to get as much experience as possible in the “real” world.</li>
              </ul>
              <ul className="flex-auto lg:w-64 card bg-white text-black p-5 rounded mt-7 mb-7">
                <li><em className='font-bold'>Zohe Enterprise</em>, Polokwane, South-Africa</li>
                <li className='ml-2 list-disc'>Labour Relations Official with Amalgamated Employers Association</li> 
                <li><em className='font-bold'>Date:</em> January 2011 - February 2014</li> 
                <li><em className='font-bold'>Details:</em> Whilst being the IT Technician for the above-mentioned company. I was given the opportunity to become an official with the Amalgamated Employers Association where my tasks included mediation, representation in arbitrations and consulting with a vast array of clients regarding industrial relations, a subset of Human Resources.</li>
              </ul>
              <ul className="flex-auto lg:w-64 card bg-white text-black p-5 rounded mt-7 mb-7">
                <li><em className='font-bold'>Zohe Enterprise</em>, Polokwane, South Africa</li>
                <li className='ml-2 list-disc'>Head of Creativity and Innovation for Zohe Enterprise</li> 
                <li><em className='font-bold'>Date:</em> March 2014- December 2018</li>
                <li><em className='font-bold'>Details:</em> My role as an official had me extremely busy yet I always used my creativity to find new and innovative ways to combine technology and creativity into my daily tasks. I brought forth an idea to move our company paperless and with the approval of the directors  I was given the position of Head of Creativity and Innovation alongside my duties as Labour Relations Official.</li>
              </ul>
              </article>
              <article className='lg:flex lg:gap-7 md:flex-row'>
              <ul className="flex-auto lg:w-64 card bg-white text-black p-5 rounded mt-7 mb-7">
                <li><em className='font-bold'>Self-Employed</em>, Sedgefield, Western Cape, South Africa</li> 
                <li className='ml-2 list-disc'>Online Virtual Assistant</li>
                <li><em className='font-bold'>Date:</em> January  2019 - To March 2020</li>
                <li><em className='font-bold'>Details:</em> After many years in the corporate legal sector, I found myself yearning for more creativity and decided to at last pursue a career within my passions. After careful discussions with my superiors, I stepped down with the understanding that I will remain as a virtual assistant to assist in the transition without my expertise whilst I venture into my new pursuit of software engineering full-time.</li>
              </ul>
              <ul className="flex-auto lg:w-64 card bg-white text-black p-5 rounded mt-7 mb-7">
                <li><em className='font-bold'>Self-Employed</em>, Sedgefield, Western Cape, South Africa</li>
                <li className='ml-2 list-disc'>Software Engineer (REACT) Freelance</li>
                <li><em className='font-bold'>Date:</em> April 2020- June 2021</li>
                <li><em className='font-bold'>Details:</em> I have been a freelance software engineer developing robust applications for multiple different clients using different languages and frameworks to get the job done. However, I have spent most of my time building React applications.
                </li>
              </ul>
              <ul className="flex-auto lg:w-64 card bg-white text-black p-5 rounded mt-7 mb-7">
                <li><em className='font-bold'>Avant Garde 2332</em> Contractor(Remote), Sedgefield, Western Cape, South Africa</li>
                <li className='ml-2 list-disc'>Software Engineer (T3 Stack) Contractor </li>
                <li><em className='font-bold'>Date:</em> July 2021 to Date </li>
                <li><em className='font-bold'>Details:</em> I have been a working at Avant Garde 2332 up to date working mostly in React and the T3 stack using TypeScript, tRPC, PostgresSQL, TailwindCss and Prisma</li>
              </ul>
            </article>
        </div>
      </div>
    </>
  )
}
export default About
