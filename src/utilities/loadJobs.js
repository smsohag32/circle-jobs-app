const loadJobsData = async() => {
    const res = await fetch('./jobsData.json');
    const data = await res.json();
    return data;
}

export default loadJobsData;