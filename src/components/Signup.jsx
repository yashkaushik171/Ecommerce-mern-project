import React, { useState } from "react";
import logo from "../images/organic-store-logo5.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, {
        fullname,
        phone,
        email,
        password,
      });
      if (res?.status == 201) alert("user Successfully registered");
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error?.response?.status == 401) alert("email already registered.");
      if (error?.response?.status == 402)
        alert("please fill the fields properly");
    }
  };

  return (
    <>
      <div className="login-page-container container-fluid d-flex align-items-center justify-content-center">
        <div className="left-section ">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-section p-5 rounded-3  d-flex align-items-center justify-content-center flex-column">
          <h1 className="heading fw-bold mb-5 text-center">User Sign In</h1>
          <div className="mb-2 fs-3 roboto form">
            <label for="formGroupExampleInput" className="form-label m-1">
              Full name
            </label>
            <input
              type="text"
              className="form-control fs-4 py-3"
              id="formGroupExampleInput"
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              value={fullname}
            />
          </div>
          <div className="mb-2 fs-3 roboto form">
            <label for="formGroupExampleInput" className="form-label m-1">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control fs-4 py-3"
              id="formGroupExampleInput"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            />
          </div>
          <div className="mb-2 fs-3 roboto form">
            <label for="formGroupExampleInput" className="form-label m-1">
              Email
            </label>
            <input
              type="email"
              className="form-control fs-4 py-3"
              id="formGroupExampleInput"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="mb-2 fs-3 roboto form">
            <label for="formGroupExampleInput2" className="form-label m-1">
              Password
            </label>
            <input
              type="password"
              className="form-control fs-4 py-3"
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
                Already have an account | Login
              </Link>
            </li>
          </ul>
          <button
            className="  shop-now-btn mt-4"
            onClick={() => {
              createUser();
            }}
          >
            <p className="text-uppercase fs-4  text-white">SUBMIT</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
