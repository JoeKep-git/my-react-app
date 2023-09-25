import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const usePizzas = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [pizzas, setPizzas] = useState([]);
    const {get, loadingState} = useGetRequest("/api/pizzas");

    useEffect(() => {
        const fetchPizzas = async () => {
            const pizzas = await get();
            setPizzas(pizzas);           
        };
        fetchPizzas();
    }, [get]);
    return {pizzas, setPizzas, loadingState};
};

export default usePizzas;