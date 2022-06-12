import React from "react";
import images from "../images/images.png";

function Hero() {
  return (
    <section className="hero">
      <img src={images} alt="Airbnb grid" className="hero--image" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
