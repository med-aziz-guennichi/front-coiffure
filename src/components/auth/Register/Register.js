import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import "./register.css";
import { Link } from "react-router-dom";
import { backUrl } from "../../../server";
import { Toaster } from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retrypPassword, setRetrypPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${backUrl}/auth/register`, {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error.response);
      toast.error("This Username is used ", {
        position: "top-center",
        duration: 5000,
      });
      // toast("error.response.data.message", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };

  return (
    <div className="register-body">
      <Toaster />
      <div className="register-box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="inputBox-signIn">
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox-signIn">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox-signIn">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <span>Password</span>
            <i></i>
          </div>

          <div className="inputBox-signIn">
            <input
              type="password"
              required
              onChange={(e) => setRetrypPassword(e.target.value)}
            />
            <span>Retrype Password</span>
            <i></i>
          </div>

          <div className="links-form">
            <Link to="/">SignIn</Link>
          </div>
          <input type="submit" value="register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
