import React from "react";
import NavBar from "./NavBar";
import ProfilePic from "./ProfilePic";
import About from "./About";
import Projects from "./Projects";
import AboutPic from "./AboutPic"

export default function Container() {
    return (
        <div className="container">
            {/* <div><NavBar /></div> */}
            <ProfilePic />
            <AboutPic />
            <div className="aboutProjects">
                <About />
                <Projects />
            </div>
        </div>
    )
}