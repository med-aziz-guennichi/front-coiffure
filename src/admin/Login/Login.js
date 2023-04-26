import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log(handleSubmit);
  };
  return (
    <div className="login-body">
      <div className="login-box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="inputBox-signIn">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
            />
            <span>AdminName</span>
            <i></i>
          </div>
          <div className="inputBox-signIn">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <span>Password</span>
            <i></i>
          </div>

          <input type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
