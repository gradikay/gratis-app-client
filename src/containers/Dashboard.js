// This file is exported to ---> src/Routes.js
// React required
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Amplify required 
// Getting user status (user login - true or false) from useAppContext
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Dashboard.css";
import { data as dummyPosts } from "../DummyData/data";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Dashboard() {

    // Important variables 
    const { isAuthenticated, userId, userEmail, userFirstName, userLastName} = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    // Return UI
    return (
        <main id="Dashboard" className="border-bottom">

            {/* Header - Start */}
            <Header
                userId={userId}
                userEmail={userEmail}
                posts={dummyPosts}
                userLastName={userLastName} 
                userFirstName={userFirstName}
            /> 
            {/* Header - End */}

            {/* Posts - Start */}
            <Posts posts={dummyPosts} isLoading={isLoading} /> 
            {/* Posts - End */}

        </main>
    );
}

// Header Block
function Header(props) {

    // Important variables 
    const { userId, userEmail, userFirstName, userLastName, posts } = props

    // Return UI
    return (
        <header className="container-fluid border-bottom border-warning py-3 text-white">
            <div className="row justify-content-center align-items-center">

                {/* Title & Add Post Link - Start */}
                <div className="col-sm-3 text-center">

                    {/* Title */}
                    <h1>Dashboard </h1>

                    {/* Add Post Link - Start */}
                    <Link to="/postnew" className="btn btn-warning">

                        {/* Title */}
                        <span>+ ADD POST </span>

                        {/* Icon */}
                        <i className="fa fa-share"></i>

                    </Link> 
                    {/* Add Post Link - End */}

                </div>
                {/* Title & Add Post Link - End */}

                {/* User Id & Post Count - Start */}
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-dark border-secondary">User Id: {userId} </li>
                        <li className="list-group-item bg-dark border-secondary">Post Count: { posts.length} </li>
                    </ul>
                </div>
                {/* User Id & Post Count - End */}

                {/* User Names & Email - Start */}
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-dark border-secondary">First Name: {userFirstName} </li> 
                        <li className="list-group-item bg-dark border-secondary">Last Name: {userLastName} </li>
                        <li className="list-group-item bg-dark border-secondary">Email: {userEmail} </li>
                    </ul>
                </div>
                {/* User Names & Email - End */}

            </div>
        </header>
        );
}

// User Posts Block
function Posts(props) {

    // Important variables 
    const { posts, isLoading } = props

    // Return UI
    return (
        <div className="container row mx-auto py-5">

            {/* Posts - Start 
              * - With - !isLoading && posts, we want to only return data if we have any
              * - If we don't have data and omit "&& posts" we will get an error!
              */}
            {!isLoading && posts ?

                // Display after we have loaded our posts
                posts.map((post, i) => {

                    // Important variables
                    const { image1 } = post.images;
                    const { postId, title, userId } = post;

                    // Return UI
                    return (
                        <div className="col-md-6 col-lg-4 p-3 border border-secondary" key={i++}> 

                            { /* Card - Start */}
                            <div className="card border-0">

                                { /* Image */}
                                <img src={image1} />

                                { /* Overlay - Start */}
                                <div className="card-body p-0 bg-dark text-white">

                                    <p className="p-0 m-0" style={{ fontSize: "1.3rem" }}><b>{title}</b></p>

                                </div>
                                { /* Overlay - End */}

                            </div> 
                            { /* Card - End */}

                            { /* View & Edit Buttons - Start */}
                            <div className="mt-3">

                                { /* View Button - Start */}
                                <a href={`/view/${postId}`} className="btn btn-outline-warning mr-3">

                                    { /* Icon */}
                                    <i className="fa fa-low-vision" role="img" aria-label="view"></i>

                                    { /* Title */}
                                    <span> View </span>

                                </a>
                                { /* View Button - End */}

                                { /* Edit Button - Start */}
                                <a href={`/postedit/${postId}`} className="btn btn-outline-danger">

                                    { /* Icon */}
                                    <i className="fa fa-edit" role="img" aria-label="edit"></i>

                                    { /* Title */}
                                    <span> Edit </span>

                                </a> 
                                { /* Edit Button - End */}

                            </div>
                            { /* View & Edit Buttons - End */}

                        </div>
                    );
                })

                : // else

                // When the posts is loading display
                <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
                    <span className="spinner-border" aria-label="spinner" role="img"></span>
                </div>
            }
            {/* Posts - End */}
            
        </div>
        );
} 