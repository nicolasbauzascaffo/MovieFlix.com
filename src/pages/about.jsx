import React from "react";
import "../styles/about.css";
import logo from "../images/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import react from "../images/react.png";
import ui from "../images/material.png";

function About() {
  return (
    <div className="about">
      <section className="about-details">
        <h2>
          {" "}
          <img
            style={{
              width: "40px",
              marginRight: "20px",
            }}
            src={logo}
            alt="logo"
          />
          MovieFlix
        </h2>
        <hr />
        <p>
          MovieFlix is a personally developed application where you can explore
          a variety of movies from all genres. It was built using the Movie DB
          API, employing technologies such as React.js and CSS for its
          development.
        </p>
        <hr />
        <h3>The Developer:</h3>
        <section
          style={{
            display: "flex",
            gap: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Link
            style={{ color: "white" }}
            to="https://www.linkedin.com/in/nicol%C3%A1s-bauz%C3%A1-48a8a0244/"
          >
            <LinkedInIcon />
          </Link>
          <Link
            style={{ color: "white" }}
            to="https://github.com/nicolasbauzascaffo?tab=repositories"
          >
            <GitHubIcon />
          </Link>
        </section>
        <p>Nicolás Bauzá - Software Developer</p>
        <hr />
        <section style={{
            display: "flex",
            gap: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}>
          <img src={react} alt="react" />
          <img src={ui} alt="materialui" />
        </section>
      </section>
    </div>
  );
}

export default About;
