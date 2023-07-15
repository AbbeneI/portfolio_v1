import './Hero.css';

export default function Hero({ }) {

    return (
        <section className="hero grey-bg">
            <div>
                <h1 className="pre-title" >
                    Hello! My name is
                </h1>
            </div>

            <h2>
                <div>
                    <span className="purple-text"> Ian Abbene </span><span className="pronouns">(they/them)</span> , <span>and I'm a</span>
                </div>
                <div>
                    front end developer.
                </div>
            </h2>

            <div>
                <p className="description">
                    As a highly motivated and innovative software engineer, I bring a wealth of experience spanning diverse industries, allowing me to thrive both autonomously and within collaborative team settings. I am particularly passionate about user interface design and am committed to delivering impactful solutions that solve complex challenges.
                </p>
            </div>

            <div>
                <a className="button" href="images/logo.png" download="Resume">Resume</a>
            </div>
        </section>
    )
}