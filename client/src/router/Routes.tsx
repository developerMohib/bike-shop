import { Route,Routes } from "react-router";
import App from "../App";
import AboutUs from "../pages/about/AboutUs";
import Contact from "../pages/contact/Contact";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
