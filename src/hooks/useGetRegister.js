import { useEffect, useState } from "react";

const useGetRegister = (url) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setState(data))
            .catch((err) => console.error(err));
    }, [url]);

    return {
        data: state,
    };
};

export default useGetRegister;