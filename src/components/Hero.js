import React from "react";
import HeroImg from "../images/hero.png"

export default function Hero(params) {
    return(
        <section className="hero">
            <img className="hero--img" src={HeroImg} alt="hero"></img>
            <h2 className="hero--header">Online Experiences</h2>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
};
