import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Java", level: 80 },
    { name: "C++", level: 90 },
    { name: "Backend Development", level: 80 },
    { name: "Problem Solving", level: 95 },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Hello! I'm a dedicated developer with hands-on experience in
              frontend, backend, and full-stack web development. I thrive on
              building scalable, efficient, and visually appealing web
              applications that solve real-world problems.
            </p>
            <p className={styles.description}>
              My passion for coding is driven by curiosity and a desire to
              continuously learn and innovate. I believe in writing clean,
              maintainable code and delivering seamless user experiences.
            </p>
          </div>
          <div className={styles.skills}>
            <h3 className={styles.skillsTitle}>Technical Skills</h3>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
