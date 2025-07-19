import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/index.css";
import softwareImage from "../assets/Software-PNG-Transparent-Image.png";

export default function Index() {
  return (
    <>
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-title">Build. Innovate. Succeed.</div>
          <div className="hero-desc">
            Empowering your ideas with world-class <b>software solutions</b> and
            <b>digital services</b>.<br />
            <br />
            <span style={{ color: "#ffffff" }}>BristoHQ</span> unlocks the
            next-level for your business – from web, app, and game development
            to custom platforms and more.
          </div>
          <button
            className="btn"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("services").offsetTop - 50,
                behavior: "smooth",
              })
            }
          >
            Explore Services
          </button>
          <button
            className="btn"
            style={{ background: "var(--accent)", color: "var(--primary)" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("software").offsetTop - 50,
                behavior: "smooth",
              })
            }
          >
            See Our Work
          </button>
        </div>
        <div className="hero-art">
          <img src={softwareImage} alt="Software illustration" />
        </div>
      </section>

      <section id="software">
        <div className="section-title">Our Software</div>
        <div className="card-list">
          <div className="card">
            <div>
              <strong>
                Secure 2FA <span className="status">Coming Soon</span>
              </strong>
              <br />
              <div className="text">
                Next-generation two-factor authentication for web, mobile, and
                enterprise. Currently under development.
              </div>
            </div>
            <button
              className="btn"
              onClick={() =>
                (window.location.href = "https://secure2fa.bristohq.me/")
              }
            >
              More info...
            </button>
          </div>
          {/* <div class="card">
          <div>
            <strong
              >Taskify Pro
              <span
                class="status"
                style="
                  background: var(--success);
                  color: var(--primary);
                  margin-left: 10px;
                "
                >Live</span
              ></strong
            >
            <br />
            <div class="text">
              Easy-to-use project management and collaboration platform for
              remote teams.
            </div>
          </div>
          <button
            class="btn"
            onclick="window.location.href='https://bristohq.me/'"
          >
            More info...
          </button>
        </div> */}

          <div className="card blank-card">
            <div className="blank-content">
              <div className="blank-icon">💡</div>
              <strong>Coming Soon</strong>
              <br />
              <div className="text">
                New exciting project in development. Stay tuned for updates!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-title">Our Services</div>
        <div className="services-list">
          <div className="service">
            <div className="service-title">Web Development</div>
            Custom websites, portals, e-commerce, and more—pixel-perfect and
            performant.
          </div>
          <div className="service">
            <div className="service-title">App Development</div>
            Android & iOS apps built with the latest tech for smooth user
            experiences.
          </div>
          <div className="service">
            <div className="service-title">Custom Software</div>
            Platforms, automation, SaaS, dashboards, and more to scale your
            business.
          </div>
          <div className="service">
            <div className="service-title">Consultancy & Prototyping</div>
            Strategy, UX/UI, product design, technical audits, and MVPs.
          </div>
          <div className="service">
            <div className="service-title">DevOps</div>
            CI/CD pipelines, cloud deployment, and infrastructure management for
            reliable, scalable products.
          </div>
        </div>
      </section>

      <section>
        <div className="about-contact-container">
          <div className="about-section" id="about">
            <div className="section-title">About BristoHQ</div>
            <p>
              Founded by passionate engineers and creators, <b>@BristoHQ</b> is
              dedicated to delivering software that accelerates businesses. Our
              mission: <em>Turn ideas into impactful digital products.</em>
              <br />
              <br />
              Why choose us?
            </p>
            <ul style={{ margin: "18px 0 0 16px" }}>
              <li>
                Led by experienced developers, product managers, and designers.
              </li>
              <li>Customer-first approach with transparent communication.</li>
              <li>Scalable solutions and continuous support post-launch.</li>
            </ul>
          </div>

          <div className="contact-section" id="contact">
            <div className="section-title">Let's Build Together</div>
            <p>
              Ready to bring your vision to life? <br />
              <b>Contact our team</b> for a free consultation, or connect via
              our socials below.
            </p>
            <form
              style={{ marginTop: "18px", maxWidth: "360px" }}
              action="https://formspree.io/f/movdnznn"
              method="POST"
            >
              <input type="text" name="name" required placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea
                required
                placeholder="Project Details / Message"
                style={{ height: "90px" }}
                name="message"
              ></textarea>
              <button className="btn" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

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
            <a href="#home">Home</a>
            <br />
            <a href="#services">Services</a>
            <br />
            <a href="#software">Our Software</a>
            <br />
            <a href="#about">About</a>
            <br />
            <a href="#contact">Contact</a>
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
    </>
  );
}
