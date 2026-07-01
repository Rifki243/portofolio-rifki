function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a
          className="btn btn-secondary"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat Source Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
