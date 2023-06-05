import { Text,View,Image, TextInput,Button} from "react-native";
import Buttons from "../components/Buttons";
import Icons from "../components/Icons";
const ProductScreens=({route}:any)=>{
    const {title,description,price,discountPercentage,rating,stock,brand,category}=route.params;

    return(
        <View>
            <View>
            <View style={{width:'100%',backgroundColor:'#FF1616',padding:20,flexDirection:'row',justifyContent:'space-between'}}>
             <TextInput placeholder='Search'  style={{backgroundColor:'white',width:'70%',borderRadius:30,padding:7,height:30}} ></TextInput>
             <View style={{flexDirection:'row',justifyContent:'space-around',width:'30%'}}>
                <Icons name='shopping-cart'></Icons>
                <Icons name='chat'></Icons>
                <Icons name='menu'></Icons>

             </View>
            </View>
            </View>


            <View style={{padding:30,height:'100%',backgroundColor:'white'}}>
            
            <View style={{height:'40%'}}>
            <Image 
               source={require('../assets/download.png')} 
               style={{width:'100%',height:240,borderRadius:20,marginTop:40}}
           />
            </View>
            

           <View style={{padding:10,height:'50%'}}>
          
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:30,fontWeight:'bold',color:'black'}} >{title}</Text>
          <Text style={{ fontSize:30,color:'#FF1616',fontWeight:'bold'}} >${price}</Text>
          </View>


            <Text style={{color:'black'}}>{rating}</Text>

         
         <View>
         <Text style={{color:'black',fontWeight:'bold',fontSize:20,paddingTop:10}} >Product Description</Text>
         <Text style={{fontSize:17,paddingTop:10}} >{description}</Text>
         </View>

         <Buttons text='Add To Cart' ></Buttons>




           </View>
        






        </View>


        </View>

        

    )



}

export default ProductScreens;