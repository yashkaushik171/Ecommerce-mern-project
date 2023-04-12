import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkoutpage = () => {
  const { _id, email, fullname } = JSON.parse(localStorage.getItem("user"));
  const userid = _id;
  const [cartItems, setCartItems] = useState([]);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState(0);
  const navigate = useNavigate();

  const cartProducts = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/cartproducts`,
      {
        userid,
      }
    );
    setCartItems(res?.data?.response);
  };

  const placeOrder = async () => {
    postDataToOrders();
    try {
      const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/placeorder`, {
        userid,
        address1,
        address2,
        state,
        city,
        postalcode,
      });
      if (res?.status == 200) alert("success");
      navigate("/orderplaced");
      console.log(res.data);
    } catch (error) {
      if (error.response.status == 400) alert(error.response.data.err);
    }
  };

  const postDataToOrders = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/orders`, {
        userid,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cartProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid checkout-page-body">
        <div className="container checkout-page">
          <h1 className="heading fw-bold">Checkout</h1>
          <div className="checkout-page-section container-fluid">
            <div className="row">
              <div className="col-7 left-section">
                <h2 className="pb-3  billing-details fs-1">Billing Details</h2>
                <form class="row g-3  checkout-form">
                  <div class="col-md-6 ">
                    <label for="inputEmail4" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      value={email}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputText" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputText"
                      value={fullname}
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">
                      Shipping Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                      onChange={(e) => {
                        setAddress1(e.target.value);
                      }}
                      value={address1}
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress2" class="form-label">
                      Shipping Address 2
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                      onChange={(e) => {
                        setAddress2(e.target.value);
                      }}
                      value={address2}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      value={city}
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputState"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      value={state}
                    />
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputZip"
                      onChange={(e) => {
                        setPostalCode(e.target.value);
                      }}
                      value={postalcode}
                    />
                  </div>
                </form>
              </div>

              <div className="col-5 right-section px-5 py-3 h-auto">
                <h1 className="fs-1 mb-3">Your order</h1>
                <section className="d-flex fs-3 roboto fw-bold justify-content-between py-4">
                  <p>Products</p>
                  <p> Subtotal</p>
                </section>

                {cartItems.map(({ title, quantity, price }) => {
                  return (
                    <section className="d-flex fs-3 roboto justify-content-between py-4">
                      <div className="d-flex">
                        <p className=" text-capitalize me-4">{title} </p>
                        <p> x {quantity}</p>
                      </div>
                      <p> ${quantity * price}</p>
                    </section>
                  );
                })}

                <div class="form-check fs-3 roboto mt-5">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Cash On Delivery
                  </label>
                </div>

                <button
                  className="shop-now-btn mt-5 w-100"
                  onClick={() => {
                    placeOrder();
                  }}
                >
                  <p className="text-white text-uppercase fw-bold fs-3">
                    place order
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkoutpage;
