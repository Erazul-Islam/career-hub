/* eslint-disable no-unused-vars */
const getStored = () => {
    const storedApplication = localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication)
    }
}

const saveJobApplication = id => {
    const storedApplication = getStored();
    const exist = storedApplication.find( jobId => jobId === id);
    if(!exist){
        storedApplication.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedApplication))
    }
}
export { getStored, saveJobApplication}