// get all instructors
export const getAllInstructors = async (count, search) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors?count=${count}&search=${search}`);
    const data = await response.json();
    return data;
}