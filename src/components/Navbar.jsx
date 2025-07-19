import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";
import logoImage from "../assets/logo.jpg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Close nav on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 880) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
    closeNav();
  };

  return (
    <nav>
      <div className="logo">
        <div className="logo-square">
          <img src={logoImage} alt="BristoHQ Logo" />
        </div>
        <Link to="/" style={{ color: "inherit" }}>
          BristoHQ
        </Link>
      </div>
      <div
        className={`hamburger ${isNavOpen ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services");
          }}
        >
          Services
        </a>
        <a
          href="#software"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("software");
          }}
        >
          Our Software
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
        <Link to="/career" className="btn" onClick={closeNav}>
          Careers
        </Link>
      </div>
    </nav>
  );
}
