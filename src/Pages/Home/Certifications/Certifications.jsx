import SectionHeaders from "../../../Shared/SectionHeaders/SectionHeaders";


const Certifications = () => {
    return (
        <div className=" w-5/6 mx-auto">

            <SectionHeaders
                title="Certifications"
            ></SectionHeaders>

            <div className=" flex justify-center mt-10 md:mt-20 mb-20 md:mb-40">

                {/* Web Development from PH */}

                <div className="card bg-white max-w-3xl shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Complete Web Development Course With Jhankar Mahbub</h2>
                        <p className=" text-lg"><span className=" font-semibold">By: </span>Programming Hero</p>
                        <p className=" text-base"><span className=" font-semibold">Issued on: </span>July,2024</p>
                        <figure>
                            <img
                                src="https://i.ibb.co.com/BcYZ2DP/certificate.png"
                                alt="certificate" />
                        </figure>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Certifications;