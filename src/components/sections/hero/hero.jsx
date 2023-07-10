import './Hero.css';
import { useState, useEffect } from "react";

export default function Hero({ }) {

    return (
        <section className="hero">
            <div>
                <h1 className="pre-title" >
                    Hello! My name is
                </h1>
            </div>

            <h2>
                <div>
                    Ian Abbene <span className="pronouns">(they/them)</span> , <span>and I'm a</span>
                </div>
                <div>
                    front end developer.
                </div>
            </h2>

            <div>
                <p className="description">
                    As a driven and innovative software engineer, I bring a wealth of experience from diverse industries, enabling me to excel both independently and collaboratively in teams. I am particularly passionate about user interface design and am committed to delivering impactful solutions that solve complex challenges.
                </p>
            </div>

            <div>
                <button>Button</button>
            </div>
        </section>
    )
}