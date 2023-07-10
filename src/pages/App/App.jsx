import { useState, useRef, useLayoutEffect, useEffect } from "react";
import './App.css';

import Hero from '../../components/Sections/Hero/Hero';
import Projects from '../../components/Sections/Projects/Projects';
import Navbar from '../../components/Navbar/Navbar';
import NavbarLeft from '../../components/navbar-left/navbar-left';
import { Cursor } from '../../components/Cursor/Cursor';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const main = useRef()
  const cursorRef = useRef()

  // const scrollTo = () => {
  //   smoother.current.scrollTo('.box-c', true, 'center center');
  // };

  // useEffect(() => {
  //   const ctx = gsap.context(() => {

  //     ScrollTrigger.create({
  //       trigger: '.box-c',
  //       pin: true,
  //       start: 'center center',
  //       end: '+=300',
  //       markers: true,
  //     });

  //   }, main);
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    // doesn't trigger a render!
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    // cursorRef.current.moveTo(innerWidth / 2, innerHeight / 2);

    const onMove = ({ clientX, clientY }) => {
      cursorRef.current.moveTo(clientX, clientY);
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <header className="App-header">
          <Navbar />
          <NavbarLeft />
        </header>

        <main className="App">
          <Cursor ref={cursorRef} />
          <Cursor />
          <Hero />
          <Projects />
          {/* <About />
        <Experience />
        <Contact /> */}
        </main>
      </div>
    </>

  );
}

export default App;
