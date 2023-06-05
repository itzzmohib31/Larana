import {View,Text,TouchableOpacity} from 'react-native';
import Icons from './Icons';
import { useNavigation } from '@react-navigation/native';

const CategoryList1=[
    {
        title:'Womens Clothes',
        icon:''
    },
    {
        title:'Mens Clothes',
        icon:'tshirt'
    },
    {
        title:'Shoes',
        icon:'shoes'
    },
    {
        title:'Cooking Ware',
        icon:''
    },

];

const CategoryList2=[
    {
        title:'Cosmetics',
        icon:''
     },
    {
       title:'BabySupplies',
       icon:''
    },
    {
        title:'Electronics',
        icon:''
    },
    {
         title:'Others',
         icon:''
    }
]

const Categories=()=>{
    const navigation = useNavigation();

    return(
        <View>
        <Text style={{fontSize:25,fontWeight:'bold',color:'black',padding:10}} >Category</Text>
        
        <View style={{ flexDirection:'row', justifyContent:'space-around',width:'100%'}} > 
            {CategoryList1.map((e,index)=>{

                return(
                    <View key={index} style={{width:'15%'}}>
                        <TouchableOpacity  onPress={() =>navigation.navigate('CategoryItems',{title:e.title})} style={{padding:20,backgroundColor:'#FF1616',height:50}}>
                        <Icons name={e.icon} color="white" />
                        </TouchableOpacity>
                        <Text style={{padding:0,textAlign:'center'}}>{e.title}</Text>
                    </View>
                )

            })}
        </View>

        <View style={{ flexDirection:'row', justifyContent:'space-around',width:'100%'}} > 
            {CategoryList2.map((e,index)=>{

                return(
                    <View key={index} style={{width:'15%'}}>
                         <TouchableOpacity onPress={() =>navigation.navigate('CategoryItems',{title:e.title})} style={{padding:20,backgroundColor:'#FF1616',height:50}}>
                        <Icons name={e.icon} color="white" />
                        </TouchableOpacity>
                        <Text style={{padding:0,textAlign:'center'}}>{e.title}</Text>
                    </View>
                )

            })}
        </View>
        
    </View>
    )

}

export default Categories;