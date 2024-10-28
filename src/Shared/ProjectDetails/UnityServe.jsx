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
                    <p>Unity Serve is a dedicated Volunteer Management Platform designed to connect organizers with enthusiastic volunteers. Through Unity Serve, organizers can create and post event opportunities, making it easy to reach a broad base of potential volunteers. Volunteers can explore available events and directly request to join those that match their interests or align with causes they care about. The platform fosters a collaborative environment, where organizers and volunteers alike can contribute to meaningful community work. Unity Serve also supports event planning by allowing organizers to manage participants effectively. </p>
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