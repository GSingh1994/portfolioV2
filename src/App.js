import "./styles/App.scss";
import Navbar from "./componenets/Navbar";
import Intro from "./componenets/Intro";
import Terminal from "./componenets/Terminal";
import Projects from "./componenets/Projects";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Terminal />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
