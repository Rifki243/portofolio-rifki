import { projects } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Project</h2>
        <p className="section-subtitle">
          Beberapa project yang pernah dan saat ini saya kerjakan.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
