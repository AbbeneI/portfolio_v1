import "./Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <Link className="logo-link" to="hero"
                    aria-label="Scroll to top of site"
                    href="#hero"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={200}>
                    <img className="logo" alt="logo" src="./images/logo.svg" />
                </Link>
            </div>
            <div className="nav-links-container">
                <Link
                    className="nav-link"
                    aria-label="Scroll to top of site"
                    activeClass="active-nav-link"
                    to="hero"
                    href="#hero"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={200}>
                    Home
                </Link>
                <Link
                    className="nav-link"
                    aria-label="Scroll to Ian's work"
                    activeClass="active-nav-link"
                    to="projects"
                    href="#projects"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={200}>
                    Work
                </Link>
                <Link
                    className="nav-link"
                    aria-label="Scroll to About section"
                    activeClass="active-nav-link"
                    to="about"
                    href="#about"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={200}>
                    About
                </Link>
                <Link
                    className="nav-link"
                    aria-label="Scroll to Contact section"
                    activeClass="active-nav-link"
                    to="contact"
                    href="#contact"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={200}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}