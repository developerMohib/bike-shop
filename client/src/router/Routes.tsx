import { Route,Routes } from "react-router";
import App from "../App";
import AboutUs from "../pages/about/AboutUs";
import Contact from "../pages/contact/Contact";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
