import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const Orderplaced = () => {
  const { _id, email, fullname } = JSON.parse(localStorage.getItem("user"));
  const userid = _id;
  const [cartItems, setCartItems] = useState([]);
  const subTotal = useRef(0);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  const cartProducts = async () => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/cartproducts`, {
      userid,
    });
    setCartItems(res?.data?.response);
  };

  useEffect(() => {
    cartProducts();
  }, []);

  return (
    <>
      <Header />

      <div className="container-fluid checkout-page-body">
        <div className="container checkout-page">
          <h1 className="heading fw-bold mb-3 border-0">
            Order Placed <i className="fa-solid green fa-check"></i>
          </h1>
          <p className="fs-4 roboto mb-5">
            Thank you. Your order has been received.
          </p>
          <div className="order-overview d-flex fs-4 roboto">
            <section className="me-5 pe-5 ">
              <label> ORDER NUMBER:</label>
              <p className="fw-bold fs-5">{Math.floor(Math.random() * 10)}</p>
            </section>
            <section className="me-5 pe-5">
              <label> DATE:</label>
              <p className="fw-bold text-uppercase fs-5">
                {date.getDate()}-{months[date.getMonth()]}-{date.getFullYear()}
              </p>
            </section>
            <section className="me-5 pe-5">
              <label> PAYMENT METHOD:</label>
              <p className="fw-bold text-uppercase fs-5">cash on delivery</p>
            </section>
          </div>

          <div className="order-review-table w-100 p-0  container-fluid ">
            <h1 className="px-3 py-4 bg-white mb-0 border-bottom-0">
              Order Details
            </h1>
            <table>
              <tr className="fs-4 roboto ">
                <th className="w-50 px-3 py-4">Product</th>
                <th className="w-50 px-3 py-4">Total</th>
              </tr>

              {cartItems.map(({ title, price, quantity }) => {
                subTotal.current += price * quantity;
                return (
                  <tr className="fs-4 roboto ">
                    <td className="px-3 py-4 ">
                      {title} x {quantity}
                    </td>
                    <td className="px-3 py-4">
                      ${price * quantity.toFixed(2)}
                    </td>
                  </tr>
                );
              })}

              <tr className="fs-4 roboto ">
                <td className="px-3 py-4 ">Subtotal:</td>
                <td className="px-3 py-4">${subTotal.current.toFixed(2)}</td>
              </tr>
              <tr className="fs-4 roboto ">
                <td className="px-3 py-4 ">Payment Method:</td>
                <td className="px-3 py-4 fw-bold">cash on delivery</td>
              </tr>
              <tr className="fs-4 roboto ">
                <td className="px-3 py-4 ">Total:</td>
                <td className="px-3 py-4 green">
                  ${subTotal.current.toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orderplaced;
