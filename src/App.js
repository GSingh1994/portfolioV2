import "./styles/App.scss";
import Navbar from "./componenets/Navbar";
import Intro from "./componenets/Intro";
import Terminal from "./componenets/Terminal";
import Projects from "./componenets/Projects";
import Contact from "./componenets/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Terminal />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
