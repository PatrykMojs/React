import React from "react";
import { Link } from "react-router-dom";
import './NavBarComponent.css';
import ClockComponent from "../Clock/ClockComponent";

const NavbarComponent = () =>{

    return(
        <>
            <nav className="menuNav-container">

                <div className="clock">
                    <ClockComponent/>
                </div>

                <div className="menuNavBar">
                    <ul>
                        <li>
                            <Link to='/'> Strona główna </Link>
                        </li>
                        <li>
                            <Link to='/weather'> Pogoda </Link>
                        </li>
                        <li>
                            <Link to='/curriences'> Waluty </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default NavbarComponent;