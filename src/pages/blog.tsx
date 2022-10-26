import type { NextPage } from 'next'
import Head from 'next/head'
import { useState,useEffect } from 'react'

interface Blog{
  id: string
  author: string
  title: string
  body: string
  date: string
}

const Blog: NextPage = () => {
  const [data, setData] = useState<Blog[]>()
  const [isLoading, setLoading] = useState(false)

  const handleClick = async (id: string) =>{
    console.log(id)
  }


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>Blog</p>

  return (
    <>
      <Head>
        <title>Gingerpeer | Blog</title>
      </Head>
      <main>
        {data.length ? data.map(d=><div style={{
          padding: "1em"
        }} key={d.id} onClick={()=>handleClick(d.id)}>
          <h1>{d.title}</h1>
          <em>By {d.author}</em>
          <p>{d.body}</p>
          <em>Created on {d.date}</em>
        </div>
        ):
        <div>Blog</div>
        }
      </main>
    </>
  )
}

export default Blog
