import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Header/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;