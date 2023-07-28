import "./Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll";


export default function navbar() {

    return (
        <nav>
            <div className="logo-container">
                <Link className="logo-link" to="hero"
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
                    aria-label="Scroll to homepage"
                    to="hero"
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
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={200}>
                    About
                </Link>
            </div>
        </nav>
    )
}