import { skills } from "../data";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="section-subtitle">Skill profesional yang saya kuasai.</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
