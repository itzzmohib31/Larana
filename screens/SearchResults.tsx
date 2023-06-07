import { useEffect, useState } from 'react';
import {View,Text,TouchableOpacity,Image,ScrollView} from 'react-native';
import { ProductType } from '../utils/types';
import { DataType } from '../utils/types';
const SearchResults=({route})=>{
    const [data,setData]=useState<DataType>();

    useEffect(()=>{
        if(route)
        {
            setData(route.params)
        }

    })

 

    return(
        <View>
    <Text style={{fontSize:20,color:'black',padding:10,textAlign:'center',fontWeight:'bold'}} >Search Results:</Text>

            {data&&data.products.map((e:ProductType,index:number)=>{
    console.log(e);
    return(
      <ScrollView>
        <View>
        </View>
     <TouchableOpacity>
        <View style={{width:100,margin:15}} key={index}> 
            <Image source={{uri:e.thumbnail}} style={{width:'100%',height:120}}/>
            <Text>{e.title}</Text>
            <Text style={{fontSize:20,color:'#FF1616'}}>${e.price}</Text>
        </View>
      </TouchableOpacity>

      </ScrollView>
 
        
    )
})}
        </View>

    )

}

export default SearchResults;