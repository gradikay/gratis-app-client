// This file is exported to ---> src/Routes.js
// React required
import React from "react"; 
// CSS
import "../css/Home.css";
// Dummy Data
import { data as dummyPosts } from "../DummyData/data";
// -------------- Application Begins Bellow -------------- \\

// Main Function
export default function Home() {

    // Return UI
    return (
        <main id="Home" className="border-bottom border-secondary mt-2"> 

            {/* Header - Start */}
            <Header />
            {/* Header - End */}

            {/* Posts - Start */}
            <SectionA posts={dummyPosts} /> 
            {/* Posts - End */}

        </main>
        );
}

// Header Block
function Header() {

    // Return UI
    return (

        <header id="Header" className="container-fluid border-bottom border-secondary row m-0" >
            <div className="col-sm-7 mx-auto align-self-center text-center text-white">

                {/* Heading - Start */}
                <h1 className="text-white">
                    <span> Sharing Your </span>
                    <span className="text-warning"> Experience </span> 
                    <span> In A Brand </span>
                    <span className="border border-warning px-2 pb-2 m-2 rounded" style={{ whiteSpace: "nowrap" }}> New Way </span>
                </h1>
                {/* Heading - End */}

                {/* Emojis - Start */}
                <div className="emoji mt-3">
                    <span role="img" aria-label="mad"> &#128545; </span>
                    <span role="img" aria-label="confused"> &#128529; </span>
                    <span role="img" aria-label="laugthing"> &#128514; </span>
                </div>
                {/* Emojis - End */}

                {/* Paragraph */}
                <p className="my-3"> A Free Fiberabbit App </p>

            </div>
        </header>
    );
}

// SectionA Block
function SectionA({ posts, isLoading }) {

    // Return UI
    return (
        <section id="SectionA" className="container-fluid row py-5 m-0">

            {/* Dummy Posts - Start */}
            {
                dummyPosts.map((post, i) => {


                    // Important variables
                    const { image1 } = post.images; 
                    const { postId } = post;

                    // Return UI
                    return (
                        <div className="col-sm-6 col-md-4 col-lg-3 text-white p-2" key={i++}>

                            <a href={`/view/${postId}`} className="text-white link-card">                                 <div className="card border border-secondary p-3 bg-dark">

                                    { /* Image */}
                                    <img src={image1} alt="pic"/>

                                    { /* Body - Start */}
                                    <div className="card-body p-0 pt-3">
                                        <p className="m-0"><b>Gabriela Hearst's Fall Collection Is for the Sophisticated Minimalist</b></p> 
                                        <p className="m-0"> <small className="text-warning"> READ MORE </small> </p>
                                    </div>
                                    { /* Body - End */}

                                </div>
                            </a>

                        </div>
                    );
                })
            }
            {/* Dummy Posts - End */}

        </section>
        );
}