import './Hero.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';
import fadeIn from '../../Animations/FadeIn/FadeIn';

export default function Hero({ setCursorContent }) {
    const heroRef = useRef({})

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const animation = fadeIn(heroRef.current)
        });

        return () => ctx.revert();

    }, [])

    function handleMouseOver(e) {
        if (e.target.className === 'purple-text') {
            setCursorContent('(they/them)')
        }
        else {
            setCursorContent('')
        }
    }

    function handleMouseLeave() {
        setCursorContent('');
    }

    return (
        <section className="hero" ref={heroRef}>
            <h1 className="pre-title">
                Hello! My name is
            </h1>
            <h2>
                <span className="purple-text" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >Ian Abbene,</span><span > and I'm a</span> software engineer.
            </h2>
            <p className="description">
                I have a diverse background in user experience and design, and I'm passionate about creating usable, accessible interfaces.
            </p>
            <Link
                className="button"
                to="projects"
                href="#projects"
                aria-label="Scroll to see my work"
                spy={true}
                smooth={false}
                offset={-70}
                duration={200}>
                My Work
            </Link>
        </section >
    )
}