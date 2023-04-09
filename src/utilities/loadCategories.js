const loadCategoriesData = async () => {
    const res = await fetch('./categoriesData.json')
    const data = await res.json();
    return data;
}
export default loadCategoriesData;