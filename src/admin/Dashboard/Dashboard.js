import React, { useState } from "react";
import "./Dashboard.css";
import { backUrl } from "../../server";
import axios from "axios";
import Header from "../header/Header";

const Dashboard = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const submitImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qriscptt");
    data.append("cloud_name", "dkxqcxutp");
    fetch("https://api.cloudinary.com/v1_1/dkxqcxutp/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const image = data.url;
        const response = axios.post(`${backUrl}/product/add`, {
          title,
          price,
          image,
        });
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="formSign">
        <div className="formSignDiv">
          <form onSubmit={submitImage}>
            <div className="formSignGroups">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                required
              />
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                required
              />
              <div>
                <label htmlFor="image">
                  <span>Select Image</span>
                </label>
                <input
                  type="file"
                  id="image"
                  accept=".png, .jpg, .jpeg"
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <button type="submit">Add Product</button>
            {/* {error && <span className='error'>{error}</span>}
        {success && <span className='success'>{success}</span>} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
