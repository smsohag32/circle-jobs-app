// use local storage to manage cart data
const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;
}

const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}


export {
    addToDb,
    getAppliedJob,

}
