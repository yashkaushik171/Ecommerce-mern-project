import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Productpage = () => {
  const [value, setValue] = useState(0);
  const [review, setReview] = useState("");
  const [productPage, setProductPage] = useState({});
  const [numberofproduct, setNumberofproduct] = useState(1);
  const [showModel, setShowModel] = useState(false);
  const [addtocartmodel, setAddtocartmodel] = useState(false);
  const _id = JSON.parse(localStorage.getItem("user"))?._id;
  const email = JSON.parse(localStorage.getItem("user"))?.email;
  const fullname = JSON.parse(localStorage.getItem("user"))?.fullname;

  const { id } = useParams();
  const { title, category, price, images, description, rating } = productPage;

  const getProductpage = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/singleproducts/${id}`
    );
    const result = res?.data?.response;
    setProductPage(result);
  };

  const addToCart = async () => {
    const token = localStorage.getItem("jwt");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token) setShowModel(true);
    else {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/addtocart`,
        {
          userid: user._id,
          title,
          price,
          images,
          quantity: numberofproduct,
        }
      );
      console.log(res);
      setAddtocartmodel(true);
    }
  };

  const userReview = async () => {
    if (!fullname || !email) {
      alert("You have login first , In order to review products");
    } else {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/ratingproduct`,
          {
            id,
            star: value,
            postedBy: _id,
            review,
            fullname,
          }
        );
        console.log(res?.data?.response);
        setValue(0);
        getProductpage();
      } catch (error) {
        if (error.response.status == 400) alert(error.response.data.err);
        if (error.response.status == 401) alert(error.response.data.err);
      }
    }
  };

  useEffect(() => {
    getProductpage();
  }, []);

  return (
    <>
      <Header />

      {/* ****************************************************************************************** */}
      {/* ********************************** product page container ******************************** */}
      {/* ****************************************************************************************** */}

      <div className="product-page-body">
        {addtocartmodel && (
          <div
            className="alert alert-success fade show fs-3 roboto  mb-5 h-100 d-flex align-items-center justify-content-around"
            role="alert"
          >
            <i class="fa-solid fa-circle-check"></i>
            Your Item is added to the Cart.
            <Link to="/cartpage">
              <h1 className="shop-now-btn ">
                <p className="fs-3 fw-bold text-white">VIEW CART</p>
              </h1>
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setAddtocartmodel(false);
              }}
            ></button>
          </div>
        )}
        {/* ************************** STARTS, Alert If user is not logged in ************************ */}

        {showModel && (
          <div
            class="alert alert-warning alert-dismissible fade show fs-3 roboto py-5 mb-5 h-100 d-flex align-items-center justify-content-center"
            role="alert"
          >
            <i className="fa-solid fa-circle-exclamation fs-1 me-4"></i>
            <strong>
              <Link className=" green" to="/login">
                Login here!
              </Link>
            </strong>
            You should login in first, to add a product to the cart.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setShowModel(false);
              }}
            ></button>
          </div>
        )}

        {/* ************************** ENDS , Alert If user is not logged in ************************ */}

        <div className="product-page container-fluid d-flex justify-content-around align-items-start">
          <div className="product-page-image">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${images}`}
              alt="coffee"
            />
          </div>
          <div className="product-page-content ">
            <h1 className="heading fw-bold mb-3 text-capitalize"> {title}</h1>
            <div className="d-flex align-items-end mb-2">
              <p className="fs-1 fw-bold me-3 mb-0 roboto ">
                ${price?.toFixed(2)}
              </p>
              <span className=" pb-2 fs-4 roboto">+ Free Shipping</span>
            </div>
            <p className="fs-3 fw-light roboto pe-5 mb-5 ">{description}</p>
            <div className="quantity-field d-flex">
              <input
                className=" fs-3 text-center me-5 border roboto"
                type="number"
                value={numberofproduct}
                onChange={(e) => {
                  setNumberofproduct(e.target.value);
                }}
              />
              <button
                className="shop-now-btn text-uppercase text-white"
                onClick={() => {
                  addToCart();
                }}
              >
                <p className=" fw-bolder fs-4">add to cart</p>
              </button>
            </div>

            <br />
            <hr />
            <div className="d-flex">
              <p className="fs-3 roboto">category:</p>
              <ul className="d-flex">
                <li className="nav-item m-0">
                  <Link
                    to="/shop"
                    className="nav-link m-0 p-0 green text-capitalize"
                  >
                    groceries
                  </Link>
                </li>
                <span className="fs-3 me-2 ms-2 ">/</span>
                <li className="nav-item m-0">
                  <Link
                    to="/shop"
                    className="nav-link m-0 p-0 green text-capitalize"
                  >
                    juice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ****************************************************************************************** */}
        {/* ******************************* description of product page ****************************** */}
        {/* ****************************************************************************************** */}
        <div className="description">
          <h2 className=" fw-bold ms-5">Description</h2>
          <p className="fs-3 ms-5 mt-4 roboto">{description}</p>
        </div>
        {/* ****************************************************************************************** */}
        {/* ********************************* review of product page ********************************* */}
        {/* ****************************************************************************************** */}
        <div className="review border mt-5 pt-5">
          <h2 className=" fw-bold ms-5 mb-4">Reviews ({rating?.length})</h2>
          <div className="reviews-section ">
            {rating?.map != 0 &&
              rating?.map(({ review, fullname }) => {
                return (
                  <div className=" ms-5 mb-4 d-flex ">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt="user"
                      width={65}
                      className=" rounded-circle"
                    />
                    <div className="ms-3">
                      <h4 className="fw-bold">{fullname}</h4>
                      <h2>{review}</h2>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="review-field p-5  ">
            <h3 className="ps-5 fs-2 ">
              Be the
              <span className="roboto green">
                {rating?.length === 0
                  ? " first "
                  : ` ${rating?.length + 1} user `}
              </span>
              to review “{title}”
            </h3>
            <div className="ps-5  your-rating d-flex align-items-center">
              <h3 className="fs-2 mt-5">Your Rating * </h3>
              <Rating
                name="no-value"
                value={value}
                size="large"
                className="fs-1 mt-4 ms-4"
                onChange={(event, newValue) => {
                  setValue(newValue);
                  console.log(value, 198);
                }}
              />
            </div>

            <div className="input-field px-5">
              <h3 className="fs-2 mt-5">Your review * </h3>
              <form action="#">
                <textarea
                  name="review"
                  id="review"
                  cols="30"
                  rows="3"
                  className="fs-3 p-3"
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                  value={review}
                ></textarea>
                <div className="container-fluid mt-5 ">
                  <div className="row">
                    <div className="col-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label fs-3"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control fs-2"
                        id="exampleFormControlInput1"
                        value={fullname}
                      />
                    </div>
                    <div className="col-6">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label fs-3"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control fs-2"
                        id="exampleFormControlInput1"
                        value={email}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="shop-now-btn mt-5"
                  onClick={(e) => {
                    e.preventDefault();
                    if (value == 0) alert("pls give star rating");
                    else {
                      userReview();
                    }
                  }}
                >
                  <p className="fs-3 text-white">SUBMIT</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productpage;
