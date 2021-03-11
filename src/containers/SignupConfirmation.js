// This file is exported to ---> src/Routes.js
// React required
import React, { useState } from "react";
// Components
import LoaderButton from "../components/LoaderButton";
// Libs
import { useFields } from "../libs/hooksLib"; 
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function SignupConfirmation(props) {

    // Important variables
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFields({
        email: "",
        company: "",
        password: "",
        lastName: "",
        firstName: "",
        confirmPassword: "",
        confirmationCode: ""
    });

    // Validating Confirmation form function : enable submit button when our input is filled
    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }

    // Handling submitted verification code
    async function handleConfirmationSubmit(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);

        try {

            // Redirect to login
            props.history.push("/login");

        } catch (e) {

            // Error Handling
            alert(e.message);

            // Stop loading
            setIsLoading(false);
        }
    }

    // Return UI
    return (
        <main className="Signup container text-white py-3 vh-100">
            <div className="row">

                { /* Header - Start */}
                <header className="col-sm-12 text-center border-bottom mb-3">
                    <h1>Gratis</h1>
                    <p>Thank you for joining Gratis! <span role="img" aria-label="star"> &#129321; </span> </p>
                </header>
                { /* Header - End */}

                { /* Body - Start */}
                <section className="col-sm-4 mx-auto">

                    { /* Form - Start */}
                    <form onSubmit={handleConfirmationSubmit}>

                        { /* Email - Start */}
                        <div className="form-group">
                            <label aria-label="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required="required"
                                value={fields.email}
                                autoComplete="email"
                                className="form-control"
                                placeholder="Enter Email"
                                onChange={handleFieldChange}
                            />
                        </div>
                        { /* Email - End */}

                        { /* Confimation Code - Start */}
                        <div className="form-group">
                            <label aria-label="confirmationCode">Confirmation Code</label>
                            <input
                                type="tel"
                                autoComplete="on"
                                required="required"
                                id="confirmationCode"
                                name="confirmationCode"
                                className="form-control"
                                placeholder="Code - 000000"
                                onChange={handleFieldChange}
                                value={fields.confirmationCode}
                            />
                        </div>
                        <span><small>Check your email for confirmation code.</small></span>
                        { /* Confimation Code - End */}

                        { /* Submit Button - Start */}
                        <LoaderButton
                            block
                            type="submit"
                            className="btn btn-warning d-block my-3"
                            isLoading={isLoading}
                            disabled={!validateConfirmationForm()}
                        >
                            Verify
                            </LoaderButton>
                        { /* Submit Button - End */}

                    </form>
                    { /* Form - End */}

                </section>
                { /* Body - End */}

            </div>
        </main>
    );
}