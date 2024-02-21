import user from '../utils/Profile'
import styles from './Profile.module.css'
function ProfileCard() {
  return (
    <div className={styles.main}>
         <img className={styles.image} src={user.image} alt="" />
         <div>
            <h2 className={styles.name}>{user.Name}</h2>
            <span className={styles.desc}>{user.Description}</span>
        </div>
    </div>
  )
}

export default ProfileCard