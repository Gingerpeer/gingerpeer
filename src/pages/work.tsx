import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import AGDashboard from "../../public/AvantgardeDashboard.png"
import AGLogin from "../../public/AvantgardeLogin.png"
import AGGoogle from "../../public/GoogleFolderAvant.png"
import SANewMember from "../../public/SAArmyFoundationNewMember.png"
import ShieldPopia from "../../public/ShieldLifePopia.png"
import KJ from "../../public/KJCalCalc.jpg"
import { useState } from "react"

const Work: NextPage = () => {
  const [ agNext, setAgNext ] = useState(0)
  const [ shieldNext, setShieldNext ] = useState(0)
  // need to make the transition between images smoother
  setTimeout(()=>{
    if(agNext === 0){
      setAgNext(1)
    }
    if(agNext === 1){
      setAgNext(2)
    }
    if(agNext === 2){
      setAgNext(0)
    }
    if(shieldNext === 0){
      setShieldNext(1)
    }
    if(shieldNext === 1){
      setShieldNext(0)
    }
  },3000)
  return (
    <>
      <Head>
        <title>Gingerpeer | Portfolio</title>
      </Head>
      <div className="flex-row">
        <h1 className="text-3xl md:text-6xl text-center mb-5">My Portfolio</h1>
        <div className="card bg-slate-800 rounded p-5 md:flex sm:flex-row basis-1/2">
          <h2 className="text-2xl md:text-4xl text-center mb-5 md:mr-20 md:max-w-[25vw] md:ml-9 md:mt-14">Avantgarde 2332
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          {agNext === 0 &&<div>
            <Image 
            src={AGDashboard}
            width={640}
            height={390}
            alt="Avantgarde 2332 Dashboard Image"
            className="rounded"
          />
          <p className="text-center">Avantgarde 2332 Dashboard Page</p>
          </div>}
          {agNext === 1 &&<div>
            <Image 
            src={AGLogin}
            width={640}
            height={390}
            alt="Avantgarde 2332 Auth Image"
            className="rounded"
          />
            <p className="text-center">Avantgarde 2332 Auth Page</p>
          </div>}
          {agNext === 2 &&<div><Image 
            src={AGGoogle}
            width={640}
            height={390}
            alt="Avantgarde 2332 Google Drive Integration Image"
            className="rounded"
          />
          <p className="text-center">Avantgarde 2332 Google Drive Integration</p>
          </div>}
        </div>
        <div className="card bg-slate-800 rounded p-5 md:flex sm:flex-row basis-1/2 mt-5">
          <h2 className="text-2xl md:text-4xl text-center mb-5 md:mr-20 md:max-w-[25vw] md:ml-9 md:mt-11">Shield Life & South-African Army
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          {shieldNext === 0 &&<div>
            <Image 
            src={SANewMember}
            width={640}
            height={390}
            alt="Avantgarde 2332 Dashboard Image"
            className="rounded"
          />
          <p className="text-center">Shield Life New Member for South-African Army</p>
          </div>}
          {shieldNext === 1 &&<div>
            <Image 
            src={ShieldPopia}
            width={640}
            height={390}
            alt="Avantgarde 2332 Auth Image"
            className="rounded"
          />
          <p className="text-center">Shield Life Privacy Policy for South-African Army</p>
          </div>}
        </div>
        <div className="card bg-slate-800 rounded p-5 md:flex sm:flex-row basis-1/2 mt-5">
          <h2 className="text-2xl md:text-4xl text-center mb-5 md:mr-60 md:max-w-[25vw] md:ml-20 md:mt-14">KJ to Calorie React Native App
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          <div className="ml-11 md:ml-0">
            <Image 
              src={KJ}
              width={230}
              height={400}
              alt="Avantgarde 2332 Dashboard Image"
              className="rounded"
            />
            <p className="text-center">React Native App</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Work
