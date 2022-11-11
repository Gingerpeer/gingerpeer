import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import { trpc } from "../utils/trpc";
import { useState } from 'react'

const BlogsData = () => {
  const { data: blogs, isLoading } = trpc.blog.getAll.useQuery()
  const [ showMore, setShowMore ] = useState({id: "", show: false})

  if(isLoading) return <div className='text-xl md:text-2xl text-center'>Loading Blogs...</div>
  return(
    <div className="grid grid-cols-6">{
      blogs && blogs.length > 0 ? blogs?.map((blog, index)=>{
        const short = blog.body.slice(0,50) + "..."
        const full = blog.body
        // alert(full)
        // console.log(full.toString())
        return(
          <div key={index} className={showMore.id === blog.id ? "m-5 p-5 bg-slate-800 rounded text-left col-span-6 max-w-fit" : "m-5 p-5 bg-slate-800 rounded col-span-6 md:col-start-2 md:col-end-6 md:col-span-4 text-left" }>
            <h1 className='text-xl md:ml-5'>{blog.title}</h1>
            <p className='md:ml-7'><em>Author: {blog.author}</em></p>
            <p className='md:ml-7'><em>Publish Date: {blog.date.toDateString()}</em></p>
            
            {showMore.id === blog.id ? 
              <div>
                <p className='mt-2 mb-2 whitespace-pre-wrap' >{full}</p> 
                {/* <Comments  />  */}
                {/* {userName !== "" ? <AddComment userName={userName} /> : <span></span>} */}
                <button className='bg-slate-500 p-1 rounded mt-5' onClick={()=>setShowMore({id: "", show: false})}>Hide</button>
              </div>
                : 
              <div>
                <p className='mt-2 md:ml-7'>{short} <button className='bg-slate-500 p-1 rounded' onClick={()=>setShowMore({id: blog.id, show: true})}>Show More</button></p>
              </div>}
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
      <main className='text-center'>
        <p className="text-3xl md:text-6xl text-center text-purple-500"><em className='text-cyan-400'>&lt;</em> My Blog <em className='text-cyan-400'>/&gt;</em></p>
        <BlogsData /> 
      </main>
    </>
  )
}

export default Blog
