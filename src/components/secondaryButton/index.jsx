import React from "react";
import './styles.css'


export default function SecondaryButton(props) {
    return(
        <button className="secondaryButton" onClick={props.onClick}>
            {props.name}
        </button>
    )
}