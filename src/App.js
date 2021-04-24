import "./styles/App.scss";
import Navbar from "./componenets/Navbar";
import Intro from "./componenets/Intro";
import Project from "./componenets/Project";
import Footer from "./componenets/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <Project />
      <Footer /> */}
    </div>
  );
}

export default App;
