import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useToppings = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [toppings, setToppings] = useState([]);
    const {get, loadingState} = useGetRequest("/api/toppings");

    useEffect(() => {
        const fetchToppings = async () => {
            const toppings = await get();
            setToppings(toppings);           
        };
        fetchToppings();
    }, [get]);
    return {toppings, setToppings, loadingState};
};

export default useToppings;