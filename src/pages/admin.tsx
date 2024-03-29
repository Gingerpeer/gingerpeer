
import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useState} from 'react'
import DiscordImg from '../../public/discord.svg'
import Image from 'next/image';


const BlogCreate = () => {
  const [ author,setAuthor ] = useState("")
  const [ title,setTitle ] = useState("")
  const [ body,setBody ] = useState("")

  const ctx = trpc.useContext()
  
  const postMessage = trpc.blog.postMessage.useMutation({
    onMutate: ()=> {
      ctx.blog.getAll.cancel()

      const optimisticUpdate = ctx.blog.getAll.getData()
      if(optimisticUpdate){
        ctx.blog.getAll.setData(optimisticUpdate)
      }
    },
    onSettled: () => {
      ctx.blog.invalidate()
    }
  })
  return(
  <div>
    <h1 className='text-2xl'>Welcome Gingerpeer, you are authorized to create blog posts.</h1>
    <form className='grid grid-cols-4' onSubmit={ async (event)=>{
      event.preventDefault()
      await postMessage.mutate({
        author,
        title,
        body
      })
      setAuthor("")
      setTitle("")
      setBody("")
    }}>
      <input 
        className="p-2 rounded bg-slate-800 min-w-[50vw] col-span-4 md:col-start-2 md:col-end-3 mt-2"
        type="text"
        value={author}
        placeholder="Author Name..."
        onChange={(e)=> setAuthor(e.target.value)}
      />
      <input 
        className="p-2 rounded bg-slate-800 min-w-[50vw] col-span-4 md:col-start-2 md:col-end-3 mt-2"
        type="text"
        value={title}
        placeholder="Blog Title..."
        onChange={(e)=> setTitle(e.target.value)}
      />
      <textarea 
        className="p-2 rounded bg-slate-800 min-w-[50vw] col-span-4 md:col-start-2 md:col-end-3 mt-2"
        value={body}
        placeholder="Body of Blog..."
        onChange={(e)=> setBody(e.target.value)}
      />
      <button type='submit' className='bg-slate-800 p-2 rounded col-span-4 md:col-start-2 md:col-end-3 mt-2 hover:animate-pulse'>Submit</button>
      
    </form>
  </div>
  )
}

const Admin: NextPage = () => {
  const { data: session, status } = useSession()
  const [ disabledBtn, setDisabledBtn ] = useState(false)
  return (
    <>
    <Head>
        <title>Gingerpeer | Admin</title>
      </Head>
    <main className='text-center'>
      <h1 className='text-3xl md:text-6xl text-center text-purple-500'><em className='text-cyan-400'>&lt;</em> Admin <em className='text-cyan-400'>/&gt;</em></h1>
      {status === "loading" && <p className='text-xl'>Loading User...</p>}
    { session?.user?.name === "Gingerpeer" ? <BlogCreate />
    :
    <div>
      {session && session?.user?.name ? <h1 className='text-2xl'>Sorry, you are unfortunately not authorized to Access this page.</h1> : <span></span>} 
    </div>}
    {!session ? <div className='mt-5'>
          <p className='font-bold text-lg pb-2'>Login</p>
          <button className="hover:opacity-50" disabled={disabledBtn} onClick={async()=> {
            setDisabledBtn(true)
            await signIn("discord")
            setDisabledBtn(false)
            }}>
                <Image src={DiscordImg} width="64" height="64" alt="https://freeicons.io/super-tiny-icons/discord-icon-28476#" />
          </button>
      </div>:<button className="mt-5 btn bg-slate-800 p-2 rounded-md hover:bg-slate-500" disabled={disabledBtn} onClick={async()=> {
      setDisabledBtn(true)
      await signOut()
      setDisabledBtn(false)
      }}>
            {session.user?.name} Logout
    </button>}
    </main>
    </>
  )
}
export default Admin