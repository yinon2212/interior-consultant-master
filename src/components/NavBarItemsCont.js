import React from "react";
import NavBarItem from "./NavBarItem";
import '../css/NavBarItemsCont.css';

/*This function generates a new nav bar item*/
const generateItem = (id, item) => {
    return (
        <NavBarItem
            key={id}
            class={item.class}
            link={item.link}
        />
    );
}

const NavBarItemsCont = (props) => {
    return (
        <div className="navbar-items-container">
            {
                props.navbarItems.map((item, id) => {
                    return (generateItem(id, item))
                })
            }
        </div>
    );
}


export default NavBarItemsCont;