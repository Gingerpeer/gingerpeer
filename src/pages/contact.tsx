import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
// import emailJs from "../JSON/emailJs.json"
import { Socials } from "../components/Socials";
import { env } from "../env/client.mjs";


const Contact: NextPage = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ completed, setCompleted ] = useState(false)
  const [ error, setError ] = useState(false)


  const sendMail = async (e:FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const templateParams = {
      from_name: name,
      to_name: "Gingerpeer",
      reply_to: email, 
      message: message
    } 
    const ejServiceId = await env.NEXT_PUBLIC_SERVICE_ID
    const ejTemplateId = await env.NEXT_PUBLIC_TEMPLATE_ID
    const ejPublicKey = await env.NEXT_PUBLIC_TEMPLATE_PUBLIC_KEY
      emailjs.send(ejServiceId,ejTemplateId,templateParams,ejPublicKey).then(res=>{
        console.log(console.log('SUCCESS!', res.status, res.text))
        setCompleted(true)
        setLoading(false)
        setError(false)
      }, error => {
          console.log("FAILED...", error)
          setError(true)
          setLoading(false)
          setCompleted(false)
      })
    return true
  }
  
  return (
    <>
      <Head>
        <title>Gingerpeer | Contact</title>
      </Head>
      <div>
        <h1 className="text-3xl md:text-6xl text-center text-purple-500"><em className='text-cyan-400'>&lt;</em> Contact Me <em className='text-cyan-400'>/&gt;</em></h1>
        {!completed ? <form 
          className="flex-row text-center p-5"
          onSubmit={(e)=>sendMail(e)}
        >
          <input 
            className="p-2 rounded bg-slate-800 min-w-[50vw]"
            type="text"
            name={name}
            placeholder="Name..."
            required
            onChange={(e)=> setName(e.target.value)}
          />
          <br/>
          <input 
            className="p-2 rounded mt-2 bg-slate-800 min-w-[50vw]"
            type="email"
            name={email}
            placeholder="Email Address..."
            required
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br/>
          <textarea 
            className="p-2 rounded mt-2 bg-slate-800 min-w-[50vw]"
            name={message}
            placeholder="Message..."
            required
            onChange={(e)=> setMessage(e.target.value)}
          />
          <br/>
          <div className="grid grid-cols-4 mt-2">
          {!loading ?<button 
            type="submit"
            placeholder="Submit"
            className="bg-slate-800 p-2 font-extrabold rounded mt-2 h-11 min-w-[15vw] col-start-2 col-end-3 hover:bg-slate-500"
          >Submit</button>
          :
          <p 
            placeholder="Submit"
            className="bg-slate-800 p-2 font-extrabold rounded mt-2 h-11 min-w-[15vw] col-start-2 col-end-3 animate-pulse"
          >Loading...</p>
          }
          </div>
        </form>
        :
        <div className="grid grid-cols-4">
          {error ? <span>
            <h4 className="text-center font-extrabold md:text-xl text-red-500">There seems to have been an error</h4>
            <p className="text-center">Please try again or alternatively contact me directly on the bellow socials</p>
            <Socials />
          </span>
          : 
          <div className="bg-slate-800 rounded p-5 mt-5 col-start-2 col-end-4">
            <h4 className="text-center font-extrabold md:text-xl text-cyan-300">Thank you for your communication!</h4>
            <p className="text-center">I will be getting back to your soon.</p>
          </div>}
        </div>  
      }
      </div>
    </>
  )
}

export default Contact
