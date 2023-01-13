import React, { use, useEffect, useState } from 'react'
import Styles from '../styles/Blog.module.css'
import Link from 'next/link'

const  Blog = () => {
    const [blogs, setblog] = useState([])
    useEffect(()=>{
        console.log("useeffect is running");
        fetch('http://localhost:3000/api/blogs').then((a)=>{
            return a.json();
        })
        .then((parsed)=>{
            // console.log(parsed)
            setblog(parsed)
        })
    },[])
  return (
    <main className={Styles.main}>
    
    {blogs.map((item)=>{
      return (
    <div className={Styles.blogItemh3} key={item.slug}>
       <Link href={`/blogPost/${item.slug}`}>
         <h3>{item.title}</h3>
        </Link> 
      <p className={Styles.blogItemp}>{item.content.substr(0,200)}...</p>
    </div>

 )})}
    {/* <div className={Styles.blogItemh3}>
       <Link href="/blogPost/learn-javaScript"><a>
         <h3>How to learn JavaScript in 2022?</h3>
        </a> </Link> 
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
    <div className={Styles.blogItemh3}>
       <Link href="/blogPost/learn-javaScript"><a>
         <h3>How to learn JavaScript in 2022?</h3>
        </a> </Link> 
      <p>JavaScript is the language used to design logic for the web</p>
    </div> */}
  </main>
  )
}

export default  Blog
