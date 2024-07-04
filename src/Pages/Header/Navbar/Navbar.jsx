import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SharedContext } from "../../../Shared/SharedProvider";

const Navbar = () => {

    const { scrollToContact } = useContext(SharedContext);

    const navLinks = <>
        <li><Link onClick={scrollToContact} className=' text-base font-semibold'>Find Me</Link></li>
        <li><NavLink to='/projects' className=' text-base font-semibold'>Projects</NavLink></li>
    </>

    const resumeDownload = "https://drive.google.com/uc?export=download&id=1tOBDqcW2vfw8ZB5d9nIVhGimIcqePZmh"

    return (
        <div className=" ">
            <div className="navbar bg-white bg-opacity-50 p-5 top-5 fixed z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                            <li className=" mt-3">
                                <Link to={resumeDownload} className="btn btn-primary text-base font-semibold">Download Resume</Link>
                            </li>
                        </ul>

                    </div>
                    <Link to='/' className="btn btn-ghost text-xl md:text-3xl">Md. Ifran Alam Bishal</Link>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    <div className=" ml-3">
                        <Link to={resumeDownload} className="btn btn-primary text-base font-semibold w-36">Download Resume</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;