import React from "react"

import styles from "./mainpage-style.module.css"
import profileImg from "../../images/profile-image.jpg"
import linkedinImg from "../../images/linkedin-96.png"
import emailImg from "../../images/mail-96.png"

export function NavBar(){

    const handleClickLinkedin = () => {
        window.open('https://www.linkedin.com/in/sezer-demir-488908146/', '_blank');
    }

    const handleClickEmail = () => {
        let text = document.getElementById('emailText').innerHTML;
        try {
            navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return(
        <div className={styles["nav-container"]}>
            <div className={styles["profile-image"]}>
                <img src={profileImg} alt="profile image" />
            </div>
            <div className={styles["profile-info"]}>
                <div className={styles["name"]}>
                    SEZER DEMİR
                </div>
                <div className={styles["job"]}>
                    Full Stack Developer
                </div>
                <div id="emailText" className={styles["email"]}>
                    sezer_d@outlook.com
                </div>
                <div className={styles["profile-button-container"]}>
                    <div className={styles["profile-button-email"]}>
                        <input type="image" src={emailImg} onClick={handleClickEmail} title="copy email to clipboard" alt="email logo"/>
                    </div>
                    <div className={styles["profile-button-linkedin"]}>
                        <input type="image" src={linkedinImg} onClick={handleClickLinkedin} title="go to linkedin page" alt="linkedin logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}