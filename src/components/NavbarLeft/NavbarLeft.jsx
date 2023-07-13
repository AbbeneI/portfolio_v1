import "./NavbarLeft.css"
import * as React from "react";

export default function navbarLeft() {

    return (
        <div className="side-nav side-nav-left">
            <a className="button" href="#"><span>Home</span></a>
            <a className="button" href="#">About</a>
            <a className="button" href="#">Work</a>
            <a className="button" href="#">Contact</a>
        </div>
    )
}