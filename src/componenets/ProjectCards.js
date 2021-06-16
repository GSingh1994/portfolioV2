import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import gitLogo from "../assets/logo-github.svg";
const ProjectCards = ({
  title,
  description,
  technology,
  demoLink,
  sourceLink,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techItems = technology.map((tech, i) => (
    <li key={i} className="tech">
      {tech}
    </li>
  ));
  return (
    <div data-aos="fade-up" className="project-card">
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
            <button className="btn source">
              <img src={gitLogo} alt="" /> Source
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
