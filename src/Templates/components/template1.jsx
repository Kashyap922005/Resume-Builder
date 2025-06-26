import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/template1.module.scss";
import userDetails from "../../data/userDetails";
import {
  PhoneOutlined,
  MailOutlined,
  LinkOutlined,
  LinkedinFilled,
  GithubOutlined,
} from "@ant-design/icons";

const Template1 = () => {
  const studentDetails = useSelector((state) => state);

  const basicDetails = studentDetails?.basicDetails?.basicDetails || {};
  const eduDetails = studentDetails?.eduDetails?.eduDetails || {};
  const expDetails = studentDetails?.expDetails?.expDetails || {};
  const proDetails = studentDetails?.proDetails?.proDetails || {};
  const certDetails = studentDetails?.certDetails?.certDetails || {};
  const resDetails = studentDetails?.resDetails?.resDetails || {};
  const accDetails = studentDetails?.accDetails?.accDetails || {};
  const skiDetails = studentDetails?.skiDetails?.skiDetails || {};
  const langDetails = studentDetails?.langDetails?.langDetails || {};

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

  const validExpDetails = expDetails.filter(
    (exp) =>
      exp.company?.trim() ||
      exp.role?.trim() ||
      exp.startDate?.trim() ||
      exp.endDate?.trim() ||
      exp.description?.trim()
  );

  const validLanguage = Array.isArray(langDetails)
    ? langDetails.filter((item) => item.language && item.language.trim() !== "")
    : [];

  const validSkills = Array.isArray(skiDetails)
    ? skiDetails.filter((item) => item.skill && item.skill.trim() !== "")
    : [];

  const validCertDetails = certDetails.filter(
    (cert) =>
      cert.organization?.trim() ||
      cert.title?.trim() ||
      cert.type?.trim() ||
      cert.startDate?.trim() ||
      cert.endDate?.trim() ||
      cert.description?.trim()
  );

  const validResDetails = resDetails.filter(
    (res) =>
      res.organization?.trim() ||
      res.title?.trim() ||
      res.type?.trim() ||
      res.startDate?.trim() ||
      res.endDate?.trim() ||
      res.description?.trim()
  );

  const validAccDetails = accDetails.filter(
    (acc) =>
      acc.company?.trim() ||
      acc.accomplishment?.trim() ||
      acc.startDate?.trim() ||
      acc.endDate?.trim() ||
      acc.description?.trim()
  );

  const validProDetails = proDetails.filter(
    (pro) =>
      pro.company?.trim() ||
      pro.project?.trim() ||
      pro.startDate?.trim() ||
      pro.endDate?.trim() ||
      pro.description?.trim()
  );

  const validEduDetails = eduDetails.filter(
    (edu) =>
      edu.type?.trim() ||
      edu.school?.trim() ||
      edu.stream?.trim() ||
      edu.startDate?.trim() ||
      edu.endDate?.trim() ||
      edu.grade?.trim() ||
      edu.description?.trim()
  );

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>
            {basicDetails?.firstName || userDetails.firstName} {basicDetails?.middleName || userDetails.middleName}{" "}
            {basicDetails?.lastName || userDetails.lastName}
          </h1>
          <div className={styles.contact}>
            <span>📍 {basicDetails?.location || userDetails.location}</span>

            <span>
              <MailOutlined />
              <a href="mailto:youremail@yourdomain.com">
                {basicDetails?.email || userDetails.email}
              </a>
            </span>
            <span>
              <PhoneOutlined />
              <a href="tel:+90-541-999-99-99">{basicDetails?.phone || userDetails.phone}</a>
            </span>

            <span>
              <LinkOutlined />
              <a href="https://yourwebsite.com">{basicDetails?.profile || userDetails.profile}</a>
            </span>
            <span>
              <LinkedinFilled /> Linkedin -
              <a href="https://linkedin.com/in/yourusername">
                {basicDetails?.linkedin || userDetails.linkedin}
              </a>
            </span>
            <span>
              <GithubOutlined /> Github -
              <a href="https://github.com/yourusername">
                {basicDetails?.github || userDetails.github}
              </a>
            </span>
          </div>
        </header>

        <section>
          <h2>Proffesional Summary</h2>
          <p>{basicDetails?.proffesionalSummary || userDetails.professionalSummary}</p>
        </section>

        {/* <section>
          <h2>Quick Guide</h2>
          <ul>
            <li>Each section title is arbitrary and each section contains a list of entries.</li>
            <li>There are 7 unique entry types: <em>BulletEntry</em>, <em>TextEntry</em>, <em>EducationEntry</em>, <em>ExperienceEntry</em>, <em>NormalEntry</em>, <em>PublicationEntry</em>, and <em>OneLineEntry</em>.</li>
            <li>Select a section title, pick an entry type, and start writing your section!</li>
            <li>
              <a href="https://docs.rendercv.com/user_guide/">Here</a>, you can find a comprehensive user guide for RenderCV.
            </li>
          </ul>
        </section>

        
        <section>
          <h2>Education</h2>
          <div className={styles.entry}>
            <div className={styles.title}><strong>BS</strong> — University of Pennsylvania, Computer Science</div>
            <div className={styles.meta}>Sept 2000 – May 2005</div>
            <ul>
              <li>GPA: 3.9/4.0 (<a href="https://example.com">a link to somewhere</a>)</li>
              <li><strong>Coursework:</strong> Computer Architecture, Comparison of Learning Algorithms, Computational Theory</li>
            </ul>
          </div>
        </section>

        
        <section>
          <h2>Experience</h2>

          <div className={styles.entry}>
            <div className={styles.title}><strong>Apple</strong>, Software Engineer — Cupertino, CA</div>
            <div className={styles.meta}>June 2005 – Aug 2007</div>
            <ul>
              <li>Reduced time to render user buddy lists by 75% by implementing a prediction algorithm</li>
              <li>Integrated iChat with Spotlight Search...</li>
              <li>Redesigned chat file format and implemented backward compatibility for search</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.title}><strong>Microsoft</strong>, Software Engineer Intern — Redmond, WA</div>
            <div className={styles.meta}>June 2003 – Aug 2003</div>
            <ul>
              <li>Designed a UI for the VS open file switcher (Ctrl-Tab) and extended it to tool windows</li>
              <li>Created a service to provide gradient across VS and add-ins</li>
              <li>Built an app to compute similarity from O(n²) to O(n log n)</li>
              <li>Created a test case generation tool from XML Schema</li>
              <li>Automated dataset extraction using SQL and Perl</li>
            </ul>
          </div>
        </section>

        
        <section>
          <h2>Publications</h2>
          <div className={styles.entry}>
            <div className={styles.title}>3D Finite Element Analysis of No-Insulation Coils</div>
            <p>Frodo Baggins, <strong><em>John Doe</em></strong>, Samwise Gamgee</p>
            <div className={styles.meta}>Jan 2004 — <a href="https://doi.org/10.1109/TASC.2023.3340648">10.1109/TASC.2023.3340648</a></div>
          </div>
        </section>

        
        <section>
          <h2>Projects</h2>

          <div className={styles.entry}>
            <div className={styles.title}>Multi-User Drawing Tool</div>
            <ul>
              <li>Developed an electronic classroom for synchronized drawing</li>
              <li>Tools Used: C++, MFC</li>
            </ul>
            <div className={styles.meta}><a href="https://github.com/name/repo">github.com/name/repo</a></div>
          </div>

          <div className={styles.entry}>
            <div className={styles.title}>Synchronized Desktop Calendar</div>
            <ul>
              <li>Developed a desktop calendar with global sync and scheduling</li>
              <li>Tools Used: C#, .NET, SQL, XML</li>
            </ul>
            <div className={styles.meta}><a href="https://github.com/name/repo">github.com/name/repo</a></div>
          </div>

          <div className={styles.entry}>
            <div className={styles.title}>Custom Operating System</div>
            <ul>
              <li>Built a UNIX-style OS with scheduler, FS, editor, calculator</li>
              <li>Tools Used: C</li>
            </ul>
            <div className={styles.meta}>2002</div>
          </div>
        </section>

        
        <section>
          <h2>Technologies</h2>
          <p><strong>Languages:</strong> C++, C, Java, Objective-C, C#, SQL, JavaScript</p>
          <p><strong>Technologies:</strong> .NET, Microsoft SQL Server, XCode, Interface Builder</p>
        </section> */}

        <section>
          <h2>Education</h2>
          {validEduDetails.length > 0
            ? validEduDetails.map((edu, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>
                      <strong>{edu?.type}</strong> — {edu?.school},{" "}
                      {edu?.stream}
                    </div>
                    {edu?.startDate && edu?.endDate && (
                      <div className={styles.meta}>
                        {edu.startDate} – {edu.endDate}
                      </div>
                    )}
                  </div>
                  <p>{edu?.description}</p>
                  <p>
                    {" "}
                    <strong>GPA:</strong> {edu?.grade}
                  </p>
                </div>
              ))
            : educationDetails.map((edu, i) => (
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
          {validExpDetails.length > 0
            ? validExpDetails.map((exp, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>
                      <strong>{exp.company}</strong>, {exp.role}
                    </div>
                    {(exp.startDate || exp.endDate) && (
                      <div className={styles.meta}>
                        {exp.startDate} – {exp.endDate}
                      </div>
                    )}
                  </div>
                  <p>{exp.description}</p>
                </div>
              ))
            : experiences.map((job, i) => (
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
          {validProDetails.length > 0
            ? validProDetails.map((pro, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>
                      <strong>{pro.company}</strong>, {pro.project}
                    </div>
                    {(pro.startDate || pro.endDate) && (
                      <div className={styles.meta}>
                        {pro.startDate} – {pro.endDate}
                      </div>
                    )}
                  </div>
                  <p>{pro.description}</p>
                </div>
              ))
            : projects.map((proj, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>{proj.project}</div>
                    <div className={styles.meta}>
                      {proj.link ? (
                        <a href={proj.link}>{proj.link}</a>
                      ) : (
                        proj.year
                      )}
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
          {validCertDetails.length > 0
            ? validCertDetails.map((cert, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>
                      <strong>{cert.title}</strong> — {cert.organization} (
                      {cert.type})
                    </div>
                    {(cert.startDate || cert.endDate) && (
                      <div className={styles.meta}>
                        {cert.startDate} – {cert.endDate}
                      </div>
                    )}
                  </div>
                  <p>{cert.description}</p>
                </div>
              ))
            : certifications.map((cert, i) => (
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
          {validResDetails.length > 0
            ? validResDetails.map((res, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>
                      <strong>{res.title}</strong>
                    </div>
                    {(res.startDate || res.endDate) && (
                      <div className={styles.meta}>
                        {res.startDate} – {res.endDate}
                      </div>
                    )}
                  </div>
                  <p>
                    {" "}
                    <strong> {res.organization} </strong> — {res.type}
                  </p>
                  <p>{res.description}</p>
                </div>
              ))
            : research.map((pub, i) => (
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
          {validAccDetails.length > 0
            ? validAccDetails.map((acc, i) => (
                <div className={styles.entry} key={i}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>
                      <strong>
                        {acc.accomplishment} — {acc.company}
                      </strong>
                    </div>
                    {(acc.startDate || acc.endDate) && (
                      <div className={styles.meta}>
                        {acc.startDate} – {acc.endDate}
                      </div>
                    )}
                  </div>
                  <p>{acc.description}</p>
                </div>
              ))
            : accomplishments.map((acc, i) => (
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
          {Array.isArray(validSkills) && validSkills.length > 0 ? (
            <p>
              <strong>Technologies:</strong>{" "}
              {validSkills
                .map((skillObj) => skillObj.skill?.trim())
                .filter(Boolean)
                .join(", ")}
            </p>
          ) : Array.isArray(Skills) ? (
            <p>
              <strong>Technologies:</strong> {Skills.join(", ")}
            </p>
          ) : typeof Skills === "string" ? (
            <p>
              <strong>Technologies:</strong> {Skills}
            </p>
          ) : (
            <p>
              <strong>Technologies:</strong> No skills provided
            </p>
          )}
        </section>

        <section>
          <h2>Languages</h2>
          {/* <p>
            {Array.isArray(languages)
              ? languages.join(", ")
              : typeof languages === "string"
              ? languages
              : ""}
          </p> */}
          {Array.isArray(validLanguage) && validLanguage.length > 0 ? (
            <p>
              {validLanguage
                .map((languageObj) => languageObj.language?.trim())
                .filter(Boolean)
                .join(", ")}
            </p>
          ) : Array.isArray(languages) ? (
            <p>
              {Skills.join(", ")}
            </p>
          ) : typeof languages === "string" ? (
            <p>
               {languages}
            </p>
          ) : (
            <p>
               No languages provided
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Template1;
