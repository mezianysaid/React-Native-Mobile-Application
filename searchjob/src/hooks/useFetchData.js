import {useState,useEffect} from 'react'
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'
import { Alert } from 'react-native'
import { useSearchParams } from 'react-router-native';
// const apiKey = RAPID_API_KEY


const useFetchData = (searc,parms) => {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null)
const [searck, setsearck] = useState(searc)
// setsearck()
// const paramss = useSearchParams()
// console.log('saerch', searc, parms)
const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/search`,
  params:{...parms},

  headers: {
    'X-RapidAPI-Key': 'your api',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    'Content-Type':'application/json'
  },
};

const fetchData = async()=>{
    setIsLoading(true);
try {
	const response = await axios.request(options)  
    setData(response.data.data)
    setIsLoading(false)
	// console.log('========>',response.data.data);
} catch (error) {
	console.error(error);
    setError(error)
    Alert.alert("there is something wrong")
} finally {
 setIsLoading(false)
}
}

useEffect(()=>{
    fetchData();
},[])
const refetch = ()=>{
    setIsLoading(true);
    fetchData();
}

return{ data, error,isLoading,refetch}
}

export default useFetchData;