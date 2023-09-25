import React, { useState, useEffect } from 'react';
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const closeMenu = () => {
        setClick(false);
    };

    // Sayfa yüklendiğinde ve click durumu değiştiğinde event listener'ı dinlemek için useEffect kullanıyoruz.
    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const handleNavLinkClick = () => {
        closeMenu();
    };

    return (
        <div className={color ? "header header-bg" : "header"}>
            <h1>Mutlu Can ÖZEL.</h1>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={handleNavLinkClick}>Ana Sayfa</Link>
                </li>
                <li>
                    <Link to="/project" onClick={handleNavLinkClick}>Portföy</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleNavLinkClick}>Hakkımda</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleNavLinkClick}>İletişim</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
    )
}

export default Navbar;
