import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardList from "../components/cardList"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Relative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen min-w-screen bg-background flex flex-col justify-center items-center p-2 ml-auto font-Tomorrow ">
        <CardList />
      </main>
    </div>
  )
}

export default Home
