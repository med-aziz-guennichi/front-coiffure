import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1
        style={{
          color: "red",
          textAlign: "center",
          marginTop: "20%",
          fontSize: "5rem",
        }}
      >
        Error with status code = 404 Not Found
      </h1>

      <button
        style={{
          marginLeft: "45%",
          backgroundColor: "blue",
          padding: "20px",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        Back To Home Page
      </button>
    </div>
  );
};

export default Error;
