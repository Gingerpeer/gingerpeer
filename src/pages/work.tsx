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
 const changeImage = async (IGName: string,IGNumber: number, Direction: string) => {
  if(IGName === "agNext"){
    if(Direction === "forward"){
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
    if(Direction === "back"){
      switch (IGNumber) {
        case 0:
          setAgNext(2)
          break;
        case 1:
          setAgNext(0)
          break;
        case 2:
          setAgNext(1)
          break;
        default:
          break;
      }
    }  
  }
  if(IGName === "shieldNext"){
    if(Direction === "forward"){
      switch (IGNumber) {
        case 0:
          setShieldNext(1)
          break;
        case 1:
          setShieldNext(0)
          break;
        default:
          break;
      }
    }
    if(Direction === "back"){
      switch (IGNumber) {
        case 0:
          setShieldNext(1)
          break;
        case 1:
          setShieldNext(0)
          break;
        default:
          break;
      }
    }
  }
  return 
 }

  return (
    <>
      <Head>
        <title>Gingerpeer | Portfolio</title>
      </Head>
      <div>
        <h1 className="text-3xl md:text-6xl text-center mb-5 text-purple-500"><em className='text-cyan-400'>&lt;</em> My Portfolio <em className='text-cyan-400'>/&gt;</em></h1>
        <div className="rounded p-5 md:grid md:grid-cols-2 mt-5 md:items-center">
          <div className="md:pr-5">
          <h2 className="text-2xl md:text-4xl text-center mb-5">Avantgarde 2332
          <p className="text-sm text-left mt-2 p-2 md:pl-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          </div>
          {agNext === 0 &&<div className="text-center">
            <div className="text-center">
            <p className="p-1">Dashboard Page</p>
              <Image 
              src={AGDashboard}
              width={640}
              height={390}
              alt="Avantgarde 2332 Dashboard Image"
              className="rounded"
               />
            </div>
            <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("agNext",agNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("agNext",agNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
          {agNext === 1 &&<div className="text-center">
            <div className="text-center">
            <p className="p-2">Avantgarde 2332 Auth Page</p>
                <Image 
                src={AGLogin}
                width={640}
                height={390}
                alt="Avantgarde 2332 Auth Image"
                className={"rounded"}
              />
          </div>
            
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("agNext",agNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("agNext",agNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
          {agNext === 2 &&<div className="text-center">
            <div className="text-center">
              <p className="text-center p-2">Avantgarde 2332 Google Drive Integration</p>
                  <Image 
                src={AGGoogle}
                width={640}
                height={390}
                alt="Avantgarde 2332 Google Drive Integration Image"
                className={"rounded"}
              />
          </div>
          
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("agNext",agNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("agNext",agNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
        </div>
        <div className="rounded p-5 md:grid md:grid-cols-2 mt-5 md:items-center">
          <div className="md:pr-5">
            <h2 className="text-2xl md:text-4xl text-center mb-5">Shield Life & South-African Army
            <p className="text-sm text-left mt-2 p-2 md:pl-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
          </h2>
          </div>
          {shieldNext === 0 &&<div className="text-center">
            <div className="text-center">
            <p className="p-2">Shield Life New Member for South-African Army</p>
            <Image 
            src={SANewMember}
            width={640}
            height={390}
            alt="Avantgarde 2332 Dashboard Image"
            className="rounded"
          />
          </div>
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("shieldNext",shieldNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("shieldNext",shieldNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
          {shieldNext === 1 &&<div className="">
            <div className="text-center">
              <p className="p-2">Shield Life Privacy Policy for South-African Army</p>
              <Image 
              src={ShieldPopia}
              width={640}
              height={390}
              alt="Avantgarde 2332 Auth Image"
              className="rounded"
            />
          </div>
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("shieldNext",shieldNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("shieldNext",shieldNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
        </div>
        <div className="rounded p-5 md:grid md:grid-cols-2 mt-5 md:items-center">
        <div className="">
            <h2 className="text-2xl md:text-4xl text-center mb-5">KJ to Calorie React Native App
            <p className="text-sm text-left mt-2 p-2 md:pl-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi earum eius eveniet natus, autem sit numquam impedit tempore consequuntur iusto, vitae beatae! Mollitia eum temporibus laborum et itaque iure.</p>
            </h2>
          </div>
          <div className="text-center">
          <p className="mb-2">React Native App</p>
            <Image 
              src={KJ}
              width={230}
              height={400}
              alt="Avantgarde 2332 Dashboard Image"
              className="rounded"
            />
          </div>
          
        </div>
      </div>
    </>
  )
}
export default Work
