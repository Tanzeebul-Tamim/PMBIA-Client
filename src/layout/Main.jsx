import { Outlet } from "react-router-dom";
import Navbar from "../shared_components/Navbar/Navbar";
import Footer from "../shared_components/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;