import About from "./components/About";
import Acheivements from "./components/Acheivements";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Testimonial />
      <Skills />
      <Service />
      <Acheivements />
      <Contact />
    </div>
  );
}

export default App;
