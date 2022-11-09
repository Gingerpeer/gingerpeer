import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useState } from 'react'
import { Socials } from '../components/Socials'

const BlogsData = ({ userName } : { userName: string}) => {
  const { data: blogs, isLoading } = trpc.blog.getAll.useQuery()
  const [ showMore, setShowMore ] = useState({id: "", show: false})

  if(isLoading) return <div className='text-3xl md:text-6xl text-center'>Loading Blogs...</div>
  return(
    <div className="grid grid-cols-6">{
      blogs && blogs.length > 0 ? blogs?.map((blog, index)=>{
        const short = blog.body.slice(0,50) + "..."
        const full = blog.body
        return(
          <div key={index} className={showMore.id === blog.id ? "m-5 p-5 bg-slate-800 rounded max-w-fit col-span-6" : "m-5 p-5 bg-slate-800 rounded max-w-fit col-span-6" }>
            <h1 className='text-xl'>{blog.title}</h1>
            <p><em>{blog.date.toDateString()}</em></p>
            <p><em>By {blog.author}</em></p>
            {showMore.id === blog.id ? 
              <p className='mt-2'>{full} <br/><button className='bg-slate-500 p-1 rounded' onClick={()=>setShowMore({id: "", show: false})}>Hide</button></p> 
                : 
              <div>
                <p className='mt-2'>{short} <button className='bg-slate-500 p-1 rounded' onClick={()=>setShowMore({id: blog.id, show: true})}>Show More</button></p>
                <Comments />
              </div>}
          </div>
        )
      }):<p className='col-span-6 text-center mt-5 text-xl'>Blogs Coming Soon...</p>
    }</div>
  )
}
const BlogCreate = () => {
  const [ author,setAuthor ] = useState("")
  const [ title,setTitle ] = useState("")
  const [ body,setBody ] = useState("")
  const [ hide, setHide ] = useState(false)
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
    {!hide ? <form className='grid grid-cols-4' onSubmit={ async (event)=>{
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
      
    </form>:
    <span></span>
  }
  <button className='bg-slate-800 p-2 rounded col-span-4 md:col-start-2 md:col-end-3 mt-2 hover:animate-pulse' onClick={()=> hide ? setHide(false): setHide(true)} >{hide ? "Show Blog Create": "hide"}</button>
  </div>
  )
}



const AddComment = ({ userName } : { userName: string}) => {
  const { data: session, status } = useSession();
  const [ message, setMessage ] = useState("")

  const ctx = trpc.useContext()

  const postMessage = trpc.comment.postMessage.useMutation({
    onMutate: () => {
      ctx.comment.getAll.cancel()

      const optimisticUpdate = ctx.comment.getAll.getData()
      if(optimisticUpdate){
        ctx.comment.getAll.setData(optimisticUpdate)
      }
    },
    onSettled: () => {
      ctx.comment.invalidate()
    }
  })
  return(<div className="pt-6">
  <form
    className="flex gap-2"
    onSubmit={(event)=>{
      event.preventDefault();

      postMessage.mutate({
        name: userName as string,
        message,
      });
      
      setMessage("");
    }}
    >
      <input 
        type="text"
        value={message}
        placeholder="Your message..."
        maxLength={100}
        onChange={(event)=> setMessage(event.target.value)}
        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none"
        >
        Submit
      </button>
  </form>
</div>)
}
const Comments = () => {
  const { data: comments, isLoading } = trpc.comment.getAll.useQuery()
  
  if(isLoading) return <div>Fetching comments...</div>
  return(
    <div className="flex flex-col gap-4">
      {
        comments ? comments?.map((msg,index)=>{
          return (
            <div key={index}>
              <p>{msg.message}</p>
              <span>- {msg.name}</span>
            </div>
          )
        }):
        <p>No Comments have been made...</p>
      }
    </div>
  )
}

const Blog: NextPage = () => {
  const { data: session, status } = useSession();
  const [ disabledBtn, setDisabledBtn ] = useState(false)
  return (
    <>
      <Head>
        <title>Gingerpeer | Blog</title>
      </Head>
      <main className='text-center'>
        <p className="text-3xl md:text-6xl text-center">My Blog</p>
        {session && session.user?.name === "Gingerpeer" ? <BlogCreate /> : <span></span>}
        {!session ? <button className="mt-10 btn bg-slate-800 p-2 rounded-md" disabled={disabledBtn} onClick={async()=> {
          setDisabledBtn(true)
          await signIn("discord")
          setDisabledBtn(false)
          }}>
                Login with Discord to Comment
        </button>:<button className="mt-10 btn bg-slate-800 p-2 rounded-md" disabled={disabledBtn} onClick={async()=> {
          setDisabledBtn(true)
          await signOut()
          setDisabledBtn(false)
          }}>
                {session.user?.name} Logout
        </button>}
        {session ? <BlogsData userName={session.user?.name as string} /> : <span></span>}
        <p className='text-center mt-5 text-lg col-span-6'>Follow me on the Socials below</p>
        <Socials />
      </main>
    </>
  )
}

export default Blog
