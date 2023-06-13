import { useEffect } from "react"

const useTitle = (title, location) => {
    useEffect(() => {
        if (location) {
            document.title = 'Professional Mountain Biking Instructors Association'
        }
        else {
            document.title = `PMBIA ${title}`
        }
    }, [title, location])
};

export default useTitle;