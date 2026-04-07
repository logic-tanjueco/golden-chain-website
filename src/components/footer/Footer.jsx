import React from "react";
import { useEffect, useState } from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const joinButton = document.getElementById("footer-cta-button");

    joinButton.addEventListener("click", () => {
      if (isValidEmail(email)) {
        setMessage(
          <span>
            Joined successfully{" "}
            <i className="fa-solid fa-check" style={{ display: "inline" }}></i>
          </span>
        );

        setMessageStyle({
          color: "#fdd424",
          fontWeight: "bold",
          display: "block",
        });

        setEmail("");

        setTimeout(() => {
          setMessage("");
          setMessageStyle({ display: "none" });
        }, 3000);
      } else {
        setMessage("Invalid email format");

        setMessageStyle({
          color: "red",
          fontWeight: "bold",
          display: "block",
        });
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      joinButton.removeEventListener("click", () => {
        // Remove the event listener
      });
    };
  }, [email]); // Re-run the effect when the email input changes

  // Function to check if the email is in a valid format
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const [messageStyle, setMessageStyle] = useState({ display: "none" });

  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-logo">
          <img src={logo} alt="golden-chain-logo" height="130px" />
        </div>
        <div className="footer-content">
          <div className="footer-contacts">
            <div className="address contact">
              <span>
                <i className="fa-solid fa-location-dot icon"></i>
              </span>
              <p className="inline">
                193 M.H Del Pilar Street,Tinajeros, Malabon City, Philippines
              </p>
            </div>
            <div className="email contact">
              <span>
                <i className="fa-regular fa-envelope icon"></i>
              </span>
              <p className="inline">sales@goldenchain.com.ph</p>
            </div>
            <div className="contact-number contact">
              <span>
                <i className="fa-solid fa-phone icon"></i>
              </span>
              <div className="contact-numbers">
                <p className="inline">(02) 7 005 7506</p>
                <p>+63 917 536 1896</p>
                <p>+63 917 154 4277</p>
                <p>+63 945 231 1191</p>
                <p>+63 915 511 7064</p>
              </div>
            </div>
            
          </div>

          <div className="footer-cta-section">
            <p className="cta-header">Get a <span className="span"> Quote</span></p>
            <p className="cta-sub-header">
              Get exclusive offers, industry insights, and updates. Join the
              journey to maritime excellence!
            </p>
            <div className="input-container">
              <input
                type="email"
                className="cta-input"
                placeholder="Your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="cta-button" id="footer-cta-button">
                Join Us
              </button>
              <div id="join-message" style={messageStyle}>
                {message}
              </div>
            </div>
            <div className="footer-brochure-section">
              <p className="brochure-text">
                Check our&nbsp;
                <a
                  className="brochure-link"
                  href="/GCMES-COMPANY-PROFILE.pdf"
                  download
                >
                  brochure.
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="footer-rights">© 2023 GCMES. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
