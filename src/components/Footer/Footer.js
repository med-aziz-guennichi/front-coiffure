import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTiktok,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />

            <div>
              <p>Takasim</p>
              <h4>Mourouj 6</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              92-156-030
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              Medazizguennichi@gmail.com
            </h4>
          </div>
          <div className="right">
            <h4>About the company :</h4>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique
            </p>
            <div className="social">
              <FaFacebook
                size={20}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
              <FaTwitter
                size={20}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
              <FaTiktok
                size={20}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
