import './About.css';
import Headshot from './photo.jpg'

export default function About({ setCursorContent }) {
    function handleMouseOver(e) {
        if (e.target.id === 'hyrule') {
            setCursorContent('triforce')
        }
        else {
            setCursorContent('')
        }
    }

    function handleMouseLeave() {
        setCursorContent('');
    }
    return (
        <section className='about'>
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className='about-desc'>
                    <p>
                        I first became interested in coding when I built a website for my college running club—it ignited a love of HTML and CSS that continues to influence my work today.
                    </p>
                    <p>
                        My primary objective is to create accessible and responsive products for the web. Drawing from my background in user experience and design, I bring a multidisciplinary approach to every project I work on. This ensures that the end result not only meets technical requirements but also serves users.
                    </p>
                    <p>
                        When I'm not immersed in coding, I enjoy making art, <span id="hyrule" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>exploring Hyrule</span>, and playing a <span id="percy">never-ending game of fetch with my Husky mix Percy.</span>
                    </p>
                </div>
                <div className='about-headshot'><img className="headshot" src={Headshot} alt="Professional photo of Ian Abbene" /><div className='about-headshot-banner'></div></div>
            </div>
        </section >
    )
}