import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Styles from '../../styles/BlogPost.module.css'

const Slug = () => {
    const router = useRouter()
    const [blog, setblog] = useState()

    useEffect(()=>{
        if(!router.isReady)return;
        const { slug } = router.query
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a)=>{
            return a.json();
        })
        .then((parsed)=>{
            // console.log(parsed)
            setblog(parsed)
        })

    },[router.isReady])
    

  return (
    <div className={Styles.container}>
        <div className={Styles.main}>
       <h1>{blog && blog.title}</h1>
       <hr/>
       <div>{blog && blog.content}</div>
       </div>
    </div>
  )
}

export default Slug
