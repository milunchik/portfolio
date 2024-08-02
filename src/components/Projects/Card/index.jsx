import React from "react";
import "./Card.css";
import { AiOutlineShareAlt } from "react-icons/ai";

const Card = (props) => {
  return (
    <div className="card">
      <div className="picture">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="card__details">
        <div className="card__top">
          <h2 className="title">{props.title}</h2>
        </div>
        <div className="card__middle">
          <p className="description">{props.data.description}</p>
        </div>
        <div className="card__bottom">
          <div className="stack__container">
            <div className="stack__left">Stack</div>
            <div className="stack__right">
              <div className="stack__box__container">
                {props.stack.map((list, index) => (
                  <div className="stack__box" key={index}>
                    <div className="stack__icon__container">
                      <span
                        className="stack__icon"
                        style={{ color: list.iconColor }}
                      >
                        {list.icon}
                      </span>
                      <span className="stack__name">{list.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="button__container">
            <a
              href={props.data.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn__primary"
            >
              Demo
            </a>
            <div className="btn__share">
              <AiOutlineShareAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
