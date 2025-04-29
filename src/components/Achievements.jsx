import React from "react";
import styles from "../styles/Achievements.module.css";

const achievements = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved more than 110 questions in 43 days on LeetCode",
    year: "2024",
  },
  {
    title: "HackerRank Achievements",
    description:
      "3★ Silver in Java, Python, C++ | 4★ Silver in C | 1★ Bronze in Problem Solving and SQL",
    year: "2024",
  },
  {
    title: "One India Runner Up",
    description: "Won 1st runner-up prize in One India 2024",
    year: "2024",
  },
  
  {
    title: "TOP 5% Coder in Adobe GenSolve Hackathon",
    description:
      "Showcased problem-solving and leadership in Adobe GenSolve Hackathon GFG 2024.",
    year: "2024",
  },
  {
    title: "Smart India Hackathon – Group Leader",
    description:
      "Participated and contributed as group leader in SIH 2024 hosted at LPU.",
    year: "2024",
  },
  {
    title: "TCS CodeVita Season 11",
    description:
      "Secured Global Rank 2527 in CodeVita 2024, showcasing problem-solving excellence.",
    year: "2024",
  },
];

const Achievements = () => (
  <section id="achievements" className={styles.achievementsSection}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Achievements</h2>
      <div className={styles.achievementsGrid}>
        {achievements.map((ach, idx) => (
          <div key={idx} className={styles.achievementCard}>
            <div className={styles.achievementHeader}>
              <h3 className={styles.achievementTitle}>{ach.title}</h3>
              <span className={styles.year}>{ach.year}</span>
            </div>
            <p className={styles.achievementDescription}>{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
