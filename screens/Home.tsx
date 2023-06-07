
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import Categories from '../components/Categories';
import CurrentBalance from '../components/CurrentBalance';
import Recommendations from '../components/Recommendations';
import Icons from '../components/Icons';
import Search from './Search';
const Home=({navigation})=>{
    

    return(
        <View style={{height:'100%',backgroundColor:'white'}}>
            <View style={{width:'100%',backgroundColor:'#FF1616',padding:20,flexDirection:'row',justifyContent:'space-between'}}>
             <Search></Search>
             <View style={{flexDirection:'row',justifyContent:'space-around',width:'30%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                <Icons name='shopping-cart'></Icons>
                </TouchableOpacity>
                <Icons name='chat'></Icons>
                <Icons name='menu'></Icons>

             </View>
            </View>

            <View style={{width:'100%', height:'85%',backgroundColor:'white',borderTopRightRadius :20,borderTopLeftRadius :20}} >
            <CurrentBalance></CurrentBalance>
            <Categories></Categories>
            <Text style={{fontSize:25,fontWeight:'bold',padding:10,color:'black'}} >Recommended</Text>
            <Recommendations></Recommendations>
            </View>
        </View>
    )
}

export default Home;