import React from "react";
import Logo from './Logo';
import NavBarItemsCont from "./NavBarItemsCont";
import '../css/NavBar.css';

const navBarItems = [
    {
        class: "active",
        link: "Home"
    },
    {
        class: "",
        link: "Collection"
    },
    {
        class: "",
        link: "About"
    },
    {
        class: "",
        link: "Contact"
    },
]

const NavBar = () => {
    return (
        <div className="navbar">
            <Logo />
            <input type="checkbox" id="items-toggle" name="items-toggle" />
            <NavBarItemsCont navbarItems={navBarItems} />
            <label className="label-open" htmlFor="items-toggle"><i class="fas fa-bars"></i></label>
            <label className="label-close" htmlFor="items-toggle"><i class="fas fa-times"></i></label>
        </div>
    );
}

export default NavBar;