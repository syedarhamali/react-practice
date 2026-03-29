import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url)
      setData(data.data)
    }
    fetchData()
  }, [url]);


  const getUserData = () =>{
    console.log(data, "data from useFetch hook user data")
  }

   const getAdminData = () =>{
    console.log(data, "data from useFetch hook Admin data")
  }

  return [data , getAdminData , getUserData];
};

export default useFetch;