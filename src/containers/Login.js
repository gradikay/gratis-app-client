// This file is exported to ---> src/Routes.js
// React required
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import LoaderButton from "../components/LoaderButton";
// Libs
import { useFields } from "../libs/hooksLib";
// Getting user status (user login - true or false) from useAppContext
import { useAppContext } from "../libs/contextLib";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Login() {

    // Important Variables
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFields({
        email: "",
        password: ""
    });

    // Validating function : enable submit button when our inputs are filled
    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    // Handling submitted data
    async function handleSubmit(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);

        try { 

            // Reload the application
            window.location.reload();

        } catch (e) {

             // Error Handling
            alert(e.message);

            // Stop loading
            setIsLoading(false);
        }
    }

    // Return UI
    return (
        <main className="Signup container-fluid border-bottom border-secondary text-white py-3 vh-100">
            <div className="row">

                { /* Header - Start */}
                <header className="col-sm-9 text-center border-bottom border-secondary mb-3 mx-auto">

                    { /* Title */}
                    <h1> Gratis </h1> 

                    { /* Not a member? - Start */}
                    <p> 
                        <span> Not a Member? </span>
                        <Link className="text-warning" to="/register">                            
                            <span> Signup here </span>
                            <span role="img" aria-label="register"> &#129488; </span>
                        </Link>
                    </p>
                    { /* Not a member? - End */}

                </header>
                { /* Header - End */}

                { /* Form & Lower Section - Start */}
                <section className="col-sm-5 mx-auto">

                    { /* Form - Start */}
                    <form onSubmit={handleSubmit} autoComplete="on">

                        { /* Email - Start */}
                        <div className="form-group">
                            <label aria-label="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required="required"
                                autoComplete="email"
                                value={fields.email}
                                className="form-control"
                                placeholder="Enter Email"
                                onChange={handleFieldChange}
                            />
                        </div>
                        { /* Email - End */}

                        { /* Password - Start */}
                        <div className="form-group">
                            <label aria-label="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                required="required"
                                value={fields.password}
                                className="form-control"
                                onChange={handleFieldChange}
                                placeholder="Enter Password"
                                autoComplete="current-password"
                            />                            
                        </div>
                        { /* Password - End */}

                        { /* Submit Button - Start */}
                        <LoaderButton
                            block
                            type="submit"
                            isLoading={isLoading}
                            disabled={!validateForm()}
                            className="btn btn-warning d-block my-3"
                        >
                            Login
                        </LoaderButton>
                        { /* Submit Button - End */}

                    </form>
                    { /* Form - End */}

                    { /* Lower Section - Start */}
                    <section className="p-2 border-top border-secondary">

                        {/* Paragraph - Start */}
                        <p className="border-bottom border-secondary pb-3">
                            <small>

                                <span> By signing in, you agree to Gratis's </span>

                                {/* Terms - Start */}
                                <a className="text-warning" href="#n"> Terms of Service
                                    <span role="img" aria-label="confused"> &#128534; </span>
                                </a>
                                {/* Terms - End */}

                                <span> and </span>

                                {/* Privacy Notice - Start */}
                                <a className="text-warning" href="#n"> Privacy Notice
                                    <span role="img" aria-label="zipit"> &#129296; </span>
                                </a>
                                {/* Privacy Notice - End */}

                                <span>.</span>

                            </small>
                        </p>
                        {/* Paragraph - End */}

                        {/* Forget Password - Start */}
                        <Link className="text-warning" to="/reset"> 
                            <span> Forgot password? </span>
                            <span role="img" aria-label="afraid"> &#128561; </span>
                        </Link>
                        {/* Forget Password - End */}

                        <span> | </span>

                        {/* Verification Code - Start */}
                        <span> ( </span>                        
                        <Link className="text-warning" to="/confirmation"> 
                            <span> I have a verification code </span>
                            <span role="img" aria-label="tongue out"> &#128540; </span>
                        </Link> 
                        <span> ) </span>  
                        {/* Verification Code - End */}
                        
                    </section>
                    { /* Lower Section - End */}

                </section>
                { /* Form & Lower Section - End */}

            </div>
        </main>
    );
}