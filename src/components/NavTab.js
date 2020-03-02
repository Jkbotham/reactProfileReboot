import React from 'react';
import { Link } from 'react-router-dom';

function NavTab() {
    return (
        <nav className="navbar border p-0 m-0" id="navbar">
            <span className="navbar-brand h2" id="name">James Botham</span>
            <ul className="nav justify-content-end" >
                <li className="nav-item">
                    <Link
                        to="/reactProfileReboot"
                        className={window.location.pathname === "/reactProfileReboot/about" ? "nav-link active" : "nav-link"} >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/reactProfileReboot/profile"
                        className={window.location.pathname === "/reactProfileReboot/profile" ? "nav-link active" : "nav-link"} >
                        Portfolio
                        </Link>
                </li>
                <li id="small" className="nav-item">
                    <Link to="/reactProfileReboot/contact"
                        className={window.location.pathname === "/reactProfileReboot/contact" ? "nav-link active" : "nav-link"} >
                        Contact
                        </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavTab;