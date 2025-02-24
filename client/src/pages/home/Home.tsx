import { Outlet } from "react-router";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;