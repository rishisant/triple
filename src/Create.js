import React from "react";
import ReactDOM from "react-dom";

import { useNavigate, Link } from "react-router-dom";

import "./App.css";

const Create = () => {
    const navigate = useNavigate();

    const fillPreview = () => {
        const title = document.querySelector(".create-post-input").value;
        const content = document.querySelector(".create-post-input.content").value;
        document.querySelector(".post-title").innerHTML = title;
        document.querySelector(".post-content").innerHTML = content;
        document.querySelector(".post-list.create").style.display = "block";
    }

    return (
        <>
            <div className="h top-header">
                <div className="h top-header-content">
                    <div className="h logo-name">
                        Triple
                    </div>
                </div>
                <div className="h top-header-content">
                    <span id="unselected" onClick={() => navigate("/")}>Posts</span>
                </div>
                <div className="h top-header-content">
                    <span id="selected">Create</span>
                </div>
                <div className="h top-header-content">
                    <span id="unselected" onClick={() => navigate("/About")}>About</span>
                </div>
            </div>

            <div className="main-content create">
                <div className="create-post-wrapper">
                    <div className="triple_holder">
                        <div className="triple t">word1</div>
                        <div className="triple t">word2</div>
                        <div className="triple t">word3</div>
                    </div>

                    <div className="create-post-div">
                        <input className="create-post-input" placeholder="Title"></input>
                        <textarea className="create-post-input content" placeholder="Content"></textarea>
                    </div>
                    
                    <div className="post-list create">
                        <div className="post">
                            <p className="post-title">Post Title</p>
                            <p className="post-content">Post Content</p>
                        </div>
                        {/* More posts go here */}
                    </div>
                </div>
                <div className="sidebar">
                    <button className="sb button">Regenerate Triple</button>
                    <button className="sb button" onClick={fillPreview}>Preview</button>
                    <button className="sb button">Post</button>
                </div>
            </div>

        </>
    )
}

export default Create;