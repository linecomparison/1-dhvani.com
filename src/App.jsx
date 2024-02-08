import Logo from "./components/Design/Logo";
import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "aos/dist/aos.css";

export default function App() {
  return (
    <div className="bg-background min-w-screen min-h-screen text-text px-4 md:px-8 font-body">
      <Logo />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
