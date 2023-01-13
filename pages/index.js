import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
      <style jsx>
      {
        `h1{
           font-size:60px
        }
        h2{
          font-size:38px;
          padding:10px 0;
        }
        h3{
          font-size:28px;
          padding:10px 0;
        }
        .blogs{
          margin-top:30px;
        }
        `
      }
      
    </style>
        <h1>Hunting Coder</h1>
        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/coder.avif" width={237} height={158} />
        </div>        
        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  )
}