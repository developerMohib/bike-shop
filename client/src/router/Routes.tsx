import { Route, Routes } from "react-router";
import App from "../App";
import AboutUs from "../pages/about/AboutUs";
import Contact from "../pages/contact/Contact";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Product from "../pages/product/Product";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
