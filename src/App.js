import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import Product from "./pages/Product";
import Login from "./admin/Login/Login";
import { useSelector } from "react-redux";
import Dashboard from "./admin/Dashboard/Dashboard";
import Error from "./pages/Error";
import Gallerie from "./pages/Gallerie";
import ViewAll from "./admin/viewAllProducts/ViewAll";

function App() {
  const admin = useSelector((state) => state.admin.adminInfo);
  console.log(admin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallerie" element={<Gallerie />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/admin/login" element={<Login />} />
        {admin && <Route path="admin/dashboard" element={<Dashboard />} />}
        {admin && <Route path="/admin/products" element={<ViewAll />} />}

        <Route path="*" element={<Error />} />
      </Routes>

      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </BrowserRouter>
  );
}

export default App;
