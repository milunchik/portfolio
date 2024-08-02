import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            I am always open to new ideas and cooperation. If you have a project
            or question, don't hesitate to reach out!
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>emili061116@gmail.com</h5>
              <a
                href="mailto:emili061116@gmail.com"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__icon" />
              <h3>Messenger</h3>
              <h5>Grab Emilia</h5>
              <a
                href="http://m.me/profile?id=profile-id"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaTelegramPlane className="contact__icon" />
              <h3>Telegram</h3>
              <h5>+380953415998</h5>
              <a
                href="https://t.me/millunchik"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          <form>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn__primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
