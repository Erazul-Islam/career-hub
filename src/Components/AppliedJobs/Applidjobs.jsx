import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../../Utility/LocalStorage";

const Applidjobs = () => {
    const jobs = useLoaderData();
    useEffect( () =>{
        const storedJobId = getStored();
        if(jobs.length>0){
            const Jobsapplied = jobs.filter(job => storedJobId.includes(job.id))
            console.log(Jobsapplied,jobs)
        }
    },[])
    return (
        <div>
            <h2>Jobs is I applied</h2>
        </div>
    );
};

export default Applidjobs;