import { useState, useRef, useLayoutEffect, useEffect } from "react";
import './App.css';

import Hero from '../../components/Sections/Hero/Hero';
import Projects from '../../components/Sections/Projects/Projects';
import About from "../../components/Sections/About/About";
import Contact from "../../components/Sections/Contact/Contact";

import Navbar from '../../components/Navbar/Navbar';
import NavbarLeft from '../../components/NavbarLeft/NavbarLeft';
import NavbarRight from '../../components/NavbarRight/NavbarRight'

import Footer from "../../components/Footer/Footer";

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
    const onMove = (ev) => {
      cursorRef.current.moveTo(ev.clientX - 10, ev.clientY - 10);
    };

    window.addEventListener("pointermove", onMove);


    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <header className="App-header">
        <Navbar />
        <NavbarLeft />
        <NavbarRight />
      </header>
      <div className="cursor-container">
        <Cursor ref={cursorRef} />
      </div>
      <main className="main" ref={main}>
        <Hero />
        <Projects />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
