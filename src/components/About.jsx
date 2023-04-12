import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import leaf from "../images/basil-leaf.png";
import banner from "../images/banner-01.jpg";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-heading d-flex align-items-center justify-content-around ">
        <h1>About Us</h1>
      </div>
      <img src={leaf} className="leaf" alt="leaf" width={150} />
      <div className="about-container">
        <div className="about-content px-3">
          <h1>We Are Your Favourite Store.</h1>
          <p className="fs-3 roboto px-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur magni rerum, eligendi in omnis deserunt qui expedita eos
            veritatis nam laudantium aperiam minima nemo fugit illo deleniti
            exercitationem recusandae ipsum.
          </p>
        </div>
        <div className="about-image">
          <img src={banner} alt="banner" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
