import { useState,useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
// import Profile from '../../public/profilePic.jpg'

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  // state
  // const [ show,setShow ] = useState("")
// console.log(window.innerWidth)

  return (
    <>
      <Head>
        <title>Gingerpeer | Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/G200.png" />
      </Head>
      <main className="p-10">
        <h1 className="text-3xl md:text-6xl text-center">Pierre Daniel van Zyl</h1>
        <br/>
        <h2 className="text-2xl text-center md:text-5xl">Next.js Developer</h2>
          <article className="lg:ml-40 lg:mr-40 lg:w-[40vw]">
            <p className="mt-7">Hi there.<br/> My name is Pierre van Zyl I am a software engineer specializing in the T3 stack. <br/>Ie. TypeScript, Next.js, tRCP, React Query, Tailwind.css & PostgreSql.</p>
            <p className="mt-7">My specialization in Next.js inevitably bring expertise in React.js which I use to build Mobile Apps with React Native.
            <br/>
            If you need a web application, e-commerce website or a landing page. I am here to build your specific product meeting your individual needs all whilst ensuring that you get a beautifully designed, fully functional and secure application.</p>
            <p className="mt-7">I would love to connect with you, and start the adventure of building your application.</p>
          </article>
        
        {/* <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}
        {/* <AuthShowcase /> */}
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
