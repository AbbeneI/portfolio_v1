import "./Navbar.css"
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function navbar({ hero, projects, about }) {
    function handleHeroScroll() {
        if (hero) {
            // 👇 Will scroll smoothly to the top of the next section
            hero.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function handleProjectsScroll() {
        if (projects) {
            // 👇 Will scroll smoothly to the top of the next section
            projects.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function handleAboutScroll() {
        if (about) {
            // 👇 Will scroll smoothly to the top of the next section
            about.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <nav>
                <div className="logo-container">
                    <Link className="logo-link" href="https://ianabbene.com">
                        <img className="logo" alt="logo" src="./images/logo.svg" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <a className="nav-link" href="#hero" onClick={handleHeroScroll}>Home</a>
                    <a className="nav-link" href="#projects" onClick={handleProjectsScroll}>Work</a>
                    <a className="nav-link" href="#about" onClick={handleAboutScroll}>About</a>
                    {/* <a className="nav-link" href="https://google.com">Contact</a> */}
                </div>
            </nav>

        </>
    )
}