import React from "react";
import "./About.css";
import profile2 from "../../images/portfolio-2.png";

const About = () => {
  return (
    <section id="about">
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Grab Emilia</span>
          </h1>

          <p className="text__muted description">
            I actively develop my skills by working on personal projects and
            learning new technologies. I am passionate about creating efficient
            and reliable web applications and am always ready for new challenges
            and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
