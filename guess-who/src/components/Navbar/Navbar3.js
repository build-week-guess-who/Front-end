import React from "react";
import { Link } from "react-router-dom";
import "./navbarThree.scss";
import { Card, Button, Label, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


function NavbarThree({ highScore }) {
    return (
        <div className="navbarAll">
            <div className="leftNavbar">
                <img src="./birdLogo.jpeg" alt="logo" />
                <Link to="guesswho"><h1 href="/guesswho" className="home-button">Home</h1></Link>
            </div>
            <div>
                <h1 lassName="score">Score: {highScore}</h1>
            </div>
            <div className="rightNavbar">
                <img src="./heart.png" className="heart" id="1"></img>
                <img src="./heart.png" className="heart" id="2"></img>
                <img src="./heart.png" className="heart" id="3"></img>
            </div>
        </div>
    )
}

export default NavbarThree;
