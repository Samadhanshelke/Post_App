import { useState } from 'react';
import style from './Blogs.module.css'
import { HiChevronDoubleRight } from "react-icons/hi";
function Blogs({item}) {
const [open,setOpen ] = useState(false)
const [count,setCount] = useState(2)

const [value,setValue] = useState("")
    const handleAddComment = ()=>{
        if(item.Title === 'BLOG ENTRY'){
            setOpen(true)
        }
    }

    const handleSubmit = ()=>{
         if(value == ""){
            return
         }
        setOpen(false)
        setCount(count + 1);
        setValue("")
    }
  return (
    <div className={style.main}>

       <img className={style.image} src={item.image} alt="" />
        <div>
            <h2 className={style.heading}>{item.Title}</h2>
            <h4 className={style.date}>Title description, <span>{item.Date}</span></h4>
            <span className={style.desc}>{item.Description}</span>
        </div>
            <div className={style.btns}>
                <button className={style["read-btn"]}>READ MORE<HiChevronDoubleRight/></button>
                {
                    open === true
                     ?  <div className={style.addComment}>
                         <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" />
                         <div>
                          <button onClick={()=>setOpen(false)}>Cancel</button>
                          <button onClick={handleSubmit}>Submit</button>
                         </div>
                       </div>
                     : <div onClick={handleAddComment} className={style.comment_btn}>
                         <span className={style.comment}>Comments</span>
                         <span className={style.value}>{item.Title === 'BLOG ENTRY' ? count : 0}</span>
                        </div>
                }
               
               
            </div>
    </div>
  )
}

export default Blogs