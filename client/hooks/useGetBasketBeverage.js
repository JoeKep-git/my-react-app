import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useGetBasketBeverage = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [basketBeverage, setBasketBeverage] = useState([]);
    const {get, loadingStateBeverage} = useGetRequest("/api/cartBeverage");

    useEffect(() => {
        const fetchBasketBeverage = async () => {
            const baskets = await get();
            setBasketBeverage(baskets);           
        };
        fetchBasketBeverage();
    }, [get]);
    return {basketBeverage, setBasketBeverage, loadingStateBeverage};
};

export default useGetBasketBeverage;