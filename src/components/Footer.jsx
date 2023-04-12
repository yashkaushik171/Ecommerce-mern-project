import React from "react";
import logo from "../images/organic-store-white-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer">
          <div className="row">
            <div className="col-xl-6 col-md-12 ">
              <img src={logo} className="footer-logo" alt="logo" />
              <p className="footer-text mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                facere sint dolorem sunt necessitatibus, iste quasi consequatur
                error consectetur labore.
              </p>
            </div>
            <div className="col-xl-6 col-md-12 ">
              <div className="row">
                <div className="col  ">
                  <div>
                    <h2 className="text-white fs-1">Quick Links</h2>
                    <ul>
                      <li className="nav-item ">
                        <a className="nav-link footer-link" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          My Account
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Shop
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" mt-5">
                    <h2 className="text-white fs-1">Site Links</h2>
                    <ul>
                      <li className="nav-item ">
                        <a className="nav-link footer-link" href="#">
                          Privacy policy
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link  footer-link" href="#">
                          Privacy policy
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link footer-link" href="#">
                          Privacy policy
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link footer-link" href="#">
                          Privacy policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h2 className="text-white fs-1">Download Our Mobile App</h2>
                    <p className="fs-4  mt-5 grey">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vitae facere sint dolorem sunt necessitatibus, iste quasi
                      consequatur error consectetur labore.
                    </p>
                  </div>
                  <div className="margin ">
                    <h2 className="text-white fs-1">Quick Links</h2>
                    <ul>
                      <li className="nav-item ">
                        <a className="nav-link footer-link " href="#">
                          Know More About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Visit Store
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Lets Connect
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link footer-link" href="#">
                          Locate Stores
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-end">
          <div className="row">
            <div className="col-6 ">
              <p className="text-white fs-4">
                Copyright © 2023 | Organic Store
              </p>
            </div>
            <div className="col-6   ">
              <ul className="d-flex footer-ul">
                <li className="nav-item">
                  <a className="nav-link grey" href="#">
                    <i className="fa-brands fa-facebook-f "></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
