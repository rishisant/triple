import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";

import mongoose, { Schema } from 'mongoose';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PostSchema } from "./PostSchema";

import axios from 'axios';


const Home = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then(res => { 
                setPosts(res.data); 
            })
            .catch(err => console.log(err));
    }, []);

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
                        <p className="post-likes">0 Likes</p>
                        <p className="post-date">date</p>
                        <p className="post-title">Post Title</p>
                        <p className="post-content">Post Content</p>
                        <FontAwesomeIcon icon={faHeart} className="post-like-icon" />
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