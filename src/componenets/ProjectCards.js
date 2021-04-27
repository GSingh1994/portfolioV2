const ProjectCards = ({
  title,
  description,
  technology,
  demoLink,
  sourceLink,
}) => {
  const techItems = technology.map((tech, i) => (
    <li key={i} className="tech">
      {tech}
    </li>
  ));
  return (
    <div className="project-card">
      <div>
        <h3 className="title">{title}</h3>
        <div className="description">{description}</div>
      </div>
      <div>
        <ul className="techItems">{techItems}</ul>

        <div className="buttons">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className="btn demo">Live Demo</button>
          </a>
          <a href={sourceLink} target="_blank" rel="noreferrer">
            <button className="btn source">Source</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
