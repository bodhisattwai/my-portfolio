import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const contactInfo = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;

class ContactComponent extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={this.props.theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${contactInfo["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{ color: theme.text }}>
                  {contactInfo["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {contactInfo["description"]}
                </p>
                <SocialMedia />
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1 className="address-heading-text" style={{ color: theme.text }}>
                  {addressSection["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {addressSection["subtitle"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default ContactComponent;
