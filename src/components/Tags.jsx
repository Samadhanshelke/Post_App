import style from './Tags.module.css'
import AllTags from '../utils/Tags'
function Tags({tag,setTag}) {
    
  return (
    <div className={style.main}>
         <div className={style.heading}>
           <h3>Tags</h3>
         </div>
         <div className={style.tags}>
             {
                AllTags.map((tg,i)=>{
                    return(
                        <span className={style.tag} style={tag == tg ?{backgroundColor:"black",color:"white"} :{backgroundColor:"#f0f1f0"}} key={i} onClick={()=>setTag(tg)}>{tg}</span>
                    )
                })
             }
         </div>
    </div>
  )
}

export default Tags