import React from "react";
import Someproducts from "./Someproducts";
import Customerreview from "./Customerreview";
import heroImg from "../images/organic-products-hero.png";
import smallLeaf from "../images/logo-leaf-new.png";
import basilLeaf from "../images/basil-leaf.png";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* ****************************************************************************************** */}
      {/* ********************************** hero section container ********************************** */}
      {/* ****************************************************************************************** */}
      <div className="hero-part-container">
        <div className="hero-img">
          <img src={heroImg} alt="heroimg" />
        </div>
        <div className="hero-content">
          <img src={smallLeaf} alt="logoleaf" />
          <h4>Best Quality Products</h4>
          <h1>Join The Organic Movement!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            doloremque!
          </p>
          <Link to="/shop">
            <button className="shop-now-btn">
              <i className="me-3 fs-3 text-white fa-solid fa-cart-shopping"></i>
              <p className="text-uppercase fs-4  text-white">shop now</p>
            </button>
          </Link>
        </div>
      </div>

      {/* ****************************************************************************************** */}
      {/* ********************************** features banner *************************************** */}
      {/* ****************************************************************************************** */}

      <div className="features">
        <div className="container d-flex justify-content-evenly">
          <div className="row">
            <div className="col-xl-auto col-md-6 d-flex features-item">
              <i className="fa-solid fa-truck me-3 green fs-1"></i>
              <div className="features-content">
                <h2 className=" text-capitalize text-white fs-2 fw-bold  ">
                  free shipping
                </h2>
                <p className=" text-capitalize text-white fs-3   ">
                  above $5 only
                </p>
              </div>
            </div>
            <div className="col-xl-auto col-md-6 d-flex features-item">
              <i className="fa-solid fa-address-book me-3 green fs-1"></i>
              <div className="features-content">
                <h2 className=" text-capitalize text-white fs-2 fw-bold  ">
                  Certified Organic
                </h2>
                <p className=" text-capitalize text-white fs-3   ">
                  100% Guarantee
                </p>
              </div>
            </div>
            <div className="col-xl-auto col-md-6 d-flex features-item">
              <i className="fa-solid fa-money-bill-1-wave me-3 green fs-1"></i>
              <div className="features-content">
                <h2 className=" text-capitalize text-white fs-2 fw-bold  ">
                  Huge Savings
                </h2>
                <p className=" text-capitalize text-white fs-3   ">
                  At Lowest Price
                </p>
              </div>
            </div>
            <div className="col-xl-auto  col-md-6 d-flex features-item">
              <i className="fa-solid fa-recycle me-3 green fs-1"></i>
              <div className="features-content">
                <h2 className=" text-capitalize text-white fs-2 fw-bold  ">
                  Easy Returns
                </h2>
                <p className=" text-capitalize text-white fs-3   ">
                  No Questions Asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Someproducts />

      {/* ****************************************************************************************** */}
      {/* ************************************* Second banner  ************************************* */}
      {/* ****************************************************************************************** */}

      <img className="basil-leaf" src={basilLeaf} alt="basilleaf" />
      <div className="banner-products">
        <div className="a banner-products-item">
          <h2 className=" fs-1 fw-bold text-capitalize">farm fresh fruits</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet
            consectetur, adipisicing elit.
          </p>
          <button className="shop-now-btn text-capitalize text-white">
            <p className="fs-3"> shop now</p>
            <i className="fa-solid fs-3  ms-4 fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="b banner-products-item">
          <h2 className=" fs-1 fw-bold text-capitalize">fresh Vegetables</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet
            consectetur, adipisicing elit.
          </p>
          <button className="shop-now-btn text-capitalize text-white">
            <p className="fs-3"> shop now</p>
            <i className="fa-solid fs-3  ms-4 fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="c banner-products-item">
          <h2 className=" fs-1 fw-bold text-capitalize">Organic Legume</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet
            consectetur, adipisicing elit.
          </p>
          <button className="shop-now-btn text-capitalize text-white">
            <p className="fs-3"> shop now</p>
            <i className="fa-solid fs-3  ms-4 fa-arrow-right-long"></i>
          </button>
        </div>
      </div>

      {/* ****************************************************************************************** */}
      {/* ************************************ discount banner ************************************* */}
      {/* ****************************************************************************************** */}

      <div className="get-off container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-6 get-off-text d-flex align-items-center">
              <h1 className="fw-bold text-white fs-md-alert-warning ">
                Get 25% Off On Your First Purchase!
              </h1>
            </div>
            <div className="col-6 get-off-btn">
              <button className="shop-now-btn ms-15 text-white">
                <p className="fs-3">
                  <i class="fa-solid fa-cart-shopping me-3 text-white"></i>
                  shop now
                </p>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="try-it-free">
        <i className="fa-solid fa-caret-down"></i>
        <h1 className=" text-center">
          Try It For Free. No Registration Needed.
        </h1>
      </div>

      <Someproducts />
      <Customerreview />
    </>
  );
};

export default Layout;
