import SectionHeaders from "../../../Shared/SectionHeaders/SectionHeaders";
import AcademinInfo from "./ResumeInfo/AcademinInfo";
import Experience from "./ResumeInfo/Experience";

const SummaryOfResume = () => {
    return (
        <div className=" w-5/6 mx-auto my-40">
            <SectionHeaders title="A Summary of My Resume"></SectionHeaders>
            <div className=" flex flex-col lg:flex-row justify-between gap-20 py-10">
                <AcademinInfo></AcademinInfo>
                <div className="divider lg:divider-horizontal"></div>
                <Experience></Experience>
            </div>
        </div>
    );
};

export default SummaryOfResume;