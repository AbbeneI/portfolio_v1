import './Contact.css';
import { socialLinks } from "../../../data";
import LinkedIn from "../../Icons/LinkedIn";
import Email from "../../Icons/Email";
import Codepen from '../../Icons/Codepen';

export default function Contact({ }) {

    return (
        <section className="contact">
            <h2 className="section-title">Contact</h2>
            <p>You can reach me by email, or connect with me on LinkedIn.</p>
            <div className="side-nav side-nav-right">
                <a className="button" href="mailto:ianabbene@gmail.com?subject=Hello! ✋" target="_blank" rel="noreferrer">
                    <Email />
                </a>
                <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
                <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                    <Codepen />
                </a>
            </div>

        </section>
    )
}