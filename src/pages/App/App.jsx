import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import './App.css';
import Hero from '../../components/Sections/Hero/Hero';
import Projects from '../../components/Sections/Projects/Projects';

import Navbar from '../../components/Navbar/Navbar';
import NavbarLeft from '../../components/navbar-left/navbar-left';
import Cursor from '../../components/Cursor/Cursor';


function App() {

  // const comp = useRef(); // create a ref for the root level element (we'll use it later)
  const cursorRef = useRef();


  return (
    <>
      <header className="App-header">
        <Navbar />
        <NavbarLeft />
      </header>

      <main className="App">
        {/* <div className="cursor" ref={cursorRef}></div> */}
        <Cursor />
        <Hero />
        <Projects />
        {/* <About />
        <Experience />
        <Contact /> */}
      </main>
    </>
  );
}

export default App;
