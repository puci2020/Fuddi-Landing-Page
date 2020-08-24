import React, {useState} from 'react';
import "./Navbar.css"
import NavList from "../Navlist/Navlist";
import Burger from "../Burger/Burger";
import logo from "../../img/logo.png"



const Navbar = props => {
    const [navbar, setNavbar]=useState(false);

    const changeBackground = () =>{
        if (window.scrollY>=80)
            setNavbar(true);
        else
            setNavbar(false);
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className={navbar ? 'logo_title logo_active' : 'logo_title'}>Fuddi</div>

            <Burger click={props.drawerClickHandler} />
            <NavList/>
        </header>
    );
}

export default Navbar;
