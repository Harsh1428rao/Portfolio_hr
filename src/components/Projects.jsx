import React from "react";
import styles from "../styles/Projects.module.css";
import webhook from "../assets/webhook.png"; // generated banner — see below
import crm from "../assets/crm.png"; // generated banner — see below
import domainToInbox from "../assets/domain-to-inbox.png"; // generated banner — see below

const Projects = () => {
  const projects = [
    {
      title: "Webhook Delivery System",
      description:
        "A reliable event-delivery service built in Go, handling retries with exponential backoff, HMAC-SHA256 signed payloads, and JWT-authenticated endpoints.",
      technologies: [
        "Go",
        "PostgreSQL",
        "Goroutines",
        "HMAC-SHA256",
        "JWT",
        "Docker",
        "GitHub Actions",
      ],
      image: webhook,
      github: "https://github.com/Harsh1428rao/webhookd", // TODO: confirm repo name/URL
      live: "", // TODO: add live/demo URL if you have one
    },
    {
      title: "CRM Platform",
      description:
        "A CRM tool for managing contacts, pipelines, and follow-ups.", // TODO: replace with your real description
      technologies: ["React", "Node.js", "MongoDB", "REST API"], // TODO: confirm actual stack
      image: crm,
      github: "https://github.com/Harsh1428rao/CRM", // TODO: confirm repo name/URL
      live: "", // TODO: add live/demo URL if you have one
    },
    {
      title: "Domain to Inbox",
      description:
        "An automated cold-outreach pipeline that finds and verifies domain-based email addresses and sends campaigns at scale.",
      technologies: ["Node.js", "Hunter.io", "Brevo", "Automation"],
      image: domainToInbox,
      github: "https://github.com/Harsh1428rao/domain-to-inbox",
      live: "", // TODO: add live/demo URL if you have one
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
                    height: "auto",
                    aspectRatio: "2.5 / 1", // matches the generated banner images — no cropping
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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
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
