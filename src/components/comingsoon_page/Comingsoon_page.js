import React from 'react'
import styles from './Comingsoon_page.module.css';
import logo from '../../assests/logo.png';
import rocket from '../../assests/img2.png'
// import 
import { BiLogoFacebook, BiLogoSnapchat } from 'react-icons/bi';
import { AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Comingsoon_page = () => {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.container}>
                    <div className={styles.left_container}>
                        <div className={styles.time}>
                            21 Days Left
                        </div>
                        <div className={styles.text}>
                            A app that lets you know What, Where  and when ... all the cool events & venues Happening Now in the palm of your hands.
                        </div>
                    </div>
                    <div className={styles.right_container}>
                        <img src={rocket} alt="rocket" />
                    </div>
                </div>
                <div className={styles.get_notified_box}>
                    <div className={styles.text2}>Get notified when we launch</div>
                    <div className={styles.email_box}>
                        <input
                            type="email"
                            placeholder='Email'
                        />
                        <div className={styles.subscribe}>
                            subscribe
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footer_logo}>
                        <span><BiLogoFacebook /></span>
                        <span><AiOutlineTwitter /></span>
                        <span><BiLogoSnapchat /></span>
                        <span><AiFillInstagram /></span>
                        <span><AiFillLinkedin /></span>
                    </div>
                    <div className={styles.copyright_text}>
                        © Copyrights HappNow | All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comingsoon_page