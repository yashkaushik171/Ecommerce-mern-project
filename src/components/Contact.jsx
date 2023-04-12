import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import leaf from "../images/basil-leaf.png";
import banner from "../images/banner-01.jpg";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="about-heading d-flex align-items-center justify-content-around ">
        <h1>Get In Touch</h1>
      </div>
      <img src={leaf} className="leaf" alt="leaf" width={150} />
      <div className="contact-container about-container d-flex justify-content-around">
        <div className="p-3 fs-2 roboto border">
          <i className="fa-solid fa-phone green mb-4 fs-1 "></i>
          <p>+123 456 7890</p>
          <p>+123 456 7890</p>
        </div>
        <div className="p-3 fs-2 roboto border">
          <i className="fa-regular fa-envelope green mb-4 fs-1"></i>
          <p>info@example.com</p>
          <p>support@example.com</p>
        </div>
        <div className="p-3 fs-2 roboto border">
          <i className="fa-solid fa-location-dot green mb-4 fs-1"></i>
          <p>1569 Ave, New York,</p>
          <p>NY 10028, USA</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
