import React from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "../../index.css";
import Logo from "../../assets/logo.webp";


const Header = () => {

    const [showNavbar, setShowNavbar] = React.useState(false);
 
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink  to="/">

                    <img src={Logo} alt="logo" />
                    </NavLink>

                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <MenuOpenIcon  sx={{color:'white', fontSize:'3rem'}} />
                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/Contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/term-and-condition"> Private Policy</NavLink>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
