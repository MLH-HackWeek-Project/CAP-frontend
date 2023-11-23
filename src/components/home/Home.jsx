import Navbar from "../utils/Navbar";
import "../css/Home.css";
import Content from "../utils/Content";
import Aside from "../utils/Aside";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-container-grid">
                <Content />
                <Aside />
            </div>
        </div>
    );
};

export default Home;
