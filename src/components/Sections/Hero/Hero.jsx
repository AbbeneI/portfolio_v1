import './Hero.css';
import { useEffect, useRef } from 'react';
import helloGIF from './hello.gif';

export default function Hero({ setCursorContent }) {
    const hero = useRef();

    function handleMouseOver(e) {
        if (e.target.className === 'purple-text') {
            setCursorContent('They/them')

        }
        else {
            setCursorContent(<img src={helloGIF} />)
        }
    }

    function handleMouseLeave() {
        setCursorContent('');
    }

    return (
        <section className="hero grey-bg" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div>
                <h1 className="pre-title" >
                    Hello! My name is
                </h1>
            </div>

            <h2>
                <div>
                    <span className="purple-text"> Ian Abbene</span><span className="pronouns"></span>, <span>and I'm <a href="http://" target="_blank" rel="noopener noreferrer"></a></span>
                </div>
                <div>
                    front end developer.
                </div>
            </h2>

            <div>
                <p className="description">
                    I'm a motivated and innovative software engineer with a diverse background in user experience and design.
                    <br /> <br />
                    I'm particularly passionate about user interface design and I'm committed to delivering impactful solutions that solve complex challenges.
                </p>
            </div>

            <div>
                <a className="button" href="images/logo.png" download="Resume">Resume</a>
            </div>
        </section >
    )
}