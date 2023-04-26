import axios from "axios";

const PROXY_URL = "http://localhost:5000/";

const admin = JSON.parse(localStorage.getItem("persist:root"))?.admin;
const adminInfo = admin && JSON.parse(admin).adminInfo;

export const publicRequest = axios.create({
  baseURL: PROXY_URL,
});
