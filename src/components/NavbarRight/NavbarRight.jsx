import "./NavbarRight.css"
import { socialLinks } from "../../data";
import GitHub from "../icons/Github";
import CodePen from "../icons/Codepen";
import Medium from "../icons/Medium";
import LinkedIn from "../icons/LinkedIn";

export default function navbarRight() {

    return (
        <div className="side-nav side-nav-right">
            <a className="button" href="#" target="_blank"><LinkedIn link={socialLinks.linkedin} /></a>
            <a className="button" href="#" target="_blank"><GitHub link={socialLinks.github} /></a>
            <a className="button" href="#" target="_blank"><CodePen link={socialLinks.codepen} /></a>
            <a className="button" href="#" target="_blank"><Medium link={socialLinks.medium} /></a>
        </div>
    )
}