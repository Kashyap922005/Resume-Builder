import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/template2.module.scss";
import userDetails from "../../data/userDetails";
import {
  PhoneOutlined,
  MailOutlined,
  LinkOutlined,
  LinkedinFilled,
  GithubOutlined,
} from "@ant-design/icons";

const Template2 = () => {
  const {
    userName,
    professionalSummary,
    Skills,
    languages,
    certifications,
    experiences,
    educationDetails,
    research,
    accomplishments,
    projects,
  } = userDetails;

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.left}>
            <h1>
              {userDetails.firstName} {userDetails.middleName}{" "}
              {userDetails.lastName}
            </h1>
            <div className={styles.role}>Full-Stack Developer</div>

            <div className={styles.contact}>
              <div className={styles.row}>
                <span>
                  <MailOutlined />
                  <a href={`mailto:${userDetails.email}`}>
                    {userDetails.email}
                  </a>
                </span>
                <span>
                  <PhoneOutlined />
                  <a href={`tel:${userDetails.phone}`}>{userDetails.phone}</a>
                </span>
              </div>
              <div className={styles.row}>
                <span>
                  <LinkedinFilled /> Linkedin -
                  <a href="https://linkedin.com/in/yourusername">
                    {userDetails.linkedin}
                  </a>
                </span>
                <span>
                  <GithubOutlined /> Github -
                  <a href="https://github.com/yourusername">
                    {userDetails.github}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img
              width="30%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbg2ePJpMa7wnkVzOxEfOaqrPDpnvP5SRVzQ&s"
              alt="profile"
            />
          </div>
        </header>

        <section>
          <h2>Proffesional Summary</h2>
          <p>{userDetails.professionalSummary}</p>
        </section>

        <section>
          <h2>Education</h2>
          {educationDetails.map((edu, i) => (
            <div className={styles.entry} key={i}>
              <div className={styles.titleRow}>
                <div className={styles.title}>
                  <strong>{edu.type}</strong> — {edu.school}
                  {/*, {edu.department} */}
                </div>
                {edu.startDate && edu.endDate && (
                  <div className={styles.meta}>
                    {edu.startDate} – {edu.endDate}
                  </div>
                )}
              </div>

              {Array.isArray(edu.description) ? (
                <ul>
                  {edu.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{edu.description}</p>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          {experiences.map((job, i) => (
            <div className={styles.entry} key={i}>
              <div className={styles.titleRow}>
                <div className={styles.title}>
                  <strong>{job.company}</strong>, {job.role}
                  {job.location && ` — ${job.location}`}
                </div>
                <div className={styles.meta}>
                  {job.startDate} – {job.endDate}
                </div>
              </div>

              {Array.isArray(job.description) ? (
                <ul>
                  {job.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{job.description}</p>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2>Projects</h2>
          {projects.map((proj, i) => (
            <div className={styles.entry} key={i}>
              <div className={styles.titleRow}>
                <div className={styles.title}>{proj.project}</div>
                <div className={styles.meta}>
                  {proj.link ? <a href={proj.link}>{proj.link}</a> : proj.year}
                </div>
              </div>

              {Array.isArray(proj.description) ? (
                <ul>
                  {proj.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{proj.description}</p>
              )}
              <div className={styles.meta}>
                {proj.link && <a href={proj.link}>{proj.link}</a>}
                {proj.year && !proj.link && <span>{proj.year}</span>}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2>Certifications</h2>
          {certifications.map((cert, i) => (
            <div className={styles.entry} key={i}>
              <div className={styles.titleRow}>
                <div className={styles.title}>
                  {cert.title} — {cert.organization}
                </div>
                <div className={styles.meta}>
                  {cert.startDate} – {cert.endDate}
                </div>
              </div>

              {Array.isArray(cert.description) ? (
                <ul>
                  {cert.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{cert.description}</p>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2>Research</h2>
          {research.map((pub, i) => (
            <div className={styles.entry} key={i}>
              <div className={styles.titleRow}>
                <div className={styles.title}>{pub.title}</div>
                <div className={styles.meta}>
                  {pub.startDate} – {pub.endDate}
                </div>
              </div>
              <p>
                <strong>{pub.organization}</strong> — {pub.type}
              </p>

              <p>{pub.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Accomplishments</h2>
          {accomplishments.map((acc, i) => (
            <div className={styles.entry} key={i}>
              <div className={styles.titleRow}>
                <div className={styles.title}>
                  {acc.accomplishment} — {acc.company}
                </div>
                <div className={styles.meta}>
                  {acc.startDate} – {acc.endDate}
                </div>
              </div>

              {Array.isArray(acc.description) ? (
                <ul>
                  {acc.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{acc.description}</p>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <p>
            <strong>Technologies:</strong>{" "}
            {Array.isArray(Skills)
              ? Skills.join(", ")
              : typeof Skills === "string"
              ? Skills
              : ""}
          </p>
        </section>

        <section>
          <h2>Languages</h2>
          <p>
            {Array.isArray(languages)
              ? languages.join(", ")
              : typeof languages === "string"
              ? languages
              : ""}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Template2;
