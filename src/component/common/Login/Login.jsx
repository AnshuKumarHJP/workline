import React, { useState } from "react";
import "./Login.css";
import Login_image from "../../../assets/img/undraw_remotely_2j6y.svg";
import InputWithLabel from "../InputWithLabel";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "" || password === "") {
      alert("Please fill the form");
      return;
    }

    let user = { username: username, password: password, role: "Emp" };
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(user),
      "secret-key"
    ).toString();
    localStorage.setItem("userData", encryptedData);
    navigate("/");

  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 d-none d-md-block">
            <img src={Login_image} alt="Image" className="img-fluid" />
          </div>
          <div className="col-md-6 pt-4">
            <div className="col-md-10 pt-4 mx-4">
              <div className="mb-4">
                <h3>Welcome</h3>
                <p className="mb-4">Please use the form to sign-in workline.</p>
              </div>
              <InputWithLabel
                label="Username / Email"
                type="text"
                placeholder="Username / Email"
                setvalue={username}
                getvalue={(value) => setUsername(value)}
              />
              <InputWithLabel
                label="Password"
                type="password"
                placeholder="Password"
                setvalue={password}
                getvalue={(value) => setPassword(value)}
              />
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="d-flex gap-2 align-items-center">
                  <input type="checkbox" />
                  <p className="mb-0">Remember me</p>
                </span>
                <a href="#">Forgot password ?</a>
              </div>
              <button
                onClick={handleSubmit}
                className="btn btn-primary btn-md w-100 mt-4"
              >
                Login
              </button>
              <span className="d-block text-left my-4 text-muted">
                &mdash; or login with &mdash;
              </span>
              <div className="social-login">
                <a href="#" className="facebook">
                  <span className="mr-3">
                    <FaFacebookF />
                  </span>
                </a>
                <a href="#" className="twitter">
                  <span className="mr-3">
                    <FaTwitter />
                  </span>
                </a>
                <a href="#" className="google">
                  <span className="mr-3">
                    <FaGoogle />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
