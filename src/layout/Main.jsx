import { Outlet } from "react-router-dom";
import Navbar from "../shared_components/Navbar/Navbar";
import Footer from "../shared_components/Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Main = () => {
    return (
        <div className="overflow-x-hidden">
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet location2={location.pathname} ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;