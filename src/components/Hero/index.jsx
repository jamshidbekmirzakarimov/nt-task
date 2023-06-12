import React from "react";
import HeroBg from "../../assets/images/hero-bg.jpg";
import "./Hero.css"
const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-section-box">
            <h2 className="hero-section-title">Bosh sahifa </h2>
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3L11 3"
                stroke="#C4C4C4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 1L11 3L9 5"
                stroke="#C4C4C4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="hero-section-subtitle">Bloglar</h3>
          </div>
          <img src={HeroBg} alt="" width={1200} />
        </div>
      </section>
    </>
  );
};

export default Hero;
