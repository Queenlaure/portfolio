import './App.css';
import { useEffect} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Home from './components/Home';
import About from './components/About'
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
      <BrowserRouter>
      <Routes>
      {/* <Route path="Navbar" element={<Navbar />} /> */}
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
