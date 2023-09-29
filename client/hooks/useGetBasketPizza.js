import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useGetBasketPizza = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [basket, setBasket] = useState([]);
    const {get, loadingState} = useGetRequest("/api/cartPizza");

    useEffect(() => {
        const fetchBasket = async () => {
            const baskets = await get();
            setBasket(baskets);           
        };
        fetchBasket();
    }, [get]);
    return {basket, setBasket, loadingState};
};

export default useGetBasketPizza;
