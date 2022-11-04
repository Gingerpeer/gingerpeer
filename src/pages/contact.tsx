import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Contact: NextPage = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")

  return (
    <>
      <Head>
        <title>Gingerpeer | Contact</title>
      </Head>
      <div>
        <h1 className="text-3xl md:text-6xl text-center">Contact Me</h1>
        <form className="flex-row text-center p-5">
          <input 
            className="p-2 rounded bg-slate-800"
            type="text"
            name={name}
            placeholder="Name..."
            required
            onChange={(e)=> setName(e.target.value)}
          />
          <br/>
          <input 
            className="p-2 rounded mt-2 bg-slate-800"
            type="email"
            name={email}
            placeholder="Email Address..."
            required
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br/>
          <input 
            className="p-2 rounded mt-2 bg-slate-800"
            type="text"
            name={message}
            placeholder="Message..."
            required
            onChange={(e)=> setMessage(e.target.value)}
          />
          <br/>
          <button 
            type="submit"
            placeholder="Submit"
            className="bg-slate-500 p-2 font-extrabold rounded mt-2 h-11"
          >Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact
