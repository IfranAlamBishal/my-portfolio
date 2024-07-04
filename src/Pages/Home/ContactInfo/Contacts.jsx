import SectionHeaders from "../../../Shared/SectionHeaders/SectionHeaders";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { SharedContext } from "../../../Shared/SharedProvider";

const Contacts = () => {

    const { contacts } = useContext(SharedContext)
    return (
        <div className=" w-2/3 mx-auto my-20" ref={contacts}>
            <SectionHeaders title='Get in Touch'></SectionHeaders>

            <div>
                <ul className=" py-5">
                    <li className=" inline-flex gap-3 mb-3"><FaPhone className=" w-8 h-8" /> <span className=" font-semibold">+880 1835 604089</span></li> <br />
                    <li className=" inline-flex gap-3"><MdMailOutline className=" w-10 h-10" /> <span className=" font-semibold pt-2">ifranalam4089@gmail.com</span></li><br />
                    <li className=" inline-flex gap-3"><FaSquareFacebook className=" w-10 h-10" /><span className=" font-semibold pt-3">/iab015</span> </li><br />
                    <li className=" inline-flex gap-3"><FaGithub className=" w-10 h-10" /><span className=" font-semibold pt-3">/IfranAlamBishal</span> </li><br />
                    <li className=" inline-flex gap-3"><FaLinkedin className=" w-10 h-10" /><span className=" font-semibold pt-3">/md-ifran-alam-bishal-52070516a</span> </li>
                </ul>
            </div>
        </div>
    );
};

export default Contacts;