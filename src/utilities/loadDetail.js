
const loadDetails = async({params}) => {
    const res = await fetch('/jobsData.json')
    const data = await res.json();
    const id = params.id
    const jobDetail = data.find(job => job.id == parseInt(id))

    return jobDetail;
} 


export default loadDetails;