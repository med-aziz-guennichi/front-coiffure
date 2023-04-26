import React, { useEffect, useState } from "react";
import "./ViewAll.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { backUrl } from "../../server";

const ViewAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${backUrl}/product/all`);
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="tab_products"></div>
    </>
  );
};

export default ViewAll;
