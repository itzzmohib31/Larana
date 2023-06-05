import {useEffect,useState} from 'react';

type ProductType={
    id: number,
    title:string,
    description:string,
    price:number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail:string,
    images:Array<string>
}

const useFetch=(URL:string)=>{
 
    const [Data,setData]=useState<any>();
    async function Fetch(){
        fetch(URL)
        .then(res => setData(res.json()))
    }
    useEffect(()=>{
       Fetch();
    },[])

 return Data;
}

export default useFetch;