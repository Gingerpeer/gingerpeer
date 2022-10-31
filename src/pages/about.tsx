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
        <div className="md:flex lg:flex-row">
          <article className="mb-10  p-2 mr-1 lg:ml-20">
            <span className="md:flex lg:flex-row">
              <article className="md:basis-1/2">
                <h2 className='text-2xl mt-10 text-center'>Soft-Skills</h2>
                <ul className="mt-5 mb-7">
                  <li className='list-disc'>Confident working in corporate and business environments.</li>
                  <li className='list-disc'>Skilled in conducting meetings and communicating with clients.</li>
                  <li className='list-disc'>Well-versed and confident in communicating verbally or in writing in English and Afrikaans.</li>
                  <li className='list-disc'>I have a great passion for software development and creating well-thought-out UX and UI designs</li>
                  <li className='list-disc'>I am a self motivated individual that has practical experience working remotely and in person</li>
                  <li className='list-disc'>I have a very cheerful personality and love input from others making me a great team player</li>
                </ul>
                <h2 className='text-2xl mt-10 text-center'>Coding-Skills</h2>
                <ul className="mt-5 mb-7">
                  <li className='list-disc'>Confident working in both the Frontend & Backend due to my experience working with startups and the necessity for a Fullstack developer within such environments</li>
                  <li className='list-disc'>I am well versed in Frontend technologies including but not limited to HTML, CSS, Bootstrap, Tailwind, Scss, JavaScript, TypeScript, React, Vue, Next, Nuxt, Redux, React Query, tRCP, Prisma, Firebase & React Native</li>
                  <li className='list-disc'>I am also well versed in Backend technologies including but not limited to JavaScript, TypeScript, Python, Java, Node.js, Express, Django, Spring Boot, Laravel, PostgresSql, MongoDb</li>
                  <li className='list-disc'>I am well versed in the Unix Terminal, Git and Github for version control</li>
                  <li className='list-disc'>I am also comfortable with working with Apis specifically Google Api, Email.js and Creating Restful Apis of my own</li>
                </ul>
              </article>
            
              <span className="md:basis-1/2 mt-40  lg:mr-20 sm:ml-5">
                <Image 
                  className='rounded'
                  layout="responsive"
                  src={Profile}
                  alt="Gingerpeer Profile Picture"
                  width={150}
                  height={185}
                />
              </span>
            </span>
            <article>
              <h2 className='text-2xl mt-10 text-center'>Work Experience</h2>
              <p className="mt-7 mb-7">Zohe Enterprise, Polokwane, South-Africa — Practical Labour Relations and Human Resources Management Training and IT Technician for Zohe Enterprise January 2009 - January 2011 During my final year in school, I decided to start work while completing my schooling to get as much experience as possible in the “real” world.</p>
              <p className="mt-7 mb-7">Zohe Enterprise, Polokwane, South-Africa — Labour Relations Official with Amalgamated Employers Association January 2011 - February 2014 Whilst being the IT Technician for the above-mentioned company. I was given the opportunity to become an official with the Amalgamated Employers Association where my tasks included mediation, representation in arbitrations and consulting with a vast array of clients regarding industrial relations, a subset of Human Resources.</p>
              <p className="mt-7 mb-7">Zohe Enterprise, Polokwane, South Africa — Head of Creativity and Innovation for Zohe Enterprise March 2014- December 2018 My role as an official had me extremely busy yet I always used my creativity to find new and innovative ways to combine technology and creativity into my daily tasks. I brought forth an idea to move our company paperless and with the approval of the directors  I was given the position of Head of Creativity and Innovation alongside my duties as Labour Relations Official.</p>
              <p className="mt-7 mb-7">Self-Employed, Sedgefield, Western Cape, South Africa — Online Virtual Assistant and Software Engineering Training January  2019 - To March 2020 After many years in the corporate legal sector, I found myself yearning for more creativity and decided to at last pursue a career within my passions. After careful discussions with my superiors, I stepped down with the understanding that I will remain as a virtual assistant to assist in the transition without my expertise whilst I venture into my new pursuit of software engineering full-time.</p>
              <p className="mt-7 mb-7">Self-Employed, Sedgefield, Western Cape, South Africa — Software Engineer (REACT) Freelance April 2020- June 2021 I have been a freelance software engineer developing robust applications for multiple different clients using different languages and frameworks to get the job done. However, I have spent most of my time building React applications.</p>
              <p className="mt-7 mb-7">Avant Garde 2332 Contractor(Remote), Sedgefield, Western Cape, South Africa — Software Engineer (T3 Stack) Freelance July 2021 - To Date I have been a working at the startup Avant Garde 2332 up to date working mostly in React and the T3 stack using TypeScript, tRPC, PostgresSQL, TailwindCss and Prisma</p>
            </article>
          </article>
        </div>
      </div>
    </>
  )
}
export default About
