import React from "react";
import styles from "../styles/Qualifications.module.css";

const Qualifications = () => {
  const qualifications = [
    {
      title: "Education",
      items: [
        {
          institution: "Lovely Professional University",
          degree: "Bachelor of Technology - Computer Science and Engineering",
          year: "Since August 2022",
          details: "CGPA: 7.56",
        },
        {
          institution: "Bhavan’s KDKVM School",
          degree: "Intermediate",
          year: "April 2021 - March 2022",
          details: "Percentage: 91%",
        },
        {
          institution: "Bhavan’s KDKVM School",
          degree: "Matriculation",
          year: "April 2019 - March 2020",
          details: "Percentage: 92%",
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          name: "Cloud Computing",
          issuer: "IIT Kharagpur",
          year: "July 2024 - Oct 2024",
          details: "",
        },
        {
          name: "The Bits and Bytes of Computer Networking",
          issuer: "Coursera",
          year: "Oct 2023 - Feb 2024",
          details: "",
        },
        {
          name: "Introduction to Hardware and Operating Systems",
          issuer: "Coursera",
          year: "Sep 2023 - Feb 2024",
          details: "",
        },
        {
          name: "Full Stack Web Development Using MERN",
          issuer: "Cipher Schools",
          year: "May 2024 - Feb 2024",
          details: "",
        },
      ],
    },
  ];

  return (
    <section id="qualifications" className={styles.qualificationsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Qualifications</h2>
        <div className={styles.qualificationsContainer}>
          {qualifications.map((category, index) => (
            <div key={index} className={styles.qualificationCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.qualificationItems}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.qualificationItem}>
                    <div className={styles.qualificationHeader}>
                      <h4>{item.institution || item.name}</h4>
                      <span className={styles.year}>{item.year}</span>
                    </div>
                    <h5>{item.degree || item.issuer}</h5>
                    <p>{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
