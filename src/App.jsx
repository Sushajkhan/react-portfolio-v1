import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Notfound from "./pages/404/NotFound";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
