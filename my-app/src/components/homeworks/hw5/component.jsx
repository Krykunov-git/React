import Logo from "../../homeworks/hw5/assets/logo.svg"
import styles from './component.module.css';

function Component(){

    return(
        <div className={styles.section}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
                <h1 className={styles.logo_title}>Spotify</h1>

            </div>
            
            <h1></h1>
        </div>
    )

}

export default Component