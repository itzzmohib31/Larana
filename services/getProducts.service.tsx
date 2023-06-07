import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { CategoryEndpoint } from '../utils/util-functions';

const getProducts=async()=>{
const GetProductsURL='https://dummyjson.com/products?limit=10&skip=10';
const response=await axios.get(GetProductsURL);
return response.data;
}

const getProductsByCategory=async(category:string)=>{
    const GetProductsByCategory=CategoryEndpoint(category);
    const response=await axios.get(GetProductsByCategory);
    return response.data;
}

const searchProducts=async(title:string)=>{

     const Endpoint=`https://dummyjson.com/products/search?q=${title}`;
     const response=await axios.get(Endpoint);
     console.log(response);

     return response.data;
}



export const useProducts=()=>{
    const {data,isLoading}=useQuery(['Products'],getProducts);
    return {data,isLoading}
}

export const useProductsByCategory=(category:string)=>{
    const {data,isLoading}=useQuery([`${category}`],()=>getProductsByCategory(category));
    return {data,isLoading}
}

export const useProductsBySearch=((title:string)=>{
    const {data,isLoading}=useQuery([`${title}`],()=>searchProducts(title));
    return {data,isLoading}
})

