import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Right from '../components/Right'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="ls max-h-screen overflow-hidden pb-96">
      <div className="ls mx-auto max-h-screen lg:max-w-6xl">
        <Head>
          <title>TWITTER CLONE | JAYZZZZ</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid grid-cols-9 justify-between">
          <Sidebar />
          <Feed />
          <Right />
        </main>
      </div>
    </div>
  )
}

export default Home
