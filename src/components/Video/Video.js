import React from "react";
import { Link } from "react-router-dom";
import videoaa from "../../assets/aa.mp4";
import "./Video.css";
const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={videoaa} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Coiffure. Mourouj</h1>
        <p>Reserve Now !</p>

        <div>
          <Link to="/product" className="btn">
            Product
          </Link>
          <Link to="/maps" className="btn btn-light">
            Localisation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
