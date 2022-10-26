import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


const NotFound: NextPage = () => {

  return (
    <>
      <Head>
        <title>Gingerpeer | Home</title>
      </Head>
      <div>
        <h1>Oops... This page cannot be found</h1>
        <h2>Redirecting to Homepage</h2>
        <Link href="/">Go Home...</Link>
      </div>
    </>
  )
}
export default NotFound
