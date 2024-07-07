import { Link } from "react-router-dom";

const LearnTogether = () => {
    return (
        <div className=" w-5/6 mx-auto py-28">
            <div className="card card-compact bg-blue-50 mx-auto shadow-xl">
                <figure>
                    <img
                        src='https://i.ibb.co/NrRnBnd/learn-together.png' />
                </figure>
                <div className="card-body px-3 mb-5">
                    <h2 className="card-title text-2xl md:text-4xl font-bold">Learn Together</h2>
                    <p>"Learn Together" is a Collaborative Study Platform. This platform connects students and tutors. Students can book study sessions and join classes, while tutors can create and manage sessions. </p>
                    <div className=" my-5">
                        <h4 className=" text-lg font-semibold">Some key feature of this website :</h4>
                        <ul className=" list-disc pl-10">
                            <li>User account</li>
                            <li>User Dashboard </li>
                            <li>Social Login</li>
                            <li>Students can book study sessions and join classes</li>
                            <li>Tutors can create and manage sessions</li>
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
                        <Link to='https://learn-together-d9eaf.web.app' className="btn btn-primary">Visit Website</Link>
                        <Link to='https://github.com/IfranAlamBishal/learn-together-client' className="btn btn-primary">Check GitHub Repository</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnTogether;