import { experiences } from "../data";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Pengalaman kerja dan organisasi yang relevan.
        </p>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div className="experience-item" key={exp.id}>
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
