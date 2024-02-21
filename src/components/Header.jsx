
import style from './Header.module.css'
function Header() {
  return (
    <div className={style.main}>
         <div>
         <h1 className={style.heading}>MY BLOG</h1>
         <h4 className={style.subheading}>Welcome to the blog of <span>unknown</span></h4>

         </div>
    </div>
  )
}

export default Header