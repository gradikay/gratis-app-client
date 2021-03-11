// This file is exported to --->  src/App.js
// React required
import React from "react";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Footer() {

    // Return UI
    return ( 
        <footer id="Footer" className="container-fluid bg-dark">

            <SectionA />  

        </footer> 
    );
}

// SectionA Block
function SectionA() {

    // Return UI
    return (
        <div className="row p-2">
            <div className="col text-center">
                <p className="m-0 text-secondary">2021 Fiberabbit. All Rights Reserved</p>
            </div>
        </div>
        );
}