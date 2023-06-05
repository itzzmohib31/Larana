
import {View,Text,Image,TextInput,FlatList,TouchableOpacity} from 'react-native';
import {useState,useEffect} from 'react';
import { CategoryEndpoint } from '../utils/util-functions';
import { DataType,ProductType } from '../utils/types';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';
import { useProductsByCategory } from '../services/getProducts';


const CategoryItems=({route}:any)=>{
  const navigation = useNavigation();

    const [Products,setProducts]=useState<DataType>();
    const {title}=route.params;

    const filters = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Popular',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'New',
        },
        {
          id: '58692a0f-3da1-471f-bd96-145571e29d72',
          title: 'Best Seller',
        },
        {
            id: '586914a0f-3da1-471f-bd96-145571e29d72',
            title: 'Price',
          },
      ];
    
      
   const {data,isLoading}=useProductsByCategory(title);



return(

<View>

<View style={{width:'100%',height:'10%',backgroundColor:'#FF1616',padding:20,flexDirection:'row',justifyContent:'space-between'}}>
             <TextInput placeholder={title} style={{backgroundColor:'white',width:'70%',borderRadius:30,padding:7,height:30}} ></TextInput>
             <View style={{flexDirection:'row',justifyContent:'space-around',width:'30%'}}>
                <Icons name='shopping-cart'></Icons>
                <Icons name='chat'></Icons>
                <Icons name='menu'></Icons>
             </View>
            </View>
            
            <View style={{backgroundColor:'white',width:'100%',padding:5}}>
            <FlatList
                data={filters}
                renderItem={({item}) => <Text style={{padding:5,borderRightWidth:1,borderColor:'gray'}} >{item.title}</Text>}
                keyExtractor={(item) => item.id}
                horizontal={true} // Set horizontal prop to true
                showsHorizontalScrollIndicator={false} // Optional: hide horizontal scroll indicator
            />
            </View>



<View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',height:"100%",flexWrap:'wrap'}}>
{data&&data.products.map((e:ProductType,index:number)=>{
   return(
       <View style={{width:'50%'}}>
          <TouchableOpacity onPress={() =>navigation.navigate("ProductScreen",e)}>
          <Image 
               source={require('../assets/download.png')} 
               style={{width:'100%',height:120,borderRadius:20}}
           />
          </TouchableOpacity>
            
           <Text style={{alignItems:'center',textAlign:'center'}}>{e.title}</Text>
           <Text style={{textAlign:'center',color:"#FF1616",fontSize:20}} >${e.price}</Text>

       </View>

   )
})}
</View>

</View>

 
    
)
}

export default CategoryItems;