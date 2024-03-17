import React from "react";
import "./Card.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Card(props) {
  return (
    <div className="threecard">
      <div className="t">
        <h2>{props.title}</h2>
        <div className="p">
          <p>{props.data}</p>
        </div>

        <FaArrowRightLong size={32} className="arrow"/>
      </div>
    </div>
  );
}
export default Card;
