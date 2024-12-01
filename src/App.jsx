import Acheivements from "./components/Acheivements";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
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
      <Expertise />
      <Testimonial />
      <Skills />
      <Service />
      <Acheivements />
      <Contact />
    </div>
  );
}

export default App;
