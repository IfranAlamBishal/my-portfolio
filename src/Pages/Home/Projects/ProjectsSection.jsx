import SectionHeaders from "../../../Shared/SectionHeaders/SectionHeaders";
import Slides from "./Slides/Slides";

const ProjectsSection = () => {
    return (
        <div className=" my-20">
            <SectionHeaders title='My Projects'></SectionHeaders>

            <div className=" py-10">
                <Slides></Slides>
            </div>
        </div>
    );
};

export default ProjectsSection;