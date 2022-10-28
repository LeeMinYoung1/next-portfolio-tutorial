import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/home/hero';
import Animation from '../'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>이민영 포트폴리오</title>
        <meta name="description" content="이민영 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero/>
                <Animation/>
            </div>
        </section>
    </Layout>
  )
}
