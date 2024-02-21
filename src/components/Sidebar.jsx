import PopularPost from "./PopularPost"
import ProfileCard from "./ProfileCard"
import style from './Sidebar.module.css'
import Tags from "./Tags"
function Sidebar({tag,setTag}) {
  return (
    <div className={style.main}>
        <ProfileCard/>
        <PopularPost/>
        <Tags tag={tag} setTag={setTag}/>
    </div>
  )
}

export default Sidebar