"use client";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.item}>Home</Link>
      <Link href="/projects" className={styles.item}>Projects</Link>
      <Link href="/skills" className={styles.item}>Skills</Link>
      <Link href="/about" className={styles.item}>About ME</Link>
      <Link href="/contact" className={styles.item}>Contact</Link>
    </nav>
  );
};

export default Header;
