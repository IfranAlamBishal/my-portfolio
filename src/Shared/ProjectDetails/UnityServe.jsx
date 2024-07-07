import { Link } from "react-router-dom";

const UnityServe = () => {
    return (
        <div className=" w-5/6 mx-auto py-28">
            <div className="card card-compact bg-blue-50 mx-auto shadow-xl">
                <figure>
                    <img
                        src='https://i.ibb.co/Kztz8Xj/unity-serve.png' />
                </figure>
                <div className="card-body px-3 mb-5">
                    <h2 className="card-title text-2xl font-bold">Unity Serve</h2>
                    <p>"Unity Serve" is a Volunteer Management Platform, where an user can post for events as an organizer or can request to join an event as a volunteer. </p>
                    <div className=" my-5">
                        <h4 className=" text-lg font-semibold">Some key feature of this website :</h4>
                        <ul className=" list-disc pl-10">
                            <li>User account</li>
                            <li>User can post events and ask volunteers to join</li>
                            <li>User can request to join event as a volunteer</li>
                            <li>Event post and join request update or delete option</li>
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
                        <Link to='https://unity-serve.web.app/' className="btn btn-primary">Visit Website</Link>
                        <Link to='https://github.com/IfranAlamBishal/unity-serve-client' className="btn btn-primary">Check GitHub Repository</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnityServe;