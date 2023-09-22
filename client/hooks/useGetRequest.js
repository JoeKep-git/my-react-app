import { useState, useCallback } from 'react';
import loadingStatus from '@/helpers/loadingStatus';

const useGetRequest = (url) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.loading);
    
    //get function
    const get = useCallback(async () => {
        setLoadingState(loadingStatus.loading);
        try {
            const response = await fetch("http://localhost:8000"+url);
            const result = await response.json();
            setLoadingState(loadingStatus.loaded);
            return result;
        } catch {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);
    return {get, loadingState};
};

export default useGetRequest;