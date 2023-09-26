import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useSides = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [sides, setSides] = useState([]);
    const {get, loadingState} = useGetRequest("/api/sides");

    useEffect(() => {
        const fetchSides = async () => {
            const sides = await get();
            setSides(sides);           
        };
        fetchSides();
    }, [get]);
    console.log(sides)
    return {sides, setSides, loadingState};
};

export default useSides;