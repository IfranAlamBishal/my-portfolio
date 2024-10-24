import { Link } from "react-router-dom";
import SectionHeaders from "../../Shared/SectionHeaders/SectionHeaders";


const Projects = () => {
    return (
        <div className=' pt-36 w-5/6 mx-auto'>
            <SectionHeaders
                title="My Projects"
            ></SectionHeaders>

            <div className=" my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

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

                <div className="card card-compact bg-blue-50 shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/Kztz8Xj/unity-serve.png' />
                    </figure>
                    <div className="card-body px-3 mb-5 ">
                        <h2 className="card-title">Unity Serve</h2>
                        <p>"Unity Serve" is a Volunteer Management Platform, where an user can post for events as an organizer or can request to join an event as a volunteer. </p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projects/UnityServe' className="btn btn-primary">View Details</Link>
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
                            <Link to='/projects/LearnTogether' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;