import { useEffect, useState, useRef, useLayoutEffect, forwardRef } from "react";
import './App.css';
import '../../components/Navbar/Navbar.css'

import Hero from '../../components/Sections/Hero/Hero.jsx';
import Projects from '../../components/Sections/Projects/Projects.jsx';
import About from "../../components/Sections/About/About.jsx";
import Contact from "../../components/Sections/Contact/Contact.jsx";
import Navbar from '../../components/Navbar/Navbar.jsx';
import NavbarRight from '../../components/NavbarRight/NavbarRight.jsx'
import Footer from "../../components/Footer/Footer.jsx";
import { Cursor } from '../../components/Cursor/Cursor.jsx';

import { gsap } from "gsap";
import fadeIn from "../../components/Animations/FadeIn/FadeIn";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null)
  const cursorRef = useRef(null)
  const heroRef = useRef({});
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const [cursorContent, setCursorContent] = useState('')
  const [cursorClassList, setCursorClassList] = useState('')

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      fadeIn(appRef.current)
    });

    return () => ctx.revert();

  }, [])

  useLayoutEffect(() => {
    // doesn't trigger a render!
    const onMove = (ev) => {
      cursorRef.current.moveTo(ev.clientX - 10, ev.clientY - 10);
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  function handleMouseOver(e) {
    if (e.target.nodeName === 'A' || e.target.nodeName === 'svg' || e.target.nodeName === 'path') {
      setCursorClassList('active');
    }
    else {
      setCursorClassList('');
    }
  }

  function handleMouseLeave() {
    setCursorClassList('');
  }


  return (
    <app ref={appRef}>
      <header className="App-header" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <Navbar />
        <NavbarRight />
      </header>
      <div className="cursor-container">
        <Cursor content={cursorContent} classList={cursorClassList} ref={cursorRef} setCursorContent={setCursorContent} setCursorClassList={setCursorClassList} />
      </div>
      <main className="main" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <Hero setCursorContent={setCursorContent} id="hero" />
        <Projects id="projects" />
        <About setCursorContent={setCursorContent} id="about" />
        <Contact />
      </main >
      <footer>
        <Footer />
      </footer>
    </app>
  );
}

export default App;
