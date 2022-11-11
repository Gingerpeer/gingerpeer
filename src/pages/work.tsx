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
 const changeImage = async (IGName: string,IGNumber: number) => {
  if(IGName === "agNext"){
    switch (IGNumber) {
      case 0:
        setAgNext(1)
        break;
      case 1:
        setAgNext(2)
        break;
      case 2:
        setAgNext(0)
        break;
      default:
        break;
    }
  }
  if(IGName === "shieldNext"){
    switch (IGNumber) {
      case 0:
        setShieldNext(1)
        break;
      case 1:
        setShieldNext(0)
      default:
        break;
    }
  }
  return 
 }

  return (
    <>
      <Head>
        <title>Gingerpeer | Portfolio</title>
      </Head>
      <div className="flex-row">
        <h1 className="text-3xl md:text-6xl text-center mb-5 text-purple-500"><em className='text-cyan-400'>&lt;</em> My Portfolio <em className='text-cyan-400'>/&gt;</em></h1>
        <div className="card bg-slate-800 rounded p-5 md:flex sm:flex-row basis-1/2">
          <h2 className="text-2xl md:text-4xl text-center mb-5 md:mr-20 md:max-w-[25vw] md:ml-9 md:mt-14">Avantgarde 2332
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          {agNext === 0 &&<div className="grid grid-cols-3">
            <div className="col-span-3">
              <Image 
              src={AGDashboard}
              width={640}
              height={390}
              alt="Avantgarde 2332 Dashboard Image"
              className="rounded"
               />
            </div>
          <p className="text-center col-span-2 p-2">Avantgarde 2332 Dashboard Page</p>
          <button className="col-start-3 max-w-fit pl-5 pr-5 md:ml-10 mt-2 bg-slate-500 hover:bg-slate-300 rounded" onClick={()=>changeImage("agNext",agNext)}>Next</button>
          </div>}
          {agNext === 1 &&<div className="grid grid-cols-3">
            <div className="col-span-3">
                <Image 
                src={AGLogin}
                width={640}
                height={390}
                alt="Avantgarde 2332 Auth Image"
                className={"rounded"}
              />
          </div>
            <p className="text-center col-span-2 p-2">Avantgarde 2332 Auth Page</p>
            <button className="col-start-3 max-w-fit pl-5 pr-5 md:ml-10 mt-2 bg-slate-500 hover:bg-slate-300 rounded" onClick={()=>changeImage("agNext",agNext)}>Next</button>
          </div>}
          {agNext === 2 &&<div className="grid grid-cols-3">
            <div className="col-span-3">
                  <Image 
                src={AGGoogle}
                width={640}
                height={390}
                alt="Avantgarde 2332 Google Drive Integration Image"
                className={"rounded"}
              />
          </div>
          <p className="text-center col-span-2 p-2">Avantgarde 2332 Google Drive Integration</p>
          <button className="col-start-3 max-w-fit pl-5 pr-5 md:ml-10 mt-2 bg-slate-500 hover:bg-slate-300 rounded" onClick={()=>changeImage("agNext",agNext)}>Next</button>
          </div>}
        </div>
        <div className="card bg-slate-800 rounded p-5 md:flex sm:flex-row basis-1/2 mt-5">
          <h2 className="text-2xl md:text-4xl text-center mb-5 md:mr-20 md:max-w-[25vw] md:ml-9 md:mt-11">Shield Life & South-African Army
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          {shieldNext === 0 &&<div className="grid grid-cols-3">
            <div className="col-span-3">
            <Image 
            src={SANewMember}
            width={640}
            height={390}
            alt="Avantgarde 2332 Dashboard Image"
            className="rounded"
          />
          </div>
          <p className="text-center col-span-2 p-2">Shield Life New Member for South-African Army</p>
          <button className="col-start-3 max-w-fit pl-5 pr-5 md:ml-10 mt-2 bg-slate-500 hover:bg-slate-300 rounded" onClick={()=>changeImage("shieldNext",shieldNext)}>Next</button>
          </div>}
          {shieldNext === 1 &&<div className="grid grid-cols-3">
            <div className="col-span-3">
            <Image 
            src={ShieldPopia}
            width={640}
            height={390}
            alt="Avantgarde 2332 Auth Image"
            className="rounded"
          />
          </div>
          <p className="text-center col-span-2 p-2">Shield Life Privacy Policy for South-African Army</p>
          <button className="col-start-3 max-w-fit pl-5 pr-5 md:ml-10 mt-2 bg-slate-500 hover:bg-slate-300 rounded" onClick={()=>changeImage("shieldNext",shieldNext)}>Next</button>
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
