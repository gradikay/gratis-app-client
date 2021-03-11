// This file is exported to --->  src/App.js
// React required
import React from "react";
import { Link } from "react-router-dom"; 
// Getting - user status (user login - true or false) - from useAppContext
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Navigation.css";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Navigation() {

    // Handling Logout
    async function handleLogout() { 


        // Redirect to login
        window.location.href = '/login';

    }
 
    // Return UI
    return (
        <>
            {/* Nav - Start */ }
            <nav id="Navigation" className="navbar navbar-expand-lg border-bottom border-warning bg-dark">

                { /* Brand - Start */}
                <Link className="navbar-brand text-white p-0" to="/">Gratis</Link>
                { /* Brand - End */}

                { /* Toggler/collapsibe Button - Start */}
                <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                    className="navbar-toggler text-white border border-white"
                >

                    { /* Icon */}
                    <i className='fa fa-server' role="img" aria-label="menu"></i>

                </button>
                { /* Toggler/collapsibe Button - End */}
             
                { /* Center Navigation - Start */}
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">

                    <ul className="navbar-nav">
                    
                        { /* Other Links - Start */}
                        <AppliedLinks/>
                        { /* Other Links - End */}   

                    </ul>

                </div>
                { /* Center Navigation - End */}

                { /* Right Navigation - Start */}
                <div className="collapse navbar-collapse justify-content-end mr-3" id="collapsibleNavbar">

                    <ul className="navbar-nav"> 

                        <AuthenticatedLinks handleLogout={handleLogout} />
                        <UnauthenticatedLinks />

                    </ul>

                </div>
                { /* Right Navigation - End */}

            </nav>
            {/* Nav - End */ }
        </>
        );
}

// AppliedLinks Block - Links for both public and logged in users
function AppliedLinks() {

    // Return UI
    return (
        <> 
            { /* Home Link - Start */}
            <li className="nav-item">
                <Link className="nav-link" to={`/`}>

                    { /* Icon */}
                    <span role="img" aria-label="search"> &#127812; </span>

                    { /* Title */}
                    <span> Home </span>

                </Link>
            </li> 
            { /* Home Link - End */}

            {/*  Just add "li" for more Links
             *  <li> <Links className="nav-link" to={`/somewhere`}> Somewhere </Link> </li>
             */}

        </>
        );
}

// AuthenticatedLinks Block - Links for logged in users
function AuthenticatedLinks(props) {

    // Important variables
    const { handleLogout } = props;

    // Return UI
    return (
        <> 

            { /* Compte - Dropdown - Start */}
            <div className="nav-item dropdown">

                { /* Dropdown Button - Start */ }
                <a className="nav-link dropdown-toggle" href="#n" id="navbardrop" data-toggle="dropdown">
                    <i className="fa fa-user-circle" role="img" aria-label="account"></i>
                </a>
                { /* Dropdown Button - End */ }

                { /* Add Post & Dashboard - Start */ }
                <ul className="dropdown-menu bg-dark border border-warning pl-2">

                    { /* Add Post Link - Start */ }
                    <li className="nav-item">
                        <Link className="nav-link" to="/postnew">
                            + Add Post
                        </Link>
                    </li>
                    { /* Add Post Link - End */ }

                    { /* Dashboard Link - Start */ }
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">

                            { /* Icon */}
                            <i className="fa fa-ban fa-spin"></i>

                            { /* Title */}
                            <span> Dashboard </span>

                        </Link>
                    </li>  
                    { /* Dashboard Link - End */ }

                </ul>
                { /* Add Post & Dashboard - End */ }

            </div>
            { /* Compte - Dropdown - End */}

            { /* Logout Span - Start */}
            <div className="nav-item dropdown" style={{ cursor: "pointer" }}>

                <span className="nav-link" onClick={handleLogout}>

                    { /* Icon */}
                    <span role="img" aria-label="logout angel"> &#128519; </span> 

                    { /* Title */}
                    <span> Logout </span>

                </span>

            </div>
            { /* Logout Span - End */}
        </>
        );
}

//  AuthenticatedLinks Block - Links for public users
function UnauthenticatedLinks() {

    // Return UI
    return (
        <>
            { /* Register Link - Start */}
            <li className="nav-item">
                <Link className="nav-link" to="/register">

                    { /* Icon */}
                    <span role="img" aria-label="register"> &#129488; </span> 

                    { /* Title */}
                    <span> Register </span>

                </Link>
            </li>
            { /* Register Link - End */}

            { /* Sign In Link - Start */}
            <li className="nav-item">
                <Link className="nav-link" to="/login">

                    { /* Icon */}
                    <span role="img" aria-label="login"> &#128514; </span>

                    { /* Title */}
                    <span> Login </span>

                </Link>
            </li>
            { /* Sign In Link - End */}

        </>
        );
}