import { Link } from "react-router-dom";
import SectionHeaders from "../../Shared/SectionHeaders/SectionHeaders";

const Projects = () => {
    return (
        <div className=' pt-36 w-5/6 mx-auto'>
            <SectionHeaders title="My Projects"></SectionHeaders>

            <div className=" my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="card card-compact bg-blue-50 shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/Kztz8Xj/unity-serve.png' />
                    </figure>
                    <div className="card-body px-3 mb-5 ">
                        <h2 className="card-title">Unity Serve</h2>
                        <p>"Unity Serve" is a Volunteer Management Platform, where an user can post for events as an organizer or can request to join an event as a volunteer. </p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projeccts/UnityServe' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-blue-50 shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/NrRnBnd/learn-together.png' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Learn Together</h2>
                        <p>"Learn Together" is a Collaborative Study Platform. This platform connects students and tutors. Students can book study sessions and join classes, while tutors can create and manage sessions.</p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projeccts/LearnTogether' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;