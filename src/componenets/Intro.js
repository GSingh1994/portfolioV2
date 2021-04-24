import TypeIt from "typeit-react";

const Intro = () => {
  return (
    <div className="Intro">
      <TypeIt
        className="typewriter"
        options={{
          strings: ["> Gagan Singh"],
          speed: 150,
          waitUntilVisible: true,
        }}
      />
    </div>
  );
};

export default Intro;
