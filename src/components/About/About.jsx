import React from "react";
import uiIcon from "../../assets/about/uiIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";


import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Introduction</h3>
              <hr />
              <p>
              "I'm a passionate Front-End Developer and tech enthusiast with a knack for turning creative ideas into responsive and intuitive applications."


              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Skills and Expertise</h3>
              <hr />
              <p>
              My expertise includes working with technologies like HTML, CSS, JavaScript, React, and Node.js, allowing me to create seamless and dynamic web experiences."
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={uiIcon} alt="uiIcon" />
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Education </h3>
              <hr />
              <p>M-Tech - pursuing</p>
              <p>B.Tech in CSE, 2024</p>
              <p>Diploma in CSE, 2021</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <hr />
              
                <p>Java Full Stack Developer Certificate from Excelr.</p>
                <p>Full-Stack Web Developer course Certificate From Udemy.</p>
                <p>Certificate of participation International Level Student Workshop-2k24 on Data science using Python.</p>
              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Career Goals</h3>
              <hr />
              <p>
              "My goal is to enhance my technical skills while contributing to innovative projects that make a difference in users' lives."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
