// Export this file to use Loading button while submitting data or user information!
// React required
import React from "react";
// CSS
import "../css/LoaderButton.css";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function LoaderButton({ isLoading, className = "", disabled = false, ...props }) {

    // Return UI
    return (
        <button
            className={`LoaderButton btn ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <i className='fa fa-spinner'></i>}
            {props.children}
        </button>
    );
}
// How to use

//  <LoaderButton
//      type="submit"
//      className="btn-primary"
//      isLoading={isLoading}
//      disabled={!validateForm()}
//  >
//      Publier
//  </LoaderButton>