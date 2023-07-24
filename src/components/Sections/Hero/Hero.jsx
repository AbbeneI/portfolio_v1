import './Hero.css';

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
        <section className="hero">
            <h1 className="pre-title">
                Hello! My name is
            </h1>
            <h2>
                <span className="purple-text" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >Ian Abbene,</span><span > and I'm a</span> front end developer.
            </h2>
            <p className="description">
                I have a diverse background in user experience and design,and I'm passionate about creating usable, accessible interfaces.
            </p>
            <a className="button" href="images/IanAbbeneResume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </section >
    )
}