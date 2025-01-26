import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Projects />
      <Footer />
      <Analytics />
    </>
  );
};

export default App;
