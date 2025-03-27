import React  from "react";
import "./styles.css";

export default function Option(props) {

  
  return (
    <div
      className={`option ${props.active ? "active" : ""}`}
      onClick={props.onClick}
    >
      <div className="optionIndex">{props.optionIndex}</div>
      <div className="optionText">{props.optionText}</div>
    </div>
  );
}
