import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const [cartItems, setCartItems] = useState([]);

  const subTotal = useRef(0);

  const cartProducts = async () => {
    const res = await axios.post("/cartproducts", {
      userid,
    });
    setCartItems(res?.data?.response);
  };

  const removeCartItem = async (productid) => {
    await axios.put("/removecartitem", {
      userid,
      productid,
    });
    cartProducts();
  };

  useEffect(() => {
    console.log("hello");
    cartProducts();
  }, []);

  return (
    <>
      <Header />

      {/* ********************************** cart page ********************************** */}

      <div className="cart-page-body container-fluid">
        <div className="cart-page">
          <h1 className="heading fw-bold mb-4"> Cart</h1>

          {/* ********************************** cart table ********************************** */}

          <table className="table">
            <thead>
              <tr className="roboto table-row ">
                <th className="empty"></th>
                <th className="product">Product</th>
                <th className="price"> Price</th>
                <th className="quantity">Quantity</th>
                <th className="subtotal">Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.length == 0 ? (
                <h1 className="fs-1 roboto py-5 text-center ">
                  Cart is Empty.....
                </h1>
              ) : (
                cartItems?.map(({ title, price, images, quantity, _id }) => {
                  subTotal.current += quantity * price;

                  return (
                    <tr className="item-row">
                      <td className="cart-image-td">
                        <div className="cart-image-container d-flex align-items-center ">
                          <i
                            className="fa-regular fa-circle-xmark "
                            onClick={() => {
                              removeCartItem(_id);
                            }}
                          ></i>
                          <div className="cart-image">
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/${images}`}
                              alt="coffee"
                            />
                          </div>
                        </div>
                      </td>
                      <td data-label="Product" className="cart-item-name">
                        {title}
                      </td>
                      <td data-label="Price">${price.toFixed(2)}</td>
                      <td data-label="Quantity">
                        <input
                          type="number"
                          className="fs-3 text-center me-5 py-2 border roboto "
                          value={quantity}
                          disabled
                        />
                      </td>
                      <td data-label="Subtotal">
                        ${(quantity * price).toFixed(2)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          {/* <div className="button-row">
            <button className="shop-now-btn">
              <p className="fs-3 text-white fw-bold">UPDATE CART</p>
            </button>
          </div> */}

          {/* ********************************** cart total ********************************** */}

          {!cartItems.length == 0 && (
            <div className="cart-total-box ms-auto w-50  mt-5 ">
              <h1 className="fs-1 px-3 py-4 bg mb-0">Cart total</h1>

              <div className=" d-flex">
                <section className=" text-capitalize w-50 fs-3 roboto">
                  subtotal
                </section>
                <section className=" text-capitalize w-50  fs-3 roboto">
                  ${subTotal.current.toFixed(2)}
                </section>
              </div>
              <div className=" d-flex">
                <section className=" text-capitalize w-50 fs-3 roboto">
                  Total
                </section>
                <section className=" text-capitalize w-50  fs-3 roboto">
                  ${subTotal.current.toFixed(2)}
                </section>
              </div>
              <Link to="/checkout" className="w-100">
                <button className="shop-now-btn py-3 my-4 mx-auto  w-75">
                  <p className="text-uppercase fs-3 text-white">
                    proceed to checkout
                  </p>
                </button>
              </Link>
            </div>
          )}
        </div>
        {cartItems.length == 0 && (
          <Link to="/shop">
            <button className="shop-now-btn">
              <p className="fs-3 text-white">Return To Shop</p>
            </button>
          </Link>
        )}
      </div>

      {/* ********************************** footer ********************************** */}

      <Footer />
    </>
  );
};

export default Cartpage;
