import { ReactNode } from 'react'
import Empty from '@/layouts/Empty'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alcancia URL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-black">testss</div>
        <div><h1> JAJAJA</h1></div>
      </main>
    </>
  )
}

Home.layout = function layout(page: ReactNode) {
  return <Empty>{page}</Empty>
}