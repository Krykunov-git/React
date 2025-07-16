import Logo from "../../homeworks/hw5/assets/logo.svg"
import styles from './component.module.css';
import { ReactComponent as AppleIcon } from './assets/apple.svg';
import { ReactComponent as GoogleIcon } from './assets/google.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter.svg';

function Component(){

    return(
        <div className={styles.section}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
                <h1 className={styles.logo_title}>Spotify</h1>
            </div>
            
            <div className={styles.main}>
           
                <h1  className={styles.main_title}>LIFE IS WASTED ON THE LIVING</h1>
                <p className={styles.main_paragraf}>Sign in</p>
                 <p className={styles.main_paragraf}>with</p>

                <div className={styles.main_box}>
                    
                 
                         <AppleIcon className={styles.main_icon} />
                    
                    
                    <GoogleIcon className={styles.main_icon} />
                    <TwitterIcon className={styles.main_icon} />
                </div>
            </div>
            
        
        </div>
    )

}

export default Component