import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useBeverages = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [beverages, setBeverages] = useState([]);
    const {get, loadingState} = useGetRequest("/api/beverages");

    useEffect(() => {
        const fetchBeverages = async () => {
            const beverages = await get();
            setBeverages(beverages);           
        };
        fetchBeverages();
    }, [get]);
    return {beverages, setBeverages, loadingState};
};

export default useBeverages;