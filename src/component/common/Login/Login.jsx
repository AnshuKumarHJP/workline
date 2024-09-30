import React, { useEffect, useState } from "react";
import "./Login.css";
import Login_image from "../../../assets/img/undraw_remotely_2j6y.svg";
import InputWithLabel from "../InputWithLabel";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/features/user/Action";
import { toast, ToastContainer } from "react-toastify";
import MainLayout from "../MainLayout";
import { getCookie } from "../../../assets/Common JS/Commonfn";
import Navbar from "../Header/Navbar";





const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tokenCookie = getCookie("token");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && !tokenCookie) {
      toast.warning('Session Expired. Please log in again.');
      setTimeout(() => {
        localStorage.removeItem('token');
      }, 2000);
    }
  }, [tokenCookie, token]);
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      toast.error("Please fill the form");
      return;
    }
    const userData = { username, password };
    dispatch(login(userData, navigate));
  };

  return (
    <>
    <ToastContainer/>
      {/* <MainLayout> */}
      <Navbar/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 d-none d-md-block">
              <img src={Login_image} alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="col-md-10 pt-4 mx-4">
                <div className="mb-4">
                  <h3>Welcome</h3>
                  <p className="mb-4">
                    Please use the form to sign-in workline.
                  </p>
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <InputWithLabel
                    label="Username / Email"
                    type="text"
                    placeholder="Username / Email"
                    setvalue={username}
                    getvalue={(value) => setUsername(value)}
                  />
                  <InputWithLabel
                    label="Password"
                    type="text"
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
                    type="submit"
                    className="btn btn-primary btn-md w-100 mt-4"
                  >
                    Login
                  </button>
                </form>
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
      {/* </MainLayout> */}
    </>
  );
};

export default Login;
