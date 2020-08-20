import React from 'react';
import "./Navbar.css"
import NavList from "../Navlist/Navlist";
import Burger from "../Burger/Burger";



const Navbar = props => {
    return (
        <header>
            <div className="logo">
                {/*<img alt="logo"/>*/}
                <h1>Logo</h1>
            </div>

            <Burger click={props.drawerClickHandler} />
            <NavList/>
        </header>
    );
}

export default Navbar;
