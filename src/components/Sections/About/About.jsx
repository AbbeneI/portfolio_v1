import './About.css';
import Headshot from './photo.jpg'

export default function About({ }) {

    return (
        <section>
            <h2 className="section-title">About Me</h2>
            <div className="about">
                <div className='about-content'>
                    <p>
                        I first became interested in coding when I built a website for my college running club—it ignited a love of HTML and CSS that continues to influence my work today.
                    </p>
                    <p>
                        My primary objective is to create accessible and responsive products for the web. Drawing from my background in user experience and design, I bring a multidisciplinary approach to every project I work on. This ensures that the end result not only meets technical requirements but also serves users.
                    </p>
                    <p>
                        When I'm not immersed in coding, I enjoy making art, exploring Hyrule, and playing a never-ending game of fetch with my Husky mix Percy.
                    </p>
                </div>
                <div className='about-headshot'><img className="headshot" src={Headshot} /><div className='about-headshot-banner'></div></div>
            </div>
        </section>
    )
}