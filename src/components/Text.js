import React from "react";
import '../css/Text.css';


const Text = (props) => {
    return (
        <p className={`text ${props.style}`}>{props.text}</p>
    );
}

export default Text;