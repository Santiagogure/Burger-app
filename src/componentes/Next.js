import React from "react";
import { Slide } from "react-awesome-reveal"
import "../style/next.css";
import nextBurger from "../images/burger-favorite.jpg";

const Next = ({ id }) => {
  return (
    <div className="nextContainer" id={id}>
      <h2>The next burger</h2>
      <div className="nextContent">
        <Slide>
          <img
            style={{ cursor: "pointer" }}
            src={nextBurger}
            className="nextImage"
            alt="cake"
          />
        </Slide>
        <Slide >
          <div className="textContent">
            <p>
              In the following days, the Monster Burger it would be released.
              This burger stands out for its special meat and unique cheese that
              will make you explode with happiness, enjoy it.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Next;
