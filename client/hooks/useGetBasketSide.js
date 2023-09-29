import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useGetBasketSide = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [basketSide, setBasketSide] = useState([]);
    const {get, loadingStateSide} = useGetRequest("/api/cartSide");

    useEffect(() => {
        const fetchBasket = async () => {
            const baskets = await get();
            setBasketSide(baskets);           
        };
        fetchBasket();
    }, [get]);
    return {basketSide, setBasketSide, loadingStateSide};
};

export default useGetBasketSide;