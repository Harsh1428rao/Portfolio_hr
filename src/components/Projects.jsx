import React from "react";
import styles from "../styles/Projects.module.css";
import kisan from "../assets/Kisan.jpg"; // Replace with your project image
import weather from "../assets/image.png"; // Replace with your project image
import book from "../assets/book.jpg"; // Replace with your project image

const Projects = () => {
  const projects = [
    {
      title: "Kisaan Bazaar",
      description:
        "A platform for farmers and contractors to interact and engage in agricultural services and transactions.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: kisan,
      github: "https://github.com/Harsh1428rao/Kisan_Bazaar",
      live: "https://kisan-bazaar-nine.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A React-based application that provides real-time weather updates and a 5-day forecast using the OpenWeather API. It features a search bar for fetching weather data, a dark mode toggle, and a search history function for quick access to recent searches.",
      technologies: ["React", "OpenWeather API", "CSS", "JavaScript"],
      image: weather,
      github: "https://github.com/Harsh1428rao/Weather-App",
      live: "https://weather-app-rao.netlify.app/",
    },
    {
      title: "Online Bookstore",
      description:
        "An online store built with the MERN stack, allowing users to browse and purchase books online.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe API"],
      image: book,
      github: "https://github.com/Harsh1428rao/BookStore",
      live: "https://book-store-pied-alpha.vercel.app/",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    maxWidth: "600px", // Adjust the size
                    objectFit: "cover", // Ensure image covers area
                    borderRadius: "10px", // Optional: Add rounded corners
                  }}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
