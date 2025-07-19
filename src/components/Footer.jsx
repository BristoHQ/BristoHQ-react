import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";

export default function Footer() {
  const location = useLocation();

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
  };

  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-logo">BristoHQ</div>
          <div>
            Innovating digital solutions.
            <br />
            Built for your success.
          </div>
          <div className="social-links">
            <a
              href="https://x.com/@BristoHQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                width="19"
                height="19"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 3.539a6.461 6.461 0 0 1-1.884.516A3.3 3.3 0 0 0 15.555 2.2a6.555 6.555 0 0 1-2.084.793A3.28 3.28 0 0 0 7.88 6.03a9.325 9.325 0 0 1-6.766-3.429a3.289 3.289 0 0 0 1.018 4.381A3.323 3.323 0 0 1 .64 6.575v.041a3.288 3.288 0 0 0 2.633 3.218a3.203 3.203 0 0 1-.865.115c-.211 0-.417-.021-.616-.06a3.283 3.283 0 0 0 3.065 2.277A6.587 6.587 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045a9.345 9.345 0 0 0 5.045 1.478c6.052 0 9.362-5.01 9.362-9.362c0-.143-.004-.285-.012-.425A6.68 6.68 0 0 0 16 3.539z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/bristohq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="19"
                height="19"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.571 2 2 4.571 2 7.75v8.5C2 19.429 4.571 22 7.75 22h8.5c3.179 0 5.75-2.571 5.75-5.75v-8.5C22 4.571 19.429 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm6.5-2.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/bristohq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="19"
                height="19"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.807-1.75-1.732c0-.926.784-1.732 1.75-1.732s1.75.806 1.75 1.732s-.784 1.732-1.75 1.732zm15.5 12.268h-3v-5.604c0-1.337-.025-3.064-1.867-3.064c-1.868 0-2.154 1.459-2.154 2.968v5.7h-3v-11h2.887v1.507h.041c.403-.765 1.388-1.566 2.857-1.566c3.054 0 3.617 2.008 3.617 4.621v6.438z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <b>Quick Links</b>
          <br />
          <Link to="/">Home</Link>
          <br />
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            Services
          </a>
          <br />
          <a
            href="#software"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("software");
            }}
          >
            Our Software
          </a>
          <br />
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <br />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </div>
        <div className="footer-col">
          <b>Contact</b>
          <br />
          contact@bristohq.me
          <br />
          +91 00000 00000
          <br />
          <span style={{ color: "var(--muted)" }}>Punjab, India</span>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 @BristoHQ. All rights reserved.
      </div>
    </footer>
  );
}
