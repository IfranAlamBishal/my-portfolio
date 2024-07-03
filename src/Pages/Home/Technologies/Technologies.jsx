import SectionHeaders from "../../../Shared/SectionHeaders/SectionHeaders";
import html from "../../../assets/icons/html-5.png"
import css from "../../../assets/icons/css.png"
import js from "../../../assets/icons/js.png"
import tailwind from "../../../assets/icons/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667.svg"
import firebase from "../../../assets/icons/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667.svg"
import ps from "../../../assets/icons/photoshop-icon-1024x999-xhts0syq.png"
import react from "../../../assets/icons/react-original-wordmark.svg"
import mongodb from "../../../assets/icons/mongodb-original-wordmark.svg"
import express from "../../../assets/icons/express-original-wordmark.svg"
import node from "../../../assets/icons/nodejs.png"

const Technologies = () => {
    return (
        <div className=" w-5/6 md:w-2/3 mx-auto my-40">
            <SectionHeaders title="Technologies That I Know"></SectionHeaders>

            <div>
                <ul className=" flex gap-3 justify-center py-5">
                    <li><img src={html} alt="html" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={css} alt="css" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={js} alt="js" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={tailwind} alt="tailwind" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={firebase} alt="firebase" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={ps} alt="photoshop" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    
                </ul>
                <ul className=" flex gap-3 justify-center">
                    <li><img src={react} alt="react" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={mongodb} alt="mongodb" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={express} alt="express" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                    <li><img src={node} alt="node" className=" w-10 h-10 md:w-20 md:h-20" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Technologies;