import React, { Component } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import githublogo from '../assets/GitHub-Logo.png';
import './HeroImg2Styles.css';

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
        const text = "Daha Fazlası İçin Tıklayın ";
        const wordsWithSpaces = text.split("").map((word, index) => (
            <span key={index} style={{ cursor: "pointer" }}>{word}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        ));

        const backgroundStyle = {
            height: '100vh',
            position: 'relative',
        };

        const backgroundImageStyle = {
            content: "''",
            backgroundImage: `url(${this.props.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            opacity: 0.3,
            left: 0,
            zIndex: 0,
        };

        const textOverlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            color: 'white',
        };

        return (
            <div className="hero-img" style={backgroundStyle}>
                <div style={backgroundImageStyle}></div>
                <div className="heading" style={textOverlayStyle}>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
                <div className="icon-container">
                    <div
                        onClick={this.scrollToElement}
                        style={{
                            color: "white",
                            opacity: "1.8",
                            position: "absolute",
                            bottom: "740px",
                            right: "40px",
                            transform: "translateX(50%)",
                            display: "flex",
                            fontSize: "12px",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div className="social-img">
                            <a href="https://www.linkedin.com/in/mutlucanozel" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={50} style={{ color: "#fff" }} />
                            </a>
                            <a href="https://github.com/mutlucanozel" target="_blank" rel="noopener noreferrer">
                                <img src={githublogo} alt="GitHub" style={{ width: "50px", height: "50px" }} />
                            </a>
                            <a href="https://instagram.com/mutlucanozel?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={50} style={{ color: "#fff" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={this.targetRef}></div>
            </div>
        );
    }
}

export default HeroImg2;
