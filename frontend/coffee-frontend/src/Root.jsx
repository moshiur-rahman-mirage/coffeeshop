import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Navbar/>
            <div className="min-h-[100vh]">
            <Outlet/>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;