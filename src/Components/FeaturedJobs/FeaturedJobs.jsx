import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <div>
                <h2 className="text-7xl">Featured jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you
                    need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden justify-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-[#9873FF] border-none btn-secondary">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;