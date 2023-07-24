import { useState, useRef, useLayoutEffect, forwardRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef()
  const cursorRef = useRef()
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  const [cursorContent, setCursorContent] = useState('')
  const [cursorClassList, setCursorClassList] = useState('')

  const myInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
  });



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
    <>
      <header className="App-header" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {/* <Navbar hero={heroRef} about={aboutRef} projects={projectsRef} /> */}
        <nav>
          <div className="logo-container">
            <Link className="logo-link" to="hero"
              spy={true}
              smooth={true}>
              <img className="logo" alt="logo" src="./images/logo.svg" />
            </Link>
          </div>
          <div className="nav-links-container">
            <Link
              className="nav-link"
              to="hero"
              spy={true}
              smooth={false}
              offset={-70}
              duration={200}>
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active-nav-link"
              to="projects"
              spy={true}
              smooth={false}
              offset={-70}
              duration={200}>
              Work
            </Link>
            <Link
              className="nav-link"
              activeClass="active-nav-link"
              to="about"
              spy={true}
              smooth={false}
              offset={-70}
              duration={200}>
              About
            </Link>
          </div>
        </nav>

        <NavbarRight />
      </header>
      <div className="cursor-container">
        <Cursor content={cursorContent} classList={cursorClassList} ref={cursorRef} setCursorContent={setCursorContent} setCursorClassList={setCursorClassList} />
      </div>
      <main className="main" ref={main} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <Hero setCursorContent={setCursorContent} id="hero" ref={heroRef} />
        <Projects id="projects" ref={projectsRef} />
        <About id="about" ref={aboutRef} />
        <Contact />
      </main >
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
