import ProjectCards from "./ProjectCards";
const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <h2>{"> Projects"}</h2>
      <blockquote>
        "Talk is cheap. Show me the code." - Linus Torvalds
      </blockquote>

      <div className="container">
        <ProjectCards
          title={"G-Tech"}
          description={
            "An e-commerce website made while studying at the Boot camp by ComIT. This was my final project at ComIT made to showcase my understanding of React, React-Router and Bootstrap."
          }
          technology={["React", "Bootstrap", "javaScript"]}
          demoLink={"https://g-tech.netlify.app/"}
          sourceLink={"https://github.com/GSingh1994/Final_Project"}
        />
        <ProjectCards
          title={"Tech Docs"}
          description={
            "PWA made to save my programming notes and some useful web-dev tools that I refer on regular basis. When I start learning code, I couldn't able to find any minimal web-app for this so, I decided to make my own."
          }
          technology={["HTML", "Less", "javaScript", "Prism.js"]}
          demoLink={"https://gsingh1994.github.io/my_Documentation/"}
          sourceLink={"https://github.com/GSingh1994/my_Documentation"}
        />
        <ProjectCards
          title={"Library App"}
          description={
            "I made this app to store books that I've read so far. This app helped in fully understanding Constructors and prototypal inheritance. All book images are fetched from Google books API and user's data is also saved on the browser's local storage."
          }
          technology={["HTML", "SASS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/Library_App/"}
          sourceLink={"https://github.com/GSingh1994/Library_App"}
        />
        <ProjectCards
          title={"gagansingh.dev"}
          description={
            "It's the site you are currently visiting. It's an updated version of my old dev portfolio. Everything is responsive and the logo-animation was made in Figma. This website was made after learning Figma and react animations."
          }
          technology={["SASS", "React", "Figma"]}
          demoLink={"https://gagansingh.dev"}
          sourceLink={"https://github.com/GSingh1994/portfolioV2"}
        />
        <ProjectCards
          title={"Restaurant-page"}
          description={
            "This is a single-page application,  created to learn npm, Less and Webpack. This project has also expanded my knowledge of ES6 module-based programming and dynamic DOM manipulation."
          }
          technology={["HTML", "Less", "javaScript", "Webpack"]}
          demoLink={"https://gsingh1994.github.io/restaurant-page/"}
          sourceLink={"https://github.com/GSingh1994/restaurant-page"}
        />

        <ProjectCards
          title={"Rock-Paper Scissors"}
          description={
            "simple implementation of classic game where you play against the computer. User can enter the number of rounds he/she want to play. The Computer moves are randomly generated by js."
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/RPS_Game/"}
          sourceLink={"https://github.com/GSingh1994/RPS_Game"}
        />
      </div>
      <a
        href="https://old-folioport.netlify.app/more.html"
        target="_blank"
        rel="noreferrer"
      >
        <button className="moreBtn">See More</button>
      </a>
    </div>
  );
};

export default Projects;
