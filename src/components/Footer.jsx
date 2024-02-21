import { HiChevronDoubleRight } from 'react-icons/hi'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.main}>
    <div>
         <div className={style.btns}>
            <button className={style.pre_btn}>Previous</button>
            <button className={style.next_btn}>Next<HiChevronDoubleRight/></button>
         </div>
         <span className={style.link}>Powered by   <a href=""> w3.css</a></span>
       

    </div>
    </div>
  )
}

export default Footer