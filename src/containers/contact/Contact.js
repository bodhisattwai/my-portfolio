import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + contactInfo.number}>
              📞 {contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              ✉️ {contactInfo.email_address}
            </a>
            <br />
            <br />
            <div className="contact-address">
              📍 Kolkata, West Bengal, India
            </div>
            <br />
            <br />
            <div className="social-links">
              <a href="http://linkedin.com/in/bodhimalik20" target="_blank" rel="noopener noreferrer">
                🔗 LinkedIn: linkedin.com/in/bodhimalik20
              </a>
              <br />
              <a href="http://bodhisattwai.github.io/personal_portfolio/" target="_blank" rel="noopener noreferrer">
                🌐 Portfolio: bodhisattwai.github.io/personal_portfolio/
              </a>
            </div>
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Contact Illustration"
            src={require("../../assets/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
