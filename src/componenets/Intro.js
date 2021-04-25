import TypeIt from "typeit-react";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="name">Hi, my name is</div>
      <div className="typewriter">
        <TypeIt
          options={{
            strings: ["{Gagandeep Singh}"],
            speed: 150,
            waitUntilVisible: true,
            cursor: false,
          }}
        />
      </div>

      <div className="moreInfo">I am a self-taught web developer.</div>
    </div>
  );
};

export default Intro;
