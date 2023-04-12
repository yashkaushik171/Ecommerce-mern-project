import React from "react";
import smallLeaf from "../images/logo-leaf-new.png";
import coffee from "../images/coffee-asorted-400x400.jpg";

const Someproducts = () => {
  return (
    <>
      <div className="container some-products">
        <h1 className="text-center text-capitalize fw-bold ">
          best selling products
        </h1>
        <img className="img-center img-fluid" src={smallLeaf} alt="logoleaf" />
        <div className="product-gallery d-flex flex-wrap  mt-5">
          <div className="card">
            <img src={coffee} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text grey">Groceries</p>
              <h2 className="mt-3">Assorted coffee</h2>
              <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className=" fs-3 mt-3 fw-bold">$25.00</p>
            </div>
          </div>
          <div className="card">
            <img src={coffee} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text grey">Groceries</p>
              <h2 className="mt-3">Assorted coffee</h2>
              <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className=" fs-3 mt-3 fw-bold">$25.00</p>
            </div>
          </div>
          <div className="card">
            <img src={coffee} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text grey">Groceries</p>
              <h2 className="mt-3">Assorted coffee</h2>
              <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className=" fs-3 mt-3 fw-bold">$25.00</p>
            </div>
          </div>
          <div className="card">
            <img src={coffee} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text grey">Groceries</p>
              <h2 className="mt-3">Assorted coffee</h2>
              <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className=" fs-3 mt-3 fw-bold">$25.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Someproducts;
