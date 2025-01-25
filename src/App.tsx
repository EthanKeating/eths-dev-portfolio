import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
