import './Contact.css';
import NavbarRight from '../../NavbarRight/NavbarRight'
import { socialLinks } from "../../../data";
import LinkedIn from "../../Icons/LinkedIn";
import Email from "../../Icons/Email";

export default function Contact({ }) {

    return (
        <section className="contact">
            <h2 className="section-title">Contact</h2>
            <p>Send me an email or connect with me on LinkedIn!</p>
            <div className="side-nav side-nav-right">
                <a className="button" href="mailto:ianabbene@gmail.com?subject=Hello! ✋" target="_blank" rel="noreferrer"><Email /></a>
                <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
            </div>

        </section>
    )
}