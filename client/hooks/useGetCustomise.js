import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useGetCustomise = () => {
    //it can use other hooks. So the code from other js files involving the state and the effect can simply be moved to the custom hook,
    const [customise, setCustomise] = useState([]);
    const {get, loadingStateCustomise} = useGetRequest("/api/customise");

    useEffect(() => {
        const fetchCustomise = async () => {
            const customises = await get();
            setCustomise(customises);           
        };
        fetchCustomise();
    }, [get]);
    return {customise, setCustomise, loadingStateCustomise};
};

export default useGetCustomise;