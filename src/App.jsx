import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

import "./style/Reset.scss";

const App = () => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    fetch("https://profile-visit-counter.onrender.com/api/visit")
      .then((res) => res.json())
      .then((data) => setVisits(data.visits));
  }, []);
  return (
    <>
      <Nav />
      <Hero visits={visits} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
