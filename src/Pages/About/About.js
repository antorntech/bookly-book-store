import React from "react";
import "./About.css";
import aboutImg from "../../images/about-me/about.jpg";

const About = () => {
  return (
    <div className="container py-3 py-lg-5">
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="about-banner">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
        </div>
        <div className="col text-start">
          <h2 className="fw-bold">
            About <span style={{ color: "var(--green)" }}>Me</span>
          </h2>
          <p style={{ color: "var(--light-color)" }}>
            It's Antor, Professional Web Developer. I love to write code, it's
            my passion. I am here to help you, I am here to design your web
            page.I can help you to describe yourself in the best way. No matter
            how difficult your web page is, I'll find an easy way and complete
            your work anyway. Stay connect with me……..😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
