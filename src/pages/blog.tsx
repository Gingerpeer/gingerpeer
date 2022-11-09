import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { trpc } from "../utils/trpc";
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

const Blog: NextPage = () => {

  return (
    <>
      <Head>
        <title>Gingerpeer | Blog</title>
      </Head>
      <main>
        <p className="text-3xl md:text-6xl text-center">My Blog</p>
        <BlogsData />
        <p className='text-center mt-5 text-lg'>Follow me on the Socials below</p>
        <Socials />
      </main>
    </>
  )
}

export default Blog
