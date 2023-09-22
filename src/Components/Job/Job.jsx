/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const Job = ({ job }) => {

    const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description } = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 border-[#7E90FE] text-[#9873FF] font-extrabold mr-4 border rounded">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border-[#7E90FE] text-[#9873FF] font-extrabold mr-4 border rounded">{job_type}</button>
                </div>
                <div className=" mt-4 flex justify-between">
                    <h2 className="flex mr-4">
                        <MdLocationOn className="text-2xl mr-2"></MdLocationOn>
                        {location}
                    </h2>
                    <h2 className="flex text-2xl mr-8">
                        <FaBangladeshiTakaSign className="text-2xl"></FaBangladeshiTakaSign>
                        {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;