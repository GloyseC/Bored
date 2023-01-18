import React from "react";
import classes from "./Story.module.css"
import { Link, useLocation } from 'react-router-dom';

const Story = () => {

    const location = useLocation()

    let post = location.state.post

    console.log(post)

    return (
        <>
            {/* <div className="bg anyclassName"> */}
            <div className={`${classes.bg} ${classes.anyclass}`}>
                <div className="container-fluid bg-image hover-zoom">

                    <img src={post.image} className="img-fluid" alt="Responsive image" style={{height: "100vh", width:"100vw"}}/>

                </div>

                <div className={`${classes.posttext}`}>

                    <p className={`${classes.postheading}`}>
                        {post.title}
                    </p>

                    <p>
                        {post.content}
                    </p>

                </div>

            </div>
        </>

    );

};

export default Story

