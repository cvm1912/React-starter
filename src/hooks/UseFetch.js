import { useState, useEffect, useCallback } from "react";

function UseFetch(url, options={}) {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchData = useCallback(async () => {
    setLoading(true);
    try{
        const response = await fetch(url, {...options});
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        if(jsonData) {
            setData(jsonData);
            setLoading(false);
            setError(null);
        }

    }catch(error){
        console.log(error);
        setLoading(false);
        setError(error);
    }
   }, [url])

   useEffect(()=>{
    fetchData();
   },[fetchData])

   return {data, loading, error};
}

export default UseFetch;
