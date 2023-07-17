import './Hero.css';
import helloGIF from './hello.gif';

export default function Hero({ setCursorContent }) {

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
        <section className="hero grey-bg">
            <div>
                <h1 className="pre-title" >
                    Hello! My name is
                </h1>
            </div>

            <h2>
                <div>
                    <span className="purple-text"> Ian Abbene</span><span className="pronouns"></span>, <span>and I'm a</span>
                </div>
                <div>
                    front end developer.
                </div>
            </h2>

            <div>
                <p className="description">
                    I have a diverse background in user experience and design, and I'm passionate about creating usable, accessible interfaces.
                </p>
            </div>

            <div>
                <a className="button" href="images/logo.png" download="Resume">Resume</a>
            </div>
        </section >
    )
}