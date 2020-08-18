import React from 'react';
import "./Navbar.css"
import NavList from "../Navlist/Navlist";



const Navbar = props => {
    return (
        <header>
            <div className="logo">
                <img alt="logo"/>
            </div>
            <NavList/>
        </header>
    );
}

export default Navbar;
