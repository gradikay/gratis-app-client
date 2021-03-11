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
export default function ResetPassword() {
   
    // Important Variables
    const [isLoading, setIsLoading] = useState(false);
    const [sentRequest, setSentRequest] = useState(null);
    const { userHasAuthenticated } = useAppContext();
    const [fields, handleFieldChange] = useFields({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        company: "",
        confirmPassword: "",
        confirmationCode: ""
    });

    // Validating email function : enable submit button when our inputs are filled
    function validateEmail() {
        return fields.email.length > 0;
    }

    // Validating confirmation form function : enable submit button when our inputs are filled
    function validateConfirmationForm() {
        return fields.password.length > 0 &&
            fields.password === fields.confirmPassword;
    }

    // Handling submitted verification code : This is exectuted first
    async function handleSubmitSendResetCode(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);

        try {

            // Stop loading
            setIsLoading(false);

        } catch (e) {

            // Error Handling
            alert(e.message);

            // Stop loading
            setIsLoading(false);

        }
    }

    // Handling submitted data : new password, email, and confirmation code
    async function handleSubmitResetPassword(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);

        try {
                        
            // Setting userHasAuthenticated to "True" in userAppContext()
            userHasAuthenticated(true);

        } catch (e) {

            // Error Handling
            alert(e.message);

            // Stop loading
            setIsLoading(false);

        }
    }

    // Return UI
    return (
        <div className="Signup ">
            {
                /* Checking if the user has submitted an email address */
                sentRequest === null ?

                // Render Email Field
                <RenderEmailField
                    email={fields.email}
                    isLoading={isLoading}
                    validateEmail={validateEmail}
                    handleFieldChange={handleFieldChange}
                    handleSubmitSendResetCode={handleSubmitSendResetCode}
                />
                    : // else

                 // Render Password Field
                <RenderResetPasswordField
                        password={fields.password}
                        isLoading={isLoading}
                        handleFieldChange={handleFieldChange}
                        confirmPassword={fields.confimPassword}
                        confirmationCode={fields.confirmationCode}
                        validateConfirmationForm={validateConfirmationForm}
                        handleSubmitResetPassword={handleSubmitResetPassword}
                />
            }
        </div>
    );
}


// RenderEmailField Block - First, We get the user email
function RenderEmailField(props) {

    // Important variables
    const {

        email,
        isLoading,
        validateEmail,
        handleFieldChange,
        handleSubmitSendResetCode

    } = props;

    // Return UI
    return (
        <main className="Signup container-fluid text-white py-3 vh-100 border-bottom">
            <div className="row">

                { /* Header - Start */}
                <header className="col-sm-9 text-center border-bottom mb-3 mx-auto">
                    <h1>Gratis</h1>
                    <p>Please, Verify your email bellow!</p>
                </header>
                { /* Header - End */}

                { /* Body - Start */}
                <section className="col-sm-5 mx-auto">

                    { /* Form - Start */}
                    <form onSubmit={handleSubmitSendResetCode}>

                        { /* Email - Start */}
                        <div className="form-group">
                            <label aria-label="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                required="required"
                                className="form-control"
                                onChange={handleFieldChange}
                                placeholder="Please enter your email"
                            />
                        </div>
                        { /* Email - End */}

                        { /* Submit Button - Start */}
                        <LoaderButton
                            block
                            type="submit"
                            isLoading={isLoading}
                            disabled={!validateEmail()}
                            className="btn-warning d-block my-3"
                        >
                            Send
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
                { /* Body - End */}

            </div>
        </main>
    );
}


// RenderResetPasswordField Block - If the user exist, Let them reset the password
function RenderResetPasswordField(props) {

    // Important variables
    const {

        password,
        isLoading,
        confirmPassword,
        confirmationCode,
        handleFieldChange,
        validateConfirmationForm,
        handleSubmitResetPassword

    } = props;

    // Return UI
    return (
        <>
            <main className="Signup container-fluid  pt-3 pb-5 border-bottom border-secondary text-white">
                <div className="row">

                    { /* Header - Start */}
                    <header className="col-sm-9 text-center border-bottom border-secondary mb-3 mx-auto">
                        <h1>Gratis</h1> 
                        <p>Please, Check your email for a confirmation code! <span role="img" aria-label="email"> &#128140; </span></p>
                    </header>
                    { /* Header - End */}

                    { /* Body - Start */}
                    <section className="col-sm-5 mx-auto">

                        { /* Form - Start */}
                        <form onSubmit={handleSubmitResetPassword}>

                            { /* Confirmation Code - Start */}
                            <div className="form-group">
                                <label aria-label="confirmationCode">Confirmation Code</label>
                                <input
                                    type="tel"
                                    required="required"
                                    id="confirmationCode"
                                    name="confirmationCode"
                                    className="form-control"
                                    value={confirmationCode}
                                    placeholder="Code - 000000"
                                    onChange={handleFieldChange}
                                />
                            </div>
                            <span><small>Enter your confirmation code and reset your password!</small></span>
                            { /* Confirmation Code - End */}

                            <hr className="border-secondary" />

                            { /* Password - Start */}
                            <div className="form-group">
                                <label aria-label="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    required="required"
                                    className="form-control"
                                    placeholder="Enter New Password"
                                    onChange={handleFieldChange}
                                />
                            </div>
                            { /* Password - End */}

                            { /* Confirm Password - Start */}
                            <div className="form-group">
                                <label aria-label="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    required="required"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    className="form-control"
                                    placeholder="Confirm New Password"
                                    onChange={handleFieldChange}
                                />
                            </div>
                            { /* Confirm Password - End */}

                            { /* Submit Button - Start */}
                            <LoaderButton
                                block
                                type="submit"
                                isLoading={isLoading}
                                className="btn-warning d-block my-3"
                                disabled={!validateConfirmationForm()}
                            >
                                Update & Login
                                </LoaderButton>
                            { /* Submit Button - End */}

                        </form>
                        { /* Form - End */}

                    </section>
                    { /* Body - End */}

                </div>
            </main>
        </>
    );
}