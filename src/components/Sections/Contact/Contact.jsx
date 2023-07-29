import './Contact.css';
import { socialLinks } from "../../../data";
import LinkedIn from "../../Icons/LinkedIn";
import Email from "../../Icons/Email";
import GitHub from '../../Icons/Github';
import CodePen from '../../Icons/Codepen';
import Medium from '../../Icons/Medium';

export default function Contact({ }) {

    return (
        <section className="contact">
            <h2 className="section-title">Contact</h2>
            <p>You can reach me by email, or connect with me on LinkedIn.</p>
            <div className="icon-container">
                <a className="button" href="mailto:ianabbene@gmail.com?subject=Hello! ✋" target="_blank" rel="noreferrer">
                    <Email />
                </a>
                <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
            </div>
            <div className="mobile-container">
                <div className="icon-container">
                    <a className="button" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="Link to Ian's Github page" >
                        <GitHub />
                    </a>
                    <a className="button" href={socialLinks.codepen} target="_blank" rel="noreferrer" aria-label="Link to Ian's Codepen page" >
                        <CodePen />
                    </a>
                    <a className="button" href={socialLinks.medium} target="_blank" rel="noreferrer" aria-label="Link to Ian's Medium page" >
                        <Medium />
                    </a>
                </div>

            </div>

        </section>
    )
}