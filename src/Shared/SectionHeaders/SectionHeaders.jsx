
const SectionHeaders = ({title}) => {
    return (
        <div>
            <h2 className=" text-4xl font-bold mb-5 text-center">{title}</h2>
            <hr  className=" w-1/2 mx-auto border-2 border-blue-900 my-4"/>
        </div>
    );
};

export default SectionHeaders;