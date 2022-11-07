import type { NextPage } from 'next'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import {Socials} from '../components/Socials'
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


  if (isLoading) return <p className="text-3xl md:text-6xl text-center">Loading...</p>
  if (!data) return (<div>
    <p className="text-3xl md:text-6xl text-center">My Blog</p>
    <Socials />
    </div>)

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
        <div></div>
        }
      </main>
    </>
  )
}

export default Blog
