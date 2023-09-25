import "./HeroImg2Styles.css"
import React, { Component } from 'react';
import {FaInstagram, FaLinkedin} from "react-icons/fa"
import githublogo from "../assets/GitHub-Logo.png"

class HeroImg2 extends Component {
    constructor(props) {
        super(props);
        this.scrollToElement = this.scrollToElement.bind(this);
        this.targetRef = React.createRef();
    }

    scrollToElement() {
        if (this.targetRef.current) {
            this.targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        const text = "Daha  Fazlası İçin Tıklayın "; // Daha fazla boşluğu ekledim
        const wordsWithSpaces = text.split("").map((word, index) => (
            <span key={index} style={{ cursor: "pointer" }}>{word}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        ));

        return (
            <div className="hero-img">
               
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
              
                <div className="icon-container">
                    <div
                    onClick={this.scrollToElement}
                        style={{
                            color: "white", // Sarı renk
                            opacity: "1.8",
                            position: "absolute",
                            bottom: "240px", // İkonun altından uzaklığı ayarlayın
                            left: "97%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            fontSize: "15px", 
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                         <div className="social-img">
                <a href="https://www.linkedin.com/in/mutlucanozel" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} style={{ color: "#fff"}} />
    </a>
    <a href="https://github.com/mutlucanozel" target="_blank" rel="noopener noreferrer">
        <img src={githublogo} alt="GitHub" style={{ width: "50px", height: "50px"}} />
    </a>
    <a href="https://instagram.com/mutlucanozel?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={50} style={{ color: "#fff"}} />
    </a>
                </div>
                        {wordsWithSpaces}
                    </div>
                   
                </div>
                <div ref={this.targetRef}></div>
            </div>
        );
    }
}

export default HeroImg2;
