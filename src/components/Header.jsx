import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/organic-store-logo5.svg";
import axios from "axios";

const Header = () => {
  const token = localStorage?.getItem("jwt");
  const user = JSON.parse(localStorage?.getItem("user"));
  const userid = JSON.parse(localStorage.getItem("user"))?._id;
  const [cartItems, setCartItems] = useState([]);
  const subTotal = useRef(0);

  const navigate = useNavigate();

  const logout = () => {
    alert("logging out");
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const cartProducts = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/cartproducts`,
      {
        userid,
      }
    );
    setCartItems(res?.data?.response);
  };

  useEffect(() => {
    cartProducts();
  }, []);
  return (
    <>
      <header>
        <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-none p-3">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img className="img-fluid logo" src={logo} alt="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/shop">
                    Everything
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/grocery">
                    Grocery
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/juice">
                    Juice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className=" collapse navbar-collapse left-section"
            id="navbarSupportedContent"
          >
            <ul className="leletoh navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ">
                <a
                  class="nav-link position-relative d-flex light-green leletoh-1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  $0.00
                  <i className="fa-solid fa-basket-shopping light-green ms-3"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge">
                    {cartItems.length}
                  </span>
                </a>

                <div
                  class="offcanvas offcanvas-end "
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header border py-4 ">
                    <p id="offcanvasRightLabel " className="roboto fs-3 mb-0">
                      Shopping cart
                    </p>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <div className="offcanvas-item  p-3">
                      {cartItems?.map(({ title, quantity, images, price }) => {
                        subTotal.current += quantity * price;
                        return (
                          <div className="d-flex  justify-content-between mb-2 ">
                            <div className="d-flex align-items-center">
                              <img
                                src={`${process.env.REACT_APP_BASE_URL}/${images}`}
                                alt="coffee"
                                width="80px"
                              />
                              <div className="lh-1 roboto fs-4 d-flex ms-4 flex-column">
                                <p className="green text-start">{title}</p>
                                <p className="text-start">
                                  {quantity} x ${price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="roboto fs-3  my-auto ">
                              <p>${(price * quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="offcanvas-subtotal d-flex justify-content-between px-5 py-4">
                    <section className="fs-3 roboto">Subtotal:</section>
                    <section className="fs-3 roboto">
                      ${subTotal?.current.toFixed(2)}
                    </section>
                  </div>
                  <div>
                    <section className="px-5 pt-4 pb-2">
                      <Link to="/cartpage" className="w-100">
                        <button
                          className="shop-now-btn bg-transparent uniq  w-100"
                          type="button"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        >
                          <p className="fs-3 fw-bold">VIEW CART</p>
                        </button>
                      </Link>
                    </section>
                    <section className="px-5 pt-2 pb-4">
                      <Link to="/checkout" className="w-100">
                        <button
                          type="button"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          className="shop-now-btn  w-100"
                        >
                          <p className="fs-3 fw-bold text-white">CHECKOUT</p>
                        </button>
                      </Link>
                    </section>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                {!token ? (
                  <Link className="nav-link" to="/login">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                ) : (
                  <p
                    className="welcome-text nav-link "
                    onClick={() => {
                      logout();
                    }}
                  >
                    Welcome, {user?.fullname}
                  </p>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
