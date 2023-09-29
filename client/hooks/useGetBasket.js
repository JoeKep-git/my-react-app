import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

export const useGetBasketPizza = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [basket, setBasket] = useState([]);
    const {get, loadingState} = useGetRequest("/api/cartPizza");

    useEffect(() => {
        const fetchBasket = async () => {
            const baskets = await get("/api/cartPizza");
            setBasket(baskets);           
        };
        fetchBasket();
    }, [get]);
    return {basket, setBasket, loadingState};
};


export const useGetBasketSide = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [basket, setBasket] = useState([]);
    const {get, loadingState} = useGetRequest("/api/cartSide");

    useEffect(() => {
        const fetchBasket = async () => {
            const baskets = await get("/api/cartSide");
            setBasket(baskets);           
        };
        fetchBasket();
    }, [get]);
    return {basket, setBasket, loadingState};
};

export const useGetBasketBeverage = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [basket, setBasket] = useState([]);
    const {get, loadingState} = useGetRequest("/api/cartBeverage");

    useEffect(() => {
        const fetchBasket = async () => {
            const baskets = await get("/api/cartBeverage");
            setBasket(baskets);           
        };
        fetchBasket();
    }, [get]);
    return {basket, setBasket, loadingState};
};
