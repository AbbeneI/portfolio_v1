import "./NavbarRight.css"
import { socialLinks } from "../../data";
import GitHub from "../Icons/Github";
import CodePen from "../Icons/Codepen";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";

export default function navbarRight() {

    return (
        <div className="side-nav side-nav-right">
            <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Link to Ian's LinkedIn">
                <LinkedIn />
            </a>

            <a className="button" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="Link to Ian's Github">
                <GitHub />
            </a>
            <a className="button" href={socialLinks.codepen} target="_blank" rel="noreferrer" aria-label="Link to Ian's Codepen">
                <CodePen />
            </a>
            <a className="button" href="mailto:ianabbene@gmail.com?subject=Hello! ✋" target="_blank" rel="noreferrer" aria-label="Send Ian an email">
                <Email />
            </a>

        </div>
    )
}