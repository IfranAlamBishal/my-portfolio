import { Link } from "react-router-dom";
import SectionHeaders from "../../Shared/SectionHeaders/SectionHeaders";


const Projects = () => {
    return (
        <div className=' pt-36 w-5/6 mx-auto'>
            <SectionHeaders
                title="My Projects"
            ></SectionHeaders>

            <div className=" my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* NexTour */}

                <div className="card card-compact bg-blue-50 shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co.com/2YJmZhk/NexTour.png' />
                    </figure>
                    <div className="card-body px-3 mb-5 ">
                        <h2 className="card-title">NexTour</h2>
                        <p>NexTour is a dynamic travel and tour planning platform designed to offer a seamless experience for adventure seekers. NexTour caters to diverse travel needs. Users can explore carefully curated regular and premium tour packages, customize their itineraries, and easily book trips. The platform also features user-friendly tools like wishlist functionality, social media sharing, and a calendar to help travelers plan and manage their ideal travel dates. NexTour simplifies the travel planning process, making every journey memorable. </p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projects/NexTour' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                {/* Unity Serve */}

                <div className="card card-compact bg-blue-50 shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/Kztz8Xj/unity-serve.png' />
                    </figure>
                    <div className="card-body px-3 mb-5 ">
                        <h2 className="card-title">Unity Serve</h2>
                        <p>Unity Serve is a dedicated Volunteer Management Platform designed to connect organizers with enthusiastic volunteers. Through Unity Serve, organizers can create and post event opportunities, making it easy to reach a broad base of potential volunteers. Volunteers can explore available events and directly request to join those that match their interests or align with causes they care about. The platform fosters a collaborative environment, where organizers and volunteers alike can contribute to meaningful community work. Unity Serve also supports event planning by allowing organizers to manage participants effectively. </p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projects/UnityServe' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                {/* Learn Together */}

                <div className="card card-compact bg-blue-50 shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/NrRnBnd/learn-together.png' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Learn Together</h2>
                        <p>"Learn Together" is a cutting-edge Collaborative Study Platform that connects students with tutors in an interactive and engaging environment. The platform allows students to explore available study sessions, book classes, and join live sessions based on their academic needs and schedules.
                        For tutors, Learn Together offers powerful tools to create, manage, and customize their sessions. Tutors can schedule classes, monitor student progress, and adjust session content to provide personalized learning experiences.
                        </p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projects/LearnTogether' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;