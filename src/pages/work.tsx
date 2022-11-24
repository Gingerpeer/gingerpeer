import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import AGDashboard from "../../public/AvantgardeDashboard.png"
import AGLogin from "../../public/AvantgardeLogin.png"
import AGGoogle from "../../public/GoogleFolderAvant.png"
import SANewMember from "../../public/SAArmyFoundationNewMember.png"
import ShieldPopia from "../../public/ShieldLifePopia.png"
import Justine from "../../public/justine.png"
import FCHome from "../../public/fcHome.png"
import FCScan from "../../public/fcScan.png"
import FCScan2 from "../../public/fcScan2.png"
import KJ from "../../public/KJCalCalc.png"
import { useState } from "react"

const Work: NextPage = () => {
  const [ agNext, setAgNext ] = useState(0)
  const [ shieldNext, setShieldNext ] = useState(0)
  const [ fcNext, setFcNext ] = useState(0)

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
  if(IGName === "fcNext"){
    if(Direction === "forward"){
      switch (IGNumber) {
        case 0:
          setFcNext(1)
          break;
        case 1:
          setFcNext(2)
          break;
        case 2:
          setFcNext(0)
          break;
        default:
          break;
      }
    }
    if(Direction === "back"){
      switch (IGNumber) {
        case 0:
          setFcNext(2)
          break;
        case 1:
          setFcNext(0)
          break;
        case 2:
          setFcNext(1)
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
          <p className="text-sm text-left mt-2 p-1 md:pl-7">I am currently contracted in the upkeep and production of this project. It is a continuous evolving product which I have built from scratch for the above mentioned company, the needs of this company is very complex in nature resulting in the implementation of complex algorithms to compute the proper discipline for Human Resource Managers to use with employees under their care, as well as risk assessments for the POPIA act. The company also needs to save all documentation compiled for discipline, contractual agreements, Information Officer Registration and POPIA Risk Assessments on their personal google drive yet be visible for clients to have access through the App.</p>
          <p className="text-sm text-left md:pl-7">All documentation compiled through the algorithms has to be compiled in PDF documents, I have decided to use JsPDF for the compiling of PDFs.</p>
          <p className="text-sm text-left p-1 md:pl-7">I also implemented the signing of documentation to be done on the App using react-signature-pad-wrapper.</p>
          <p className="text-sm text-left p-1 md:pl-7">I built a backend API with Node.js, Express.js and Nodemon to handle all creation, viewing and downloading of documents with the Google Drive Api and mailing through emailJs. All communication to this Api is done through axios.</p>
          <p className="text-sm text-left p-1 md:pl-7">Authentication is done using Firebase and the App is also hosted on Firebase using some Firestore data for some user data.</p>
          <p className="text-sm text-left p-1 md:pl-7">Styling is done through the combination of Bootstrap and custom CSS.</p>
          <p className="text-sm text-left p-1 md:pl-7">The app live at <a className="text-cyan-400 hover:text-purple-500" href="https://avantgarde2332.com/" target="_blank" rel="noreferrer" >Avantgarde 2332</a></p>
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
            <p className="text-sm text-left mt-2 p-1 md:pl-7">I was contracted by Policy Portal to create these two Apps. The first App was to sign up new members and new members to accept Privacy Policies.</p>
            <p className="text-sm text-left p-1 md:pl-7">I also implemented the signing of documentation to be done on the App using react-signature-pad-wrapper.</p>
            <p className="text-sm text-left p-1 md:pl-7">All documentation compiled had to be compiled in PDF type documents, I decided to use JsPDF for the compiling of PDFs.</p>
            <p className="text-sm text-left p-1 md:pl-7">I implemented the ability to download the application forms as well as send all Application Forms through SOAP and XML data.</p>
            <p className="text-sm text-left p-1 md:pl-7">I have Netlify links for both apps at <a className="text-cyan-400 hover:text-purple-500" href="https://peaceful-bavarois-4cc72a.netlify.app/" target="_blank" rel="noreferrer" >New Member</a> and <a className="text-cyan-400 hover:text-purple-500" href="https://sad-elion-7a1e34.netlify.app/" target="_blank" rel="noreferrer" >Privacy Policy</a></p>
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
          <div className="md:pr-5">
            <h2 className="text-2xl md:text-4xl text-center mb-5">Justine Event Booking App (Nuxt)
            <p className="text-sm text-left mt-2 p-1 md:pl-7">I was contracted by Policy Portal to edit the original App as to make it possible for clients to select their calendar of choice and be immediately taken to the correct link as to add the event to their personal calendar.</p>
            <p className="text-sm text-left p-1 md:pl-7">I implemented Google Calendar, Outlook Calendar and Office 365 Calendar links to auto generate add to event links.</p>
            <p className="text-sm text-left p-1 md:pl-7">I further made it possible for clients to download a custom ics file for their personal events to be added if they do not have one of the above calendars.</p>
            <p className="text-sm text-left p-1 md:pl-7">I used sweet alerts for the options menus.</p>
            <p className="text-sm text-left p-1 md:pl-7">I have Netlify link for the app at <a className="text-cyan-400 hover:text-purple-500" href="https://gleaming-faun-d12349.netlify.app/?name=Justine&batchid=902&user=Pierre&type=register&sessionID=How%20to%20manage%20your%20time%20better%20ON%20%26OFFLINE&trainername=Etrecia&mobile=27609768929&accnum=1453702393&sessiondates=2022-10-12,13%3A00,15%3A00" target="_blank" rel="noreferrer" >Justine</a></p>
          </h2>
          </div>
          <div className="grid grid-cols-4 text-center">
            <div className="border border-white w-fit col-start-2 rounded col-span-2 lg:ml-[4vw]">
            <Image 
            src={Justine}
            width={230}
            height={380}
            alt="Avantgarde 2332 Dashboard Image"
            className="rounded"
          />
          </div>
          </div>
        </div>
        <div className="rounded p-5 md:grid md:grid-cols-2 mt-5 md:items-center">
          <div className="md:pr-5">
            <h2 className="text-2xl md:text-4xl text-center mb-5">First check
            <p className="text-sm text-left mt-2 p-1 md:pl-7">I was contracted by Policy Portal to make styling changes to the above mentioned app as well as implementation of a Cookies Sweet Alert and a license disk scanning app only visible to mobile users as to allow mobile users to scan their license disks as to read their vin numbers.</p>
            <p className="text-sm text-left p-1 md:pl-7">The App was previously built in Nuxt and Vue and I had to continue using that stack.</p>
            <p className="text-sm text-left p-1 md:pl-7">I implemented all data with a very satisfied customer.</p>
            <p className="text-sm text-left p-1 md:pl-7">The app can be found at <a className="text-cyan-400 hover:text-purple-500" href="https://www.firstcheck.co.za/" target="_blank" rel="noreferrer" >First Check</a></p>
          </h2>
          </div>
          {fcNext === 0 &&<div className="text-center">
            <div className="text-center">
            <p className="p-2">Home Page Styling and Sweet Alert</p>
            <Image 
            src={FCHome}
            width={640}
            height={390}
            alt="Avantgarde 2332 Dashboard Image"
            className="rounded"
          />
          </div>
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("fcNext",fcNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("fcNext",fcNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
          {fcNext === 1 &&<div className="">
            <div className="text-center">
              <p className="p-2">Scan Functionality 1/2</p>
              <Image 
              src={FCScan}
              width={230}
              height={400}
              alt="Avantgarde 2332 Auth Image"
              className="rounded"
            />
          </div>
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("fcNext",fcNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("fcNext",fcNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
          {fcNext === 2 &&<div className="">
            <div className="text-center">
              <p className="p-2">Scan Functionality 2/2</p>
              <Image 
              src={FCScan2}
              width={230}
              height={400}
              alt="Avantgarde 2332 Auth Image"
              className="rounded"
            />
          </div>
          <div className="col-span-6 grid grid-cols-6">
              <button className="min-w-[5vw] col-span-1 col-start-2 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("fcNext",fcNext,"back")}>&lt;</button>
              <button className="min-w-[5vw] col-span-1 col-end-6 pl-2 pr-2 p-1 mt-2 bg-purple-500 hover:bg-purple-300 rounded text-cyan-300" onClick={()=>changeImage("fcNext",fcNext,"forward")}>/ &gt;</button>
            </div>
          </div>}
        </div>
        <div className="rounded p-5 md:grid md:grid-cols-2 mt-5 md:items-center">
        <div className="">
            <h2 className="text-2xl md:text-4xl text-center mb-5">KJ to Calorie React Native App
            <p className="text-sm text-left mt-2 p-2 md:pl-11">I Created a simple React Native Application to convert Kilojoules into Calories as to assist myself in my own calorie counting as well as testing out the use case and implementation of React Native as a mobile development tool.</p>
            <p className="text-sm text-left p-1 md:pl-11">The app can be found at <a className="text-cyan-400 hover:text-purple-500" href="https://play.google.com/store/apps/details?id=com.gingerpeer.kjtocal" target="_blank" rel="noreferrer" >Kj to Calorie</a></p>
            </h2>
          </div>
          <div className="grid grid-cols-4 text-center">
          <div className="border border-white w-fit col-start-2 rounded col-span-2 lg:ml-[4vw]">
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
      </div>
    </>
  )
}
export default Work
