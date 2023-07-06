import "./navbar-left.css"
import * as React from "react";
import { Link } from "react-router-dom";

export default function navbarLeft() {

    return (
        <div class="side-nav side-nav-left">
            <a href="#"><span>Home</span></a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Contact</a>
        </div>
    )
}