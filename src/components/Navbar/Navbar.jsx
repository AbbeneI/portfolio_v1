import "./Navbar.css"
import { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function navbar({ hero, projects, about }) {
    function handleHeroScroll() {
        if (hero) {
            hero.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function handleProjectsScroll() {
        if (projects) {
            projects.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function handleAboutScroll() {
        if (about) {
            about.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <nav>
                <div className="logo-container">
                    <Link className="logo-link" to="hero"
                        spy={true}
                        smooth={false}
                        offset={-70}
                        duration={200}>
                        <img className="logo" alt="Ian Abbene personal logo" src="./images/logo.svg" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link
                        className="nav-link"
                        activeClass="active-nav-link"
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

        </>
    )
}