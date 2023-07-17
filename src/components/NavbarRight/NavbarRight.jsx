import "./NavbarRight.css"
import { socialLinks } from "../../data";
import GitHub from "../Icons/Github";
import CodePen from "../Icons/Codepen";
// import Medium from "../Icons/Medium";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";

export default function navbarRight() {

    return (
        <div className="side-nav side-nav-right">
            <a className="proj-link button" href={socialLinks.linkedin} target="_blank">
                <LinkedIn />
            </a>

            <a className="proj-link button" href={socialLinks.github} target="_blank">
                <GitHub />
            </a>
            <a className="proj-link button" href={socialLinks.codepen} target="_blank">
                <CodePen />
            </a>
            <a className="proj-link button" href="mailto:ianabbene@gmail.com?subject=Hello! ✋" target="_blank"><Email /></a>

            {/* <a className="button" href="#" target="_blank"><Medium link={socialLinks.medium} /></a> */}

        </div>
    )
}