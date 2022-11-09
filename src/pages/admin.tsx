
import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useState} from 'react'


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
      <h1 className='text-4xl mb-7'>Admin</h1>
      {status === "loading" && <p className='text-xl'>Loading User...</p>}
    { session?.user?.name === "Gingerpeer" ? <BlogCreate />
    :
    <div>
      {session && session?.user?.name ? <h1 className='text-2xl'>Sorry, you are unfortunately not authorized to Access this page.</h1> : <span></span>} 
    </div>}
    {!session ? <button className="mt-10 btn bg-slate-800 p-2 rounded-md" disabled={disabledBtn} onClick={async()=> {
      setDisabledBtn(true)
      await signIn("discord")
      setDisabledBtn(false)
      }}>
            Login with Discord
    </button>:<button className="mt-10 btn bg-slate-800 p-2 rounded-md" disabled={disabledBtn} onClick={async()=> {
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