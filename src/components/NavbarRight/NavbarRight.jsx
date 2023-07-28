import "./NavbarRight.css"
import { socialLinks } from "../../data";
import { useLayoutEffect, useRef } from "react";

import GitHub from "../Icons/Github";
import CodePen from "../Icons/Codepen";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";
import Medium from "../Icons/Medium";

import fadeIn from "../Animations/FadeIn/FadeIn";
import { gsap } from "gsap";

export default function NavbarRight() {
    const linkedInRef = useRef();
    const gitHubRef = useRef();
    const codePenRef = useRef();
    const emailRef = useRef();
    const mediumRef = useRef();


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            fadeIn(linkedInRef.current, { delay: 0.1 });
            fadeIn(gitHubRef.current, { delay: 0.2 });
            fadeIn(codePenRef.current, { delay: 0.3 });
            fadeIn(emailRef.current, { delay: 0.4 });
            fadeIn(mediumRef.current, { delay: 0.5 });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="side-nav side-nav-right">
            <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Link to Ian's LinkedIn page" ref={linkedInRef}>
                <LinkedIn />
            </a>

            <a className="button" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="Link to Ian's Github page" ref={gitHubRef}>
                <GitHub />
            </a>
            <a className="button" href={socialLinks.codepen} target="_blank" rel="noreferrer" aria-label="Link to Ian's Codepen page" ref={codePenRef}>
                <CodePen />
            </a>
            <a className="button" href={socialLinks.medium} target="_blank" rel="noreferrer" aria-label="Link to Ian's Medium page" ref={mediumRef}>
                <Medium />
            </a>
            <a className="button" href="mailto:ianabbene@gmail.com?subject=Hello! ✋" target="_blank" rel="noreferrer" aria-label="Send Ian an email" ref={emailRef}>
                <Email />
            </a>


        </div>
    )
}