import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left_side}>
        <div className={styles.navbar__link}>
          <Link href="#">About</Link>
        </div>
        <div className={styles.navbar__link}>
          <Link href="#">Contact</Link>
        </div>
      </div>
      <h2 className={styles.header}>Camping.</h2>
      <div className={styles.navbar__right_side}>
        <div className={styles.navbar__link}>
          <Link href="#">Sign-in</Link>
        </div>
        <div className={styles.navbar__link}>
          <Link href="#">Sign-up</Link>
        </div>
      </div>
    </nav>
  );
}
