import "./styles/App.scss";
import Navbar from "./componenets/Navbar";
import Intro from "./componenets/Intro";
import Terminal from "./componenets/Terminal";
import Projects from "./componenets/Projects";
// import Project from "./componenets/Project";
import Footer from "./componenets/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Terminal />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
