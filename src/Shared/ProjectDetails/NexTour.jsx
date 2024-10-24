import { Link } from "react-router-dom";

const NexTour = () => {
    return (
        <div className=" w-5/6 mx-auto py-28">
            <div className="card card-compact bg-blue-50 mx-auto shadow-xl">
                <figure>
                    <img
                        src='https://i.ibb.co.com/2YJmZhk/NexTour.png' />
                </figure>
                <div className="card-body px-3 mb-5">
                    <h2 className="card-title text-2xl md:text-4xl font-bold">NexTour</h2>
                    <p>NexTour is a dynamic travel and tour planning platform designed to offer a seamless experience for adventure seekers. NexTour caters to diverse travel needs. Users can explore carefully curated regular and premium tour packages, customize their itineraries, and easily book trips. The platform also features user-friendly tools like wishlist functionality, social media sharing, and a calendar to help travelers plan and manage their ideal travel dates. NexTour simplifies the travel planning process, making every journey memorable. </p>
                    <div className=" my-5">
                        <h4 className=" text-lg font-semibold">Some key feature of this website :</h4>
                        <ul className=" list-disc pl-10">
                            <li>Search, Filter and Sort Tour Packages</li>
                            <li>User Profile</li>
                            <li>User and Admin Dashboard</li>
                            <li>Community Blog Section</li>
                            <li>One Click Share</li>
                            <li>Booking and Wishlist</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=" text-lg font-semibold ">Used Technologies :</h4>
                        <ul className=" font-bold list-disc pl-10">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Tailwind</li>
                            <li>React.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="card-actions my-4">
                        <Link to='https://nextour-b8ed3.web.app/' className="btn btn-primary">Visit Website</Link>
                        <Link to='https://github.com/IfranAlamBishal/NexTour' className="btn btn-primary">Check GitHub Repository</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NexTour;