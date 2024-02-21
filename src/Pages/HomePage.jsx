import { useEffect, useState } from "react"
import Blogs from "../components/Blogs"
import posts from "../utils/Posts"
import style from './HomePage.module.css'
import Sidebar from "../components/Sidebar"
function HomePage({tag,setTag}) {
    const [data,setData]= useState("")

useEffect(()=>{
    const filteredPosts = posts.filter((post)=>{
        return post.Tag == tag
    })
    setData(filteredPosts)
   
},[tag])

  return (
    <div className={style.main}>
            <div className={style.posts}>
                
                {
                    data.length ? data?.map((item)=>{
                        return <Blogs key={item.Id} item={item}/>
                    }) :<h1 className={style.not_found}>Post Not Found</h1>
                }

            </div>

           <Sidebar tag={tag} setTag={setTag}/>

        
    </div>
  )
}

export default HomePage