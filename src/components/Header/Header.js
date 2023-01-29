import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span>, what you're looking for,
        </p>
        <p className={styles.heading}>
          <span>Build your own</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src="./landing.png" alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
