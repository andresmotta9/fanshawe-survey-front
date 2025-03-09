import React from "react";
import './styles.css'


export default function SecondaryButton(props) {
    return(
        <button className="secondaryButton">
            {props.name}
        </button>
    )
}