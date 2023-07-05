import "./navbar-left.css"
import { Link } from "react-router-dom";

export default function navbarLeft() {

    return (
        <div class="side-nav side-nav-left">
            <li><span>Home</span></li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </div>
    )
}