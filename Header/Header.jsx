import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import styles from "./Header.module.css";

import { loginUser } from "./login"; // Assuming loginUser is a function from login.js
import { signupUser } from "./signup"; // Assuming signupUser is a function from signup.js

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>Shtock</span>
        </Link>

        <div className={styles.userContainer}>
          <div className={styles.user}>J</div>
          <span>Jake</span>
        </div>

        <div className={styles.authButtons}>
          <Link to="/login" className={styles.authButton}>Login</Link>
          <Link to="/signup" className={styles.authButton}>Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
