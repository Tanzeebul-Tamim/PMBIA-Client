import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        if (location.pathname == '/') {
            document.title = 'Professional Mountain Biking Instructors Association'
        }
        else {
            document.title = `PMBIA ${title}`
        }
    }, [title])
};

export default useTitle;