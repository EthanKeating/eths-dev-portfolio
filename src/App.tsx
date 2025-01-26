import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
