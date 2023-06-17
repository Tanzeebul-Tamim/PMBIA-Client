// book class
export const bookClass = (studentId, instructorId, classIndex) => {    
    fetch(`${import.meta.env.VITE_API_URL}/book-class`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({studentId, instructorId, classIndex})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
};

// get user's booked classes
export const getBookedClasses = async (studentId) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/book-class/${studentId}`);
    const data = await response.json();
    return data;
}