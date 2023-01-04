import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Bread } from 'src/components/BreadCrumb'
import { Content } from 'src/components/Content'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Python</title>
      </Head>
      
      <Header/>
      <Bread/>
      <Content>
        <h1>Python index</h1>
      </Content>
      <Footer/>
      
    </>
  )
}