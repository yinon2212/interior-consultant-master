import React from "react";
import '../css/NavBarItem.css';


const NavBarItem = (props) => {
    return (
        <a key={props.key || ""} className={`navbar-item ${props.class}`} href="#">{props.link}</a>
    );
}

export default NavBarItem;