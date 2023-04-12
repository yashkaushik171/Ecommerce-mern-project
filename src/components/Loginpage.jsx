import React, { useState } from "react";
import logo from "../images/organic-store-logo5.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("jwt", res?.data?.token);
      localStorage.setItem("user", JSON.stringify(res?.data?.payload));
      if (res?.status === 200) {
        alert("successfully login");
        navigate("/shop");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 402) alert("Invalid details");
    }
  };

  return (
    <>
      <div className="login-page-container container-fluid d-flex align-items-center justify-content-center">
        <div className="left-section ">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-section p-5 rounded-3  d-flex align-items-center justify-content-center flex-column">
          <h1 className="heading fw-bold mb-5 text-center">User Login</h1>
          <div class="mb-3 fs-3 roboto form">
            <label for="formGroupExampleInput" class="form-label m-1">
              Email
            </label>
            <input
              type="email"
              class="form-control fs-4 py-3"
              id="formGroupExampleInput"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div class="mb-3 fs-3 roboto form">
            <label for="formGroupExampleInput2" class="form-label m-1">
              Password
            </label>
            <input
              type="password"
              class="form-control fs-4 py-3"
              id="formGroupExampleInput2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <ul>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Create a new account | Sign up
              </Link>
            </li>
          </ul>
          <button
            className="  shop-now-btn mt-4"
            onClick={() => {
              loginUser();
            }}
          >
            <p className="text-uppercase fs-4  text-white">SUBMIT</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
