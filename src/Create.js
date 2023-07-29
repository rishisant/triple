import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

const Create = () => {
    return (
        <>
            <div className="h top-header">
                <div className="h top-header-content">
                    <div className="h logo-name">
                        Triple
                    </div>
                </div>
                <div className="h top-header-content">
                    <span id="unselected">Posts</span>
                </div>
                <div className="h top-header-content">
                    <span id="selected">Create</span>
                </div>
                <div className="h top-header-content">
                    <span id="unselected">About</span>
                </div>
            </div>

            <div className="main-content">
                <div className="post-list">
                    <div className="post">
                        <p className="post-title">Post Title</p>
                        <p className="post-content">Post Content</p>
                    </div>
                    <div className="post">
                        <p className="post-title">Post Title</p>
                        <p className="post-content">Post Content</p>
                    </div>
                    {/* More posts go here */}
                </div>
                <div className="sidebar">
                    <button className="sb button">Sort by Popularity</button>
                    <button className="sb button">Sort by Newest</button>
                </div>
            </div>

        </>
    )
}

export default Create;