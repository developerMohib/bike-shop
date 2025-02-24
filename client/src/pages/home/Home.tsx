import Banner from "../../component/banner/Banner";
import ProductCard from "../../component/productCard/ProductCard";
import Review from "../../component/review/Review";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <ProductCard/>
            <Review />
        </div>
    );
};

export default Home;