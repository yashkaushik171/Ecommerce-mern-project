import React from "react";
import smallLeaf from "../images/logo-leaf-new.png";

const Customerreview = () => {
  return (
    <>
      <div className="customer-review container-fluid">
        <h1 className="heading text-center text-capitalize fw-bold ">
          Customer Review
        </h1>
        <img className="img-center img-fluid" src={smallLeaf} alt="logoleaf" />

        <div className="customer-review-card-container ">
          {/* ****************************************************************************************** */}
          {/* ********************************** customer review card ********************************** */}
          {/* ****************************************************************************************** */}

          <div className="customer-review-card">
            <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              ipsum quidem ve, nesciunt consectetur quas labore esse autem natus
              animi fuga illum eum? Repellat nesciunt a repellendus sed commodi.
            </p>
            <div className="customer-image ">
              <img
                className=" rounded-circle me-3"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="err"
                width="55px"
              />
              <p>Mila Kunis</p>
            </div>
          </div>

          {/* ****************************************************************************************** */}
          {/* ********************************** customer review card ********************************** */}
          {/* ****************************************************************************************** */}

          <div className="deal-of-the-day ">
            <h1 className=" text-center text-white">
              Deal Of The Day 15% Off On All Vegetables!
            </h1>
            <p className="para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="shop-now-btn text-capitalize text-white m-auto ">
              <p className="fs-3"> shop now</p>
              <i className="fa-solid fs-3  ms-4 fa-arrow-right"></i>
            </button>
          </div>

          {/* ****************************************************************************************** */}
          {/* ********************************** customer review card ********************************** */}
          {/* ****************************************************************************************** */}

          <div className="customer-review-card">
            <div className="mt-3 fs-4 stars d-flex align-items-center  justify-content-center">
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
              <i className="fa-solid fa-star yellow"></i>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              ipsum quidem ve, nesciunt consectetur quas labore esse autem natus
              animi fuga illum eum? Repellat nesciunt a repellendus sed commodi.
            </p>
            <div className="customer-image ">
              <img
                className=" rounded-circle me-3"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="err"
                width="55px"
              />
              <p>Mila Kunis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customerreview;
