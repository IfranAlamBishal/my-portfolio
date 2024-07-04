import Banner from "../Header/Banner/Banner";
import Bio from "./Bio/Bio";
import Contacts from "./ContactInfo/Contacts";
import SummaryOfResume from "./SummaryOfResume/SummaryOfResume";
import Technologies from "./Technologies/Technologies";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bio></Bio>
            <Technologies></Technologies>
            <SummaryOfResume></SummaryOfResume>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;