/*import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import heroImage from "../../assets/hero/heroImage.png";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ada</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */
      /* <img
        src={heroImage.png}
        alt="Hero image of me"
        className={styles.heroImg}
      /> 
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};*/

import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,👋 I'm Shyamala</h1>
        <p className={styles.description}>
        "Passionate Front-End Developer | Expertise in HTML, CSS, JavaScript, React, and Full-Stack Development | B.Tech in CSE (2024)"
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* Using the imported static image */}
      <img
        src={heroImage} // Use the imported image directly
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* Optional blurs for design */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

