import React, { useEffect, useState } from "react";
import "./Product.css";
import { backUrl } from "../../server";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  const getAllProducts = async () => {
    const res = await axios.get(`${backUrl}/product/all`);
    setData(res.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1>Our Products</h1>
      {data.map((item, index) => {
        let count = 0;
        if (item.secPrice !== 0) {
          count = (item.secPrice / item.price) * 100;
        }
        return (
          <>
            <section className="products" key={index}>
              <div className="all-products">
                <div className="product" key={index}>
                  {item.secPrice !== 0 && (
                    <p className="product-discount" style={{ color: "#000" }}>
                      {count}%
                    </p>
                  )}
                  <img src={item.image} alt="" />
                  <div className="product-info">
                    <h4 className="product-title">{item.title}</h4>
                    {item.secPrice ? (
                      <del>{item.price}</del>
                    ) : (
                      <p className="product-price">{item.price} TND</p>
                    )}
                    {item.secPrice !== 0 ? (
                      <p className="product-price">{item.secPrice} TND</p>
                    ) : (
                      <></>
                    )}
                    <a className="product-btn" href="/">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Products;
