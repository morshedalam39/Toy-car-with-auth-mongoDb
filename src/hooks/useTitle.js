import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PlayCarLand`;
    }, [title])
};

export default useTitle;