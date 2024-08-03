import React, { useRef, useEffect } from "react";
import "./Services.css";
import { HiDesktopComputer } from "react-icons/hi";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Services = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = container.current;

    gsap.fromTo(
      ".service__head",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".service",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="services" ref={container}>
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <h2 className="primary__title service__head">My Services</h2>
          <p className="text__muted description">
            I offer a wide range of services to help you build robust and
            scalable web applications. With my expertise in backend development,
            I can ensure your projects are efficient, reliable, and tailored to
            your needs.
          </p>
        </div>

        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <HiDesktopComputer className="icon" />
              </div>
              <h3 className="title">Backend Development</h3>
            </div>
            <p className="text__muted description">
              I specialize in creating powerful backend solutions using Node.js,
              Express.js, TypeScript, NestJS, and GraphQL. My focus is on
              building scalable and maintainable server-side applications.
            </p>
          </article>

          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FiDatabase className="icon" />
              </div>
              <h3 className="title">Database Management</h3>
            </div>
            <p className="text__muted description">
              I am proficient in MongoDB, MySQL, and PostgreSQL. I can design
              and optimize databases to ensure data integrity, performance, and
              security.
            </p>
          </article>

          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <AiOutlineApi className="icon" />
              </div>
              <h3 className="title">API Development</h3>
            </div>
            <p className="text__muted description">
              I can develop RESTful and GraphQL APIs to allow seamless
              communication between your frontend and backend systems, ensuring
              a smooth and efficient user experience.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
