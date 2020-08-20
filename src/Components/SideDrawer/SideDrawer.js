import React from "react"
import './SideDrawer.css';
import NavList from "../Navlist/Navlist";


const SideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <NavList/>
        </nav>

    );
};

export default SideDrawer;
