import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `PMBIA ${title}`;
    }, [title])
};

export default useTitle;