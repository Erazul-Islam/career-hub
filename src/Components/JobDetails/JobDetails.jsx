import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id,} = useParams()
    const job = jobs.find(job => job.id == id)
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(id)
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2 className="text-center text-2xl">Job Details: {id}</h2>
            <div className="grid gap-4 mt-12 mb-12 md:grid-cols-4">
                <div className="border pl-6 pt-6 pr-6 md:col-span-3">
                    <h2 className=""><h1 className="text-2xl font-bold">Job Description:</h1> {job.job_description}</h2>
                    <p> <h1 className="text-2xl mt-6 font-bold">Job Respponsibility: </h1> {job.job_responsibility}</p>
                    <p> <h1 className="text-2xl mt-6 font-bold">Educational Requirment:</h1> {job.educational_requirements}</p>
                    <p> <h1 className="text-2xl mt-6 font-bold">Experiences: </h1>{job.experiences}</p>
                </div>
                <div className="border">
                    <h2>Side things</h2>
                    <button onClick={handleApplyJob} className="btn-secondary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;