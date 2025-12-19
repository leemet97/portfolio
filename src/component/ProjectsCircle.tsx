"use client";
import React from "react";

import styles from "./ProjectsCircle.module.css";

const projects = [
  { title: "Today’s Mood", link: "https://todays-mood-z6kp.vercel.app", className: "c1" ,external:true,},
  { title: "VYOR", link: "https://vyor.vercel.app", className: "c2" ,external:true,},
  { title: "방명록", link: "https://guestbook.vercel.app", className: "c3" ,external:true,},
  { title: "쇼핑몰", link: "https://shop.vercel.app", className: "c4" ,external:true,},
   { title: "CLONE", link: "https://clone.vercel.app", className: "c5" ,external:true,},
  { title: "GAME", link: "https://game.vercel.app", className: "c6" ,external:true,},
];

const ProjectCircles = () => {
  

  return (
    <section className={styles.wrapper}>
      <video className={styles.bgVideo} autoPlay loop muted playsInline>
        <source src="/videos/circle.mp4" type="video/mp4" />
      </video>
      <div className={styles.centerCircle}>
        <h2>Projects</h2>
        <p></p>
      </div>

      {projects.map((item) => (
        <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.smallCircle} ${styles[item.className]}`}
          >
            {item.title}
          </a>
        ))}</section>
  );
};

export default ProjectCircles;
