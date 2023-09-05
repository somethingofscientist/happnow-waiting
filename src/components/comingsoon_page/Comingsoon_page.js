import React, { useState, useEffect } from 'react'
import styles from './Comingsoon_page.module.css';
import logo from '../../assests/logo.png';
import phone1 from '../../image/image__1_-removebg-preview.png'
import phone3 from '../../image/image__2_-removebg-preview.png'
import phone2 from '../../image/phone.png'
// import 
import { BiLogoFacebook, BiLogoSnapchat } from 'react-icons/bi';
import { AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Comingsoon_page = () => {
    const [email, setEmail] = useState('');
    // const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // const calculateRemainingTime = () => {
    //     const currentDate = new Date();
    //     const targetDate = new Date('2023-09-01'); // September 18, 2023
    //     const timeDifference = targetDate - currentDate;

    //     if (timeDifference > 0) {
    //         const seconds = Math.floor((timeDifference / 1000) % 60);
    //         const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    //         const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    //         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    //         return {
    //             days: days,
    //             hours: hours,
    //             minutes: minutes,
    //             seconds: seconds
    //         };
    //     } else {
    //         return {
    //             days: 0,
    //             hours: 0,
    //             minutes: 0,
    //             seconds: 0
    //         };
    //     }
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const remainingTime = calculateRemainingTime();
    //         setRemainingTime(remainingTime);
    //     }, 1000); // Update every second

    //     return () => clearInterval(interval);
    // }, []);

    const [remainingDays, setRemainingDays] = useState(0);

    const calculateRemainingDays = () => {
        const currentDate = new Date();
        const targetDate = new Date('2023-09-18'); // September 18, 2023
        const timeDifference = targetDate - currentDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference >= 0 ? daysDifference : 0;
    };

    useEffect(() => {
        const days = calculateRemainingDays();
        setRemainingDays(days);
    }, []);
        
    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/notifications/getemail', {
                email,
            });

            if (response.status === 200) {
                toast.dismiss();
                toast.success("Thank You!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEmail("");
            } else {
                // alert('error happened')
                toast.dismiss();
                toast.error("Some Error Occured");
            }
        } catch (error) {
            toast.dismiss();
            toast.error("Error Occured...", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
            });
            console.log(error.message);
        }
    };

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.container}>
                    <div className={styles.left_container}>
                        <div className={styles.time}>
                            {/* 21 Days Left */}
                            {/* {remainingTime.days} days */}
                            {/* {remainingTime.hours} hours */}
                            {/* {remainingTime.minutes} minutes,  */}
                            {/* {remainingTime.seconds} seconds */}
                            {/* {remainingDays} {remainingDays === 1 ? 'Day' : 'Days'} Left */}
                            Watch this space for something awesome!
                        </div>
                        <div className={styles.text}>
                            Elevate your experience with our app. Know What, Where and When ... all the cool events & venues
                            Happening Now in the palm of your hands 🙌
                        </div>
                    </div>
                    <div className={styles.right_container}>
                        <img src={phone1} alt="rocket" />
                        <img src={phone2} alt="rocket" />
                        {/* <img src={phone3} alt="rocket" /> */}
                    </div>
                </div>

                <div className={styles.get_notified_box}>
                    <div className={styles.text2}>Yes! I want to be notified when you launch 🚀</div>
                    <div className={styles.email_box}>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div
                            className={styles.subscribe}
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footer_logo}>
                        <a href="https://www.facebook.com/HappNowApp?mibextid=LQQJ4d" target="_blank">
                            <span><BiLogoFacebook /></span>
                        </a>
                        <a href="" target="_blank">
                            <span><AiOutlineTwitter /></span>
                        </a>
                        <a href="" target="_blank">
                            <span><BiLogoSnapchat /></span>
                        </a>
                        <a href="https://www.instagram.com/happnowbali/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                            <span><AiFillInstagram /></span>
                        </a>
                        <a href="" target="_blank">
                            <span><AiFillLinkedin /></span>
                        </a>
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