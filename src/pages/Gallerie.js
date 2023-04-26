import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import "../styles/Gallerie.css";
import Navbar from "../components/Navbar/Navbar";

const Gallerie = () => {
  return (
    <>
      <Navbar />
      <div className="gallerie_container">
        <div className="gallerie_heading">
          <h3>
            Photo <span>Gallerie</span>
          </h3>
        </div>
        <div className="gallerie_box">
          <div className="gallerie_dream">
            <img src={img1} alt="" />
            {/* <img src={img2} alt="" /> */}
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
          <div className="gallerie_dream">
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
          </div>
          <div className="gallerie_dream">
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
            <img src={img15} alt="" />
            <img src={img16} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallerie;
