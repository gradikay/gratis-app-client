// This file is exported to ---> src/Routes.js
// React required
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; 
// Components 
import LoaderButton from "../components/LoaderButton"; 
import { useFields } from "../libs/hooksLib";
import { useAppContext } from "../libs/contextLib";
// Alternate Image
import altImg from "../img/img10.jpg";

// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function PostNew() {

    // Important variables
    const { userFirstName, userLastName } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFields({
        // Post Information
        title: "", 
        description: "", 
        // User Information
        userFirstName: "",
        userLastName: "", 
    });

    // display the images
    const [image1, setImage1] = useState(null); 
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    // hold images from input
    const file1 = useRef(null);
    const file2 = useRef(null);
    const file3 = useRef(null);
    const file4 = useRef(null);
    const file5 = useRef(null);     

    // Validating function : enable submit button when our input is filled
    function validateForm() {
        return (
            fields.description.length > 0
        );
    }

    // Handling Uploaded Images
    function handleImage1(event) {
        // Getting the current file
        file1.current = event.target.files[0];
        // Setting up file to be seen image1
        setImage1(file1.current != null ? URL.createObjectURL(file1.current) : null); 
    }
    function handleImage2(event) {
        // Getting the current file 
        file2.current = event.target.files[0];
        // Setting up file to be seen image2 
        setImage2(file2.current != null ? URL.createObjectURL(file2.current) : null);
    }
    function handleImage3(event) {
        // Getting the current file 
        file3.current = event.target.files[0];
        // Setting up file to be seen image3
        setImage3(file3.current != null ? URL.createObjectURL(file3.current) : null);
    }
    function handleImage4(event) {
        // Getting the current file 
        file4.current = event.target.files[0];
        // Setting up file to be seen image4 
        setImage4(file4.current != null ? URL.createObjectURL(file4.current) : null);
    }
    function handleImage5(event) {
        // Getting the current file 
        file5.current = event.target.files[0];
        // Setting up file to be seen image5 
        setImage5(file5.current != null ? URL.createObjectURL(file5.current) : null);
    }

// ------------ Create Post - Start ----------- \\

    // Handling Submitted Form
    async function handleSubmit(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);
        
        try {

            // Redirect us to dashboard after data have been submitted
            window.location.href = `/dashboard`;

        } catch (e) {

            // Error Handling
            alert(e);

            // Stop loading
            setIsLoading(false);
        }
    }

// ------------ Create Post - End ------------- \\

    // Returing UI
    return ( 
        <main id="PostNew" className="container-fluid border-bottom border-secondary pb-5 p-0"> 

            { /* Header - block - Start */ }
            <Header />
            { /* Header - block - End */ } 

            { /* Tabs - Start */}
            <div className="container mx-auto py-3 border-bottom border-secondary">

                <ul className="nav nav-pills">

                    { /* Post Tabs */}
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#post">Post</a>
                    </li>

                    { /* Preview Tabs */}
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#preview">Preview</a>
                    </li>

                </ul>

            </div>
            { /* Tabs - End */}

            { /* Images & Post info & Preview - Start */}
            <div className="tab-content ">

                { /* Images & Post info - Start */}
                <div className="tab-pane container mx-auto p-0 active" id="post">
                    <div className="row">

                        { /* Images - block & props - Start */ } 
                        <Images
                            image1={image1}
                            image2={image2}
                            image3={image3}
                            image4={image4}
                            image5={image5}
                            handleImage1={handleImage1}
                            handleImage2={handleImage2}
                            handleImage3={handleImage3}
                            handleImage4={handleImage4}
                            handleImage5={handleImage5}
                        />
                        { /* Images - block & props - End */}

                        { /* Post Info - Start */}
                        <PostInfo 
                            isLoading={isLoading}
                            handleSubmit={handleSubmit}
                            validateForm={validateForm}
                            handleFieldChange={handleFieldChange} 
                            // Post Information
                            title={fields.title} 
                            description={fields.description}  
                            // User Information
                            user={userFirstName.toLowerCase() + " " + userLastName.toLowerCase()} 
                        />
                        { /* Post Info - End */}

                    </div>
                </div>
                { /* Images & Post info - End */}

                { /* Preview - Start */}
                <div className="tab-pane container fade" id="preview">
                     
                    <Preview
                        image1={image1}
                        image2={image2}
                        image3={image3}
                        image4={image4}
                        image5={image5}
                        title={fields.title} 
                        description={fields.description}
                        user={userFirstName.toLowerCase() + " " + userLastName.toLowerCase()}  
                    /> 

                </div>
                { /* Preview - End */}

            </div>
            { /* Images & Post info & preview - End */}            

        </main> 
    );
}

// Header Block
function Header() {

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 mb-3 text-center border-warning text-white">
            <h1>Add New Post</h1>
            <Link to="/dashboard" className="btn btn-warning"><i className="fa fa-reply"></i> Dashboard</Link>
        </header>
    );
}

// Images Block
function Images(props) {

    // Important variables
    const {

        image1,
        image2,
        image3,
        image4,
        image5,
        handleImage1,
        handleImage2,
        handleImage3,
        handleImage4,
        handleImage5,

    } = props;

    // Return UI
    return (
        <div className="col-sm-5">
            <div className="row">

                { /* Image1 - Start */}
                <div className="col-sm-12 image-container my-3 p-0">
                    <div className="card">

                        { /* Image upload 1 */}
                        <img alt="pic" src={image1 === null ? altImg : image1} className="align-self-center" />

                        { /* Body */}
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="file1">Image 1</label>

                                { /* Input Field */}
                                <input
                                    required="required"
                                    form="form"
                                    accept=".png, .jpg, .jpeg"
                                    type="file"
                                    name="file1"
                                    id="file1"
                                    onChange={handleImage1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                { /* Image1 - End */}

                { /* Image2 - Start */}
                <div className="col-sm-6 image-container mb-3 p-0">
                 
                    <div className="card">

                        { /* Image upload 2 */}
                        <img alt="pic" src={image2 === null ? altImg : image2} className="align-self-center w-100" />

                        { /* Body */}
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="file2">Image 2</label>
                                <input
                                    id="file2"
                                    type="file"
                                    name="file2"
                                    form="form"
                                    required="required"
                                    onChange={handleImage2}
                                    accept=".png, .jpg, .jpeg"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                { /* Image2 - End */}

                { /* Image3 - Start */}
                <div className="col-sm-6 image-container mb-3 p-0">
                    { /* CARD */}
                    <div className="card">

                        { /* Image upload 3 */}
                        <img alt="pic" src={image3 === null ? altImg : image3} className="align-self-center w-100" />

                        { /* Body */}
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="file3">Image 3</label>
                                <input
                                    id="file3"
                                    form="form"
                                    type="file"
                                    name="file3"
                                    required="required"
                                    onChange={handleImage3}
                                    accept=".png, .jpg, .jpeg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                { /* Image3 - End */}

                { /* Image4 - Start */}
                <div className="col-sm-6 image-container mb-3 p-0">

                    <div className="card">

                        { /* Image upload 4 */}
                        <img alt="pic" src={image4 === null ? altImg : image4} className="align-self-center w-100" />

                        { /* Body */}
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="file4">Image 4</label>
                                <input
                                    id="file4"
                                    form="form"
                                    type="file"
                                    name="file4"
                                    required="required"
                                    onChange={handleImage4}
                                    accept=".png, .jpg, .jpeg"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                { /* Image4 - End */}

                { /* Image5 - Start */}
                <div className="col-sm-6 image-container mb-3 p-0"> 

                    <div className="card">

                        { /* Image upload 5 */}
                        <img alt="pic" src={image5 === null ? altImg : image5} className="align-self-center w-100" />

                        { /* Body */}
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="file5">Image 5</label>
                                <input
                                    id="file5"
                                    form="form"
                                    type="file"
                                    name="file5"
                                    required="required"
                                    onChange={handleImage5}
                                    accept=".png, .jpg, .jpeg"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                { /* Image5 - End */}

            </div>
        </div>
        );
}

// Post Information Block
function PostInfo(props) {

    // Important variables
    const {
         
        isLoading,
        handleSubmit,
        validateForm,
        handleFieldChange,
        title, 
        description,
        // User Information
        user,  

    } = props;

    // Return UI
    return ( 
        <div className="col-sm-7 mt-3 text-white"> 

            { /* form - Start */} 
            <form onSubmit={handleSubmit} id="form">

                { /* Heading */ }
                <h3 className="mb-4">Publisher</h3>

                { /* User - Start */}
                <div className="form-group">
                    <label htmlFor="user">User Information</label>
                    <input
                        form="form"
                        type="text"
                        value={user}
                        disabled="disabled"
                        className="form-control"
                    />

                    { /* Helper */}
                    <small className="text-secondary">Your name can't be changed</small>

                </div>
                { /* User - End */} 

                { /* Post Title - Start */}                        
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <textarea
                        rows="1"
                        id="title"
                        name="title"
                        value={title}
                        required="required"
                        placeholder="Title"
                        className="form-control"
                        onChange={handleFieldChange}
                    ></textarea>
                </div>  
                { /* Post Title - End */} 

                { /* Post Description - Start */}                        
                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <textarea
                        rows="3"
                        id="description"
                        name="description"
                        required="required"
                        value={description}
                        className="form-control"
                        onChange={handleFieldChange}
                        placeholder="Some description"
                    ></textarea>
                </div>  
                { /* Post Description - End */} 
                    
                { /* Submit Button - Start */}
                <LoaderButton
                    type="submit"
                    isLoading={isLoading}
                    className="btn btn-warning"
                    disabled={!validateForm()}
                >
                    Publish
                </LoaderButton>
                { /* Submit Button - End */}

            </form>            
            { /* form - End */}

        </div> 
        );
}

// Preview Block
function Preview(props) {

    // Important variables
    const {

        image1, 
        image2, 
        image3, 
        image4, 
        image5, 
        description,
        title,
        user,

    } = props;

    // Return UI
    return (
        <div className="col-sm border text-white border-secondary mt-3"> 

            { /* Image and Post Description - Start */}
            <section className="row py-3">

                {/* Post Title - Start */}
                <div className="col-lg-12 border-bottom border-secondary mb-3">
                    <h1 className="text-capitalize">{title}</h1>
                    <h2 className="text-capitalize text-secondary"> <small> by {user}</small></h2>
                </div>
                {/* Post Title - End */}

                { /* Image - Start */}
                <div className="col-md-12">

                    <img
                        alt="pic"
                        src={image1 === null ? altImg : image1}
                        style={{ minHeight: "250px" }}
                        className="w-100 bg-dark"
                    /> 

                </div>
                { /* Image - End */} 

            </section>
            { /* Image and Post Description - End */} 

            { /* description - Start */}
            <article className="row border-top border-secondary py-3"> 

                { /* description */}
                <div className="col-md-12 p-3">
                    <pre className="text-white" style={{ whiteSpace: "pre-wrap" }}>{description}</pre>
                </div>

                { /* Images */}
                <div className="col-md-3 mb-2">
                    <img alt="pic" src={image1 === null ? altImg : image1} className="w-100 bg-dark" />
                </div>
                <div className="col-md-3 mb-2">
                    <img alt="pic" src={image2 === null ? altImg : image2} className="w-100 bg-dark" />
                </div>
                <div className="col-md-3 mb-2">
                    <img alt="pic" src={image3 === null ? altImg : image3} className="w-100 bg-dark" />
                </div>
                <div className="col-md-3 mb-2">
                    <img alt="pic" src={image4 === null ? altImg : image4} className="w-100 bg-dark" />
                </div>
                <div className="col-md-3">
                    <img alt="pic" src={image5 === null ? altImg : image5} className="w-100 bg-dark" />
                </div>
                 
            </article>
            { /* description - End */}

        </div>
        );
}