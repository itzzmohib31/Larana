import useFetch from "../hooks/useFetch";
import { ScrollView, View, Text, StyleSheet,Image,TouchableOpacity, Alert } from 'react-native';
import {useState,useEffect} from 'react';
import { useProducts } from "../services/getProducts";



const Recommendations=()=>{

     const {data,isLoading}:any=useProducts();

    return(
        


<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:1}}>

{data&&data.products.map((e:any,index:any)=>{
    return(
      <TouchableOpacity>
        <View style={{width:100,margin:15}}> 
            <Image 
                source={require('../assets/download.png')} 
                style={{width:'100%',height:120}}
            />
            <Text>{e.title}</Text>
            <Text style={{fontSize:20,color:'#FF1616'}}>${e.price}</Text>
        </View>
      </TouchableOpacity>
        
    )
})}

</ScrollView>


      
    )
    

}

export default Recommendations;