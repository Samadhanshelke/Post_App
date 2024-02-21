import style from './PopularPost.module.css'
import posts from '../utils/PopularPost'
function PopularPost() {
  return (
    <div className={style.main}>
          <div className={style.heading}>
             <h3>Popular Posts</h3>
          </div>
          <div>
          {
            posts.length && posts.map((post)=>{
                return(
                 <div key={post.Id} className={style.post}>
                     <img className={style.image} src={post.image} alt="" />
                     <div>
                        <h5 className={style.title}>{post.Title}</h5>
                        <span className={style.desc}>{post.Description}</span>
                     </div>
                 </div>
                )
            })
          }

          </div>
    </div>
  )
}

export default PopularPost