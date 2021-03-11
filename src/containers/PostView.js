// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Amplify required
import img1 from "../img/img2.png";
import img2 from "../img/img3.png";
import img3 from "../img/img4.png";
import img4 from "../img/img5.png";
import img5 from "../img/img6.png";
import { data as dummyPosts } from "../DummyData/data";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function PostView() {

    // Important variables 
    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([
        {
            userId: "", 
            postId: "",
            title: "",
            description: "",
            user: {
                id: "",
                firstName: "",
                lastName: "",
            },
            images: {
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                image5: null,
            },
            updatedAt: "",
            createdAt: ""
        }]);

    // Retreiving data from DynamoDB
    useEffect(() => {

        // Cleanup variable
        let unmounted = false; 
        // Load Function
        async function onLoad() {

            // Start loading
            setIsLoading(true);

            try {
                 
                if (!unmounted) {

                    // Setting a single post based on its "Id to our global "post" variable
                    setPost(post);
                }

                // Stop loading
                setIsLoading(false);

            } catch (e) {

                // Error Handling
                alert(e);

                // Stop loading
                setIsLoading(false);
            }

        }

        // Returning Load Function
        onLoad();

        // Avoid data leaks by cleaning up useEffect with "unmounted" variable set to true and remove your post
        return () => {
            unmounted = true; 
            setPost([]);
        };

    // Our clean up happens whenever the post "id" changes or leave the page
    }, [id]); 

    // Return UI
    return (
        <main id="PostView" className="border-bottom border-secondary"> 

            {/* Post - Start 
              * - With - !isLoading && post, we want only to return data if we have any
              * - If we have no data and omit "&& post" we will get an error!
              */}
            {!isLoading ?

                // After the data has loaded display
                <>
                    <Carousel post={dummyPosts[0]} />
                    <Article post={dummyPosts[0]} /> 
                </>

                : // else

                // When the data is loading display
                <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
                    <span className="spinner-border" aria-label="spinner" role="img"></span>
                </div>

            }
            {/* Post - End */}
            
        </main>
        );
}

// Carousel Block
function Carousel({ post }) {

    // Important variables
    const { userId, title } = post;
    // //Date
    const createdAt = new Date(post.createdAt);
    const published = createdAt.toLocaleString();
    const updatedAt = new Date(post.updatedAt);
    const updated = updatedAt.toLocaleString();
    // //Writer
    const { firstName, lastName } = post.user;
    const user = firstName + " " + lastName; 
    // //Images
    const { image1, image2, image3, image4, image5 } = post.images;

    // Return UI
    return (
        <section id="Carousel" className="container-fluid text-white row py-5 m-0">

            {/* Post Title & User Info & dates - Start */}
            <div className="col-lg-12 p-0 border-bottom border-secondary mb-3"> 
                <h1 className="text-capitalize">{ title }</h1>
                <h2 className="text-capitalize text-light"><small>- by {user}</small></h2>
                <p className="text-secondary m-0"><small> + Created: { published } </small></p>
                <p className="text-secondary"><small>+ Updated: { updated } </small></p>
            </div> 
            {/* Post Title & User Info & dates - End */}

            {/* Image Carousel - Start */}
            <div className="col-lg-12 p-0"> 
                
                <div id="slider" className="carousel slide" data-ride="carousel">

                    {/* Indicators - Start */}
                    <ul className="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                        <li data-target="#slider" data-slide-to="3"></li>
                        <li data-target="#slider" data-slide-to="4"></li>
                    </ul>
                    {/* Indicators - End */}
                     
                    {/* The slideshow - Start */} 
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} /> 
                        </div>
                        <div className="carousel-item">
                            <img src={img2} /> 
                        </div>
                        <div className="carousel-item">
                            <img src={img3} /> 
                        </div>
                        <div className="carousel-item">
                            <img src={img4} /> 
                        </div>
                        <div className="carousel-item">
                            <img src={img5} /> 
                        </div>
                    </div>
                    {/* The slideshow - End */}
                                 
                    {/* Left and right controls - Start */}
                    <a className="carousel-control-prev" href="#slider" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#slider" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                    {/* Left and right controls - End */}

                </div>

            </div>
            {/* Image Carousel - End */} 

        </section>
        );
}

// Article Block
function Article({ post }) {

    // Important variables     
    const { description, title } = post;

    // Return UI
    return (
        <article className="container-fluid row border-top border-secondary text-white py-3 mx-auto">

            {/* Post Title & Description - Start */}
            <div className="col-lg-8">

                {/* Post Title */}
                <h1 className="text-capitalize">{title}</h1>

                {/* Description */}
                <pre className="text-white" style={{ whiteSpace: "pre-wrap" }}> {description} </pre> 

            </div>
            {/* Post Title & Description - End */}

        </article>
        );
}
 