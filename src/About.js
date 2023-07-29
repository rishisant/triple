import React from "react";
import ReactDOM from "react-dom";

import { useNavigate, Link } from "react-router-dom";

import "./App.css";

const string_titles = [
    "About Triple",
    "About the Creator",
    "About the Inspiration"
]

const string_contents = [
    "Welcome to Triple, a platform for creative expression, endless discovery, and impeccable writing. You get three words, which should form the foundation of your blog post. Be creative, but write well!<br><br>You can write about absolutely anything. Whether it's an opinion piece, a story from the past, or a dream for the future, express yourself however you see fit.<br><br>Triple champions free speech, championed responsibly. Say what you want to say, but be sophisticated about it.<br><br>So step into the world of Triple, exploring the expansive horizons of your mind, sharing it with fellow intellectuals, guided by the playful whims of three simple words.",
    "My name is Rishi. I've had an idea like this for a while, and granted, there are plenty of blog sites, but I wanted to give this one a different feel. Anyways, back to me. I like basketball, making music, reading, and writing. I also like to code, so I guess there's that.<br><br>I feel lost in a world of endless consumption. Nowadays, everywhere you go somebody's neck is craned down, staring at a screen. I want people to understand the deficits of a highly-technological society.<br><br>Triple is more-so an intellectual endeavor. I'd like to gather highly intelligent thinkers and have them express their thoughts freely, without the constraints of judgement or censorship.",
    "When I think of the perfect number, I think of the three. Think of how many stories utilize the three: The Three Musketeers, The Three Pigs, or even the Holy Trinity.<br><br>This innate power of the three contains the secrets to the universe, but in a less serious context, I just think it's a cool number. And guess what, at Triple, you get three words. See what I mean?<br><br>Back to the inspiration part, though. I believe heavily in free speech and anti-censorship, and I think it is a net positive for society overall. Granted, a lot of garbage can come out of it, but I'm a firm believer that the good outweighs the bad.<br><br>I want to gather a group of intellectuals, and coupling with a simple, easy-to-use interface, I believe Triple can become an incredible community of thinkers."
]

const About = () => {
    const navigate = useNavigate();

    const renderAbout = (index) => () => {
        document.getElementsByClassName("about-header")[0].innerHTML = string_titles[index];
        document.getElementsByClassName("about-text")[0].innerHTML = string_contents[index];
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
                    <span id="unselected" onClick={() => navigate("/Create")}>Create</span>
                </div>
                <div className="h top-header-content">
                    <span id="selected">About</span>
                </div>
            </div>

            <div className="main-content about">
                <div className="about-content">
                    <div className="about-header">
                        About
                    </div>
                    <div className="about-text">
                        Click on any of the buttons to learn more about why I'm doing this in the first place.
                    </div>
                </div>

                <div className="sidebar">
                    <button className="sb button" onClick={renderAbout(0)}>About Triple</button>
                    <button className="sb button" onClick={renderAbout(1)}>About the Creator</button>
                    <button className="sb button" onClick={renderAbout(2)}>About the Inspiration</button>
                </div>
                
            </div>

        </>
    )
}

export default About;