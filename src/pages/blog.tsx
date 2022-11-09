import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useState } from 'react'
import { Socials } from '../components/Socials'

const BlogsData = () => {
  const { data: blogs, isLoading } = trpc.blog.getAll.useQuery()
  const [ showMore, setShowMore ] = useState({id: "", show: false})

  if(isLoading) return <div className='text-3xl md:text-6xl text-center'>Loading Blogs...</div>
  return(
    <div className="grid grid-cols-6">{
      blogs && blogs.length > 0 ? blogs?.map((blog, index)=>{
        const short = blog.body.slice(0,50) + "..."
        const full = blog.body
        return(
          <div key={index} className={showMore.id === blog.id ? "m-5 md:m-16 p-5 bg-slate-800 rounded max-w-fit col-span-6" : "m-5 md:m-16 p-5 bg-slate-800 rounded max-w-fit col-start-2 col-end-6" }>
            <h1 className='text-xl'>{blog.title}</h1>
            <p><em>{blog.date.toDateString()}</em></p>
            <p><em>By {blog.author}</em></p>
            {showMore.id === blog.id ? 
              <p className='mt-2'>{full} <br/><button className='bg-slate-500 p-1 rounded' onClick={()=>setShowMore({id: "", show: false})}>Hide</button></p> 
                : 
              <p className='mt-2'>{short} <button className='bg-slate-500 p-1 rounded' onClick={()=>setShowMore({id: blog.id, show: true})}>Show More</button></p>}
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
    <form className='grid grid-cols-4' onSubmit={(event)=>{
      event.preventDefault()

      postMessage.mutate({
        author,
        title,
        body
      })
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
  )
}
const Blog: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>Gingerpeer | Blog</title>
      </Head>
      <main>
        <p className="text-3xl md:text-6xl text-center">My Blog</p>
        <BlogCreate />
        <BlogsData />
        <p className='text-center mt-5 text-lg'>Follow me on the Socials below</p>
        <Socials />
      </main>
    </>
  )
}

export default Blog
