// This file is exported to --->  src/index.js
// React required
import React, { useState, useEffect } from "react"; 
// Routes (Links) for all pages -- See -- src/Routes.js
import Routes from "./Routes"; 
// Components
import Navigation from "./components/Navigation";  
import Footer from "./components/Footer";  
// AppContext holds the user status (signed in - true) or (signed out - false)
// AppContext holds the value of [isAuthenticated] and [useHasAuthenticated]
import { AppContext } from "./libs/contextLib";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function App() {

    // Check if the user is logged in (true) or logged out (false)
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    // Retreiving user information from Cognito
    useEffect(() => {

        // Load Function
        async function onLoad() {

            try { 
                 
                // Setting userHasAuthenticated to "True" in userAppContext()
                userHasAuthenticated(true);

            }
            catch (e) {
                if (e !== 'No current user') {

                    // Error Handling
                    alert(e);
                }
            }

            // Finish signing in the user - stop loading
            setIsAuthenticating(false);
        }

        // Return onLoad function
        onLoad(); 

    }, []);      

    // Important user variables
    const userId = "000000";
    const userEmail = "gradi@fiberabbit.com";
    const userFirstName = "gradi";
    const userLastName = "musa"; 

    // Return UI
    return (
        !isAuthenticating && (  

            // Include Global variables for the entire app in AppContext value
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, userId, userEmail, userFirstName, userLastName }}>

                { /* Navigation - (Navigation.js) - Main navigation - Start */}                    
                <Navigation/>
                { /* Navigation - (Navigation.js) - Main navigation - End */}

                { /* Routes for all pages - (Routes.js) - Start */}
                <Routes />
                { /* Routes for all pages - (Routes.js) - End */}

                { /* Footer - (Footer.js) - Main Footer - Start */}                    
                <Footer/>
                { /* Footer - (Footer.js) - Main Footer - End */} 

            </AppContext.Provider>
            
        )
    );
}