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
            "An e-commerce website made while learning React. This was my final project in the ComIT's React Bootcamp "
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://g-tech.netlify.app/"}
          sourceLink={"https://github.com/GSingh1994/Final_Project"}
        />
        <ProjectCards
          title={"Tech Docs"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, delectus esse. Minima, doloremque? Debitis quasi ab, quos harum ea laborum, saepe in libero repellat nam dolorum unde at omnis cumque."
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/my_Documentation/"}
          sourceLink={"https://github.com/GSingh1994/my_Documentation"}
        />
        <ProjectCards
          title={"Tic-Tac-Toe"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, delectus esse. Minima, doloremque? Debitis quasi ab, quos harum ea laborum, saepe in libero repellat nam dolorum unde at omnis cumque."
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/TicTacToe_game/"}
          sourceLink={"https://github.com/GSingh1994/TicTacToe_game"}
        />
        <ProjectCards
          title={"Rock-Paper Scissors"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, delectus esse. Minima, doloremque? Debitis quasi ab, quos harum ea laborum, saepe in libero repellat nam dolorum unde at omnis cumque."
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/RPS_Game/"}
          sourceLink={"https://github.com/GSingh1994/RPS_Game"}
        />
        <ProjectCards
          title={"Calculator"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, delectus esse. Minima, doloremque? Debitis quasi ab, quos harum ea laborum, saepe in libero repellat nam dolorum unde at omnis cumque."
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/calculator/"}
          sourceLink={"https://github.com/GSingh1994/calculator"}
        />
        <ProjectCards
          title={"Etch A Sketch"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, delectus esse. Minima, doloremque? Debitis quasi ab, quos harum ea laborum, saepe in libero repellat nam dolorum unde at omnis cumque."
          }
          technology={["HTML", "CSS", "javaScript"]}
          demoLink={"https://gsingh1994.github.io/Etch_A_Sketch/"}
          sourceLink={"https://github.com/GSingh1994/Etch_A_Sketch"}
        />
      </div>
    </div>
  );
};

export default Projects;
