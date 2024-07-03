
const AcademinInfo = () => {
    return (
        <div>
            <h2 className=" text-center text-2xl font-semibold">My Academic Background</h2>

            <div className=" space-y-5">
                <div className="card bg-white  shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Bachelor in Computer Science and Engineering (CSE)</h2>
                        <p>Tejgaon College (Affiliated with National University of Bangladesh)</p>
                        <p className=" font-semibold">Current Student (Final Year)</p>
                    </div>
                </div>
                <div className="card bg-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Higher School Certificate (H.S.C)</h2>
                        <p>Bir Shrestha Munshi Abdur Rouf Public College</p>
                        <p className=" font-semibold">Passing Year: 2017 <br />
                            CGPA: 4.33</p>
                    </div>
                </div>
                <div className="card bg-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Secondary School Certificate (S.S.C)</h2>
                        <p>Gulshan Model School and College</p>
                        <p className=" font-semibold">Passing Year: 2015 <br />
                            CGPA: 5.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademinInfo;