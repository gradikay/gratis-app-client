// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";  
import img1 from "../img/img2.png";
import img2 from "../img/img3.png";
import img3 from "../img/img4.png";
import img4 from "../img/img5.png";
import img5 from "../img/img6.png";
// Components
import LoaderButton from "../components/LoaderButton";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function PostEdit() {

    // Important variables
    const { id } = useParams();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Post Description
    const [title, setTitle ] = useState("");
    const [description, setDescription] = useState("");
    // User
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState("");
    // display the image
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    // Retreiving data from DynamoDB
    useEffect(() => {

        // Cleanup variable
        let unmounted = false;

        // Load Function
        async function onLoad() { 

            try {

                if (!unmounted) { 

                    // Setting all local variables to our global variables
                    // Post Description
                    setTitle("The muse on the river");
                    setDescription("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
                    // User
                    setUserId("00000");
                    setUser("Gradi Musa");
                    // Images
                    setImage1(null);
                    setImage2(null);
                    setImage3(null);
                    setImage4(null);
                    setImage5(null);
                } 

            } catch (e) {

                if (!unmounted) {

                    // Error Handling
                    alert(e);
                }
                 
            }
        }

        // Return Load function
        onLoad();

        // Avoid data leaks by cleaning up useEffect with "unmounted" variable set to true
        return () => {
            unmounted = true; 
        };

    // Our clean up happens whenever the post "id" changes or leave the page
    }, [id]);

    // Validating function : enable submit button when our input is filled
    function validateForm() {
        return (
            description.length > 0
        );
    }

// ------------ Update Post - Start ----------- \\

    // Handling Submitted Form
    async function handleSubmit(event) {

        event.preventDefault();

        // Start loading
        setIsLoading(true);

        try {
             

            // Redirect us to dashboard after update is complete
            window.location.href = `/dashboard`;

        } catch (e) {

            // Error Handling
            alert(e);

            // Stop loading
            setIsLoading(false);
        }
    } 

// ------------ Update Post - End ------------- \\

// ------------ Delete Post - Start ----------- \\

    // Handling Delete Post
    async function handleDelete(event) {

        event.preventDefault();

        // Confirmation Alert 
        const confirmed = window.confirm(
            "Are you sure you want to delete this post?"
        );

        // If User click "ok" on the - alert window - continue with deleting
        if (!confirmed) {
            return;
        }

         // Start loading
        setIsDeleting(true);

        try {
             
            // Redirect us to dashboard after delete is complete
            window.location.href = `/dashboard`;

        } catch (e) {

            // Error Handling
            alert(e);

             // Stop loading
            setIsDeleting(false);
        }
    } 
     

// ------------ Delete Post - End ------------- \\

    // Returing UI
    return (
        <main id="PostEdit" className="container-fluid border-bottom border-secondary pb-5 p-0">

            { /* Header - block & props - Start */}
            <Header id={id}/>
            { /* Header - block & props - End */}

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

                        { /* Images - LEFT SIDE - Start */} 
                        <Images 
                            userId={userId}
                        /> 
                        { /* Images - LEFT SIDE - End */}

                        { /* Post Info - RIGHT SIDE - Start */}
                        <PostInfo
                            isLoading={isLoading}
                            isDeleting={isDeleting}
                            handleSubmit={handleSubmit}
                            handleDelete={handleDelete}
                            validateForm={validateForm}
                            // Post Description
                            title={title} setTitle={setTitle}
                            description={description} setDescription={setDescription}
                            // User
                            user={user}
                        />
                        { /* Post Info - RIGHT SIDE - End */}

                    </div>
                </div>
                { /* Images & Post info - End */}

                { /* Preview - Start */}
                <div className="tab-pane container fade" id="preview">
                     
                    <Preview
                        user={user}
                        title={title}
                        userId={userId} 
                        description={description}
                    />

                </div>
                { /* Preview - End */}

            </div>
            { /* Images & Post info & preview - End */}

        </main>
    );
}

// Header Block
function Header({id}) {

    // Return UI
    return (
        <header className="container-fluid border-bottom border-warning text-white py-3 mb-3 text-center">
            <h1>Edit Post</h1>
            <Link to="/dashboard" className="btn btn-warning"><i className="fa fa-reply"></i> Dashboard</Link>
            <p className="text-secondary p-2 m-2">Id: <small>{id}</small></p>
        </header>
    );
}

// Images Block
function Images(props) {

    // Return UI
    return (
        <div className="col-sm-4">
            <div className="row">

                { /* Image1 - Start */}
                <div className="col-sm-12 image-container my-3 p-0"> 

                    <div className="card">
                        <img src={img1} /> 
                    </div>
                
                </div>
                { /* Image1 - End */}
              
                { /* Image2 - Start */}
                <div className="col-sm-6 mb-3 p-0">

                    <div className="card">
                        <img src={img2} />
                    </div>

                </div>
                { /* Image2 - End */}
             
                { /* Image3 - Start */}
                <div className="col-sm-6 mb-3 p-0">

                    <div className="card">
                        <img src={img3} />
                    </div>

                </div>
                { /* Image3 - End */}
              
                { /* Image4 - Start */}
                <div className="col-sm-6 mb-3 p-0">

                    <div className="card">
                        <img src={img4} />
                    </div>

                </div>
                { /* Image4 - End */}
             
                { /* Image5 - Start */}
                <div className="col-sm-6 mb-3 p-0">

                    <div className="card">
                        <img src={img5} />
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
        handleDelete,
        handleSubmit,
        isDeleting,
        validateForm,
        // Post Description
        title, setTitle,
        description, setDescription,
        // User
        user,

    } = props;

    // Return UI
    return (
        <div className="col-sm-7 mt-3 text-white">

            { /* form - Start */} 
            <form onSubmit={handleSubmit} id="form">

                { /* User - Start */}
                <div className="form-group">
                    <label htmlFor="user">User Information</label>
                    <input
                        form="form"
                        type="text"
                        disabled="disabled"
                        className="form-control"
                        value={user}
                    />
                    { /* Helper */}
                    <small className="text-secondary">Your name can't be changed</small>
                </div>
                    { /* User - End */} 

                { /* Post Title - Start */}
                <div className="form-group">
                    <label htmlFor="comment" className="color-red">Title</label>
                    <textarea
                        rows="1"
                        required="required"
                        id="title"
                        name="title"
                        value={title}
                        className="form-control"
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title"
                    ></textarea>
                </div>
                { /* Post Title - End */}

                { /* Post Description - Start */}
                <div className="form-group">
                    <label htmlFor="comment" className="color-red">description</label>
                    <textarea
                        rows="4"
                        required="required"
                        id="description"
                        name="description"
                        value={description}
                        className="form-control"
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Some description"
                    ></textarea>
                </div>
                { /* Post Description - End */}

                { /* Submit Button - Start */}
                <LoaderButton
                    type="submit"
                    isLoading={isLoading}
                    className="btn btn-outline-warning"
                    disabled={!validateForm()}
                >
                    Update
                </LoaderButton>
                { /* Submit Button - End */}

                {/* Delete Button - Start */}
                <LoaderButton
                    onClick={handleDelete}
                    isLoading={isDeleting}
                    className="btn btn-outline-danger ml-3"
                >
                    Delete
                </LoaderButton>
                {/* Delete Button - End */}

            </form> 
            { /* form - End */}

        </div>
    );
}

// Preview Block
function Preview(props) {

    // Important variables
    const {

        user,
        title,
        description,

    } = props;

    // Return UI
    return (
        <div className="col-sm border text-white border-secondary mt-3">

            { /* Image & Post Description - Start */}
            <section className="row py-3">

                {/* Post Title - Start */}
                <div className="col-lg-12 border-bottom border-secondary mb-3">
                    <h1 className="text-capitalize">{title}</h1>
                    <h2 className="text-capitalize text-secondary"> <small> by {user}</small></h2>
                </div>
                {/* Post Title - End */}

                { /* Image - Start */}
                <div className="col-md-12">

                    <img src={img1} /> 

                </div>
                { /* Image - End */}

            </section>
            { /* Image & Post Description - End */}

            { /* description - Start */}
            <article className="row border-top border-secondary py-3">

                { /* description */}
                <div className="col-md-12 p-3">
                    <pre className="text-white" style={{ whiteSpace: "pre-wrap" }}>{description}</pre>
                </div>

                { /* Images */}
                <div className="col-md-3 mb-2">
                    <img src={img1} />
                </div>
                <div className="col-md-3 mb-2">
                    <img src={img2} />
                </div>
                <div className="col-md-3 mb-2">
                    <img src={img3} />
                </div>
                <div className="col-md-3 mb-2">
                    <img src={img4} />
                </div>
                <div className="col-md-3">
                    <img src={img5} />
                </div>

            </article>
            { /* description - End */}

        </div>
    );
}