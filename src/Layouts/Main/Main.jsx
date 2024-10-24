import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Header/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

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