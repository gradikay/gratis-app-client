// This file is exported to ---> src/Routes.js
// React required
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import LoaderButton from "../components/LoaderButton";
// Libs
import { useFields } from "../libs/hooksLib";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Register() {

    // Important Variables 
    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFields({
        email: "",
        password: "",
        lastName: "",
        firstName: "",
        confirmPassword: "",
        confirmationCode: ""
    });

    // Validating function : enable submit button when our inputs are filled
    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.lastName.length > 0 &&
            fields.firstName.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    // Validating confirmation form : enable submit button when our input is filled
    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }

    // Handling submitted data
    async function handleSubmit(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);

        try {
            setNewUser(null);
            // Stop loading
            setIsLoading(false); 

        } catch (e) {

            // Error Handling
            alert(e.message);

            // Stop loading
            setIsLoading(false);

        }
    }


    // Handling Verification Code
    async function handleConfirmationSubmit(event) {

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


    // Return UI
    return (

        <div id="Signup" className=" text-white border-bottom border-secondary">

            {
                newUser === null ?

                    // Render form
                    <RenderForm
                        email={fields.email}
                        isLoading={isLoading}
                        password={fields.password}
                        lastName={fields.lastName}
                        validateForm={validateForm}
                        handleSubmit={handleSubmit}
                        firstName={fields.firstName}
                        handleFieldChange={handleFieldChange}
                        confirmPassword={fields.confirmPassword}
                    />

                    : // else

                    // Render confirmation form
                    <RenderConfirmationForm
                        isLoading={isLoading}
                        handleFieldChange={handleFieldChange}
                        confirmationCode={fields.confirmationCode}
                        validateConfirmationForm={validateConfirmationForm}
                        handleConfirmationSubmit={handleConfirmationSubmit}
                    />
            }

        </div>
    );
}

// RenderForm Block - First, let collect users' information
function RenderForm(props) {

    // Important variables
    const {

        handleFieldChange,
        confirmPassword,
        validateForm,
        handleSubmit,
        firstName,
        isLoading,
        lastName,
        password,
        email

    } = props;


    // Return UI
    return (
        <main className="Signup container-fluid py-3">
            <div className="row">

                { /* Header - Start */}
                <header className="col-md-9 text-center border-bottom border-secondary mb-3 mx-auto">

                    { /* Title */}
                    <h1>Gratis</h1>

                    { /* Already a member? - Start */}
                    <p>
                        <span> Already a member? </span>
                        <Link className="text-warning" to="/login">
                            <span> Login here </span>
                            <span role="img" aria-label="login"> &#128514; </span>
                        </Link>
                    </p>
                    { /* Already a member? - End */}

                </header>
                { /* Header - End */}

                { /* Body - Start */}
                <section className="col-md-5 mx-auto">

                    { /* Form - Start */}
                    <form onSubmit={handleSubmit}>

                        { /* First Name - Start */}
                        <div className="form-group w-50 float-left">
                            <label aria-label="given_name">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                required="required"
                                className="form-control"
                                autoComplete="given-name"
                                onChange={handleFieldChange}
                                placeholder="Enter First Name"
                            />
                        </div>
                        { /* First Name - End */}

                        { /* Last Name - Start */}
                        <div className="form-group w-50 float-right">
                            <label aria-label="family_name">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                required="required"
                                className="form-control"
                                autoComplete="family-name"
                                onChange={handleFieldChange}
                                placeholder="Enter Last Name"
                            />
                        </div>
                        { /* Last Name - End */}

                        { /* Email - Start */}
                        <div className="form-group">
                            <label aria-label="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                required="required"
                                autoComplete="email"
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
                                value={password}
                                required="required"
                                className="form-control"
                                autoComplete="new-password"
                                onChange={handleFieldChange}
                                placeholder="Enter Password"
                            />
                            <p><small>* Required numbers, a special character, uppercase letters, & lowercase letters</small></p>
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
                                autoComplete="new-password"
                                onChange={handleFieldChange}
                                placeholder="Confirm Entered Password"
                            />
                        </div>
                        { /* Confirm Password - End */}

                        { /* Submit Button - Start */}
                        <LoaderButton
                            block
                            type="submit"
                            isLoading={isLoading}
                            disabled={!validateForm()}
                            className="btn btn-warning d-block my-3"
                        >
                            Register
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
                { /* Body - End */}

            </div>
        </main>
    );
}

// RenderConfirmationForm Block - Then, we send them a confirmation code and render the input field
function RenderConfirmationForm(props) {

    // Important variables
    const {

        isLoading,
        confirmationCode,
        handleFieldChange,
        handleConfirmationSubmit,
        validateConfirmationForm,

    } = props;


    //Return UI
    return (
        <main className="Signup container-fluid  pt-3 pb-5 vh-100">
            <div className="row">

                { /* Header - Start */}
                <header className="col-md-10 text-center border-bottom border-secondary mb-3 mx-auto">
                    <h1>Gratis</h1> 
                    <p>Please, check your email for a confirmation code! </p>
                </header>
                { /* Header - End */}

                { /* Body - Start */}
                <section className="col-md-5 mx-auto">

                    { /* Form - Start */}
                    <form onSubmit={handleConfirmationSubmit}>

                        { /* Confirmation Code - Start */}
                        <div className="form-group">
                            <label aria-label="congirmationCode">Confirmation Code</label>
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
                        <span><mdall>Check your email for confirmation code.</mdall></span>
                        { /* Confirmation Code - End */}

                        { /* Submit Button - Start */}
                        <LoaderButton
                            block
                            type="submit"
                            isLoading={isLoading}
                            className="btn-warning d-block my-3"
                            disabled={!validateConfirmationForm()}
                        >
                            Verify
                            </LoaderButton>
                        { /* Submit Button - End */}

                    </form>
                    { /* Form - End */}

                    { /* Lower Section - Start */}
                    <section className="p-2 border-top border-secondary">

                        { /* Paragraph - Start */}
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
                        { /* Paragraph - End */}

                    </section>
                    { /* Lower Section - End */}


                </section>
                { /* Body - End */}

            </div>
        </main>
    );
}