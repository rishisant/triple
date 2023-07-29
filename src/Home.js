import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";

import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    });

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="h top-header">
                <div className="h top-header-content">
                    <div className="h logo-name">
                        Triple
                    </div>
                </div>

                <div className="h top-header-content">
                    <span id="selected">Posts</span>
                </div>

                <div className="h top-header-content">
                    <span id="unselected" onClick={() => navigate("./Create")}>Create</span>
                </div>

                <div className="h top-header-content">
                    <span id="unselected" onClick={() => navigate("./About")}>About</span>
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

export default Home;