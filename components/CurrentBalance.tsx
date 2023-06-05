import {View,Text,StyleSheet} from 'react-native';
import Icons from './Icons';

const CurrentBalance=()=>{

    return(

        <View style={{backgroundColor:'#FF1616',marginTop:20,width:'70%',flexDirection:'row',padding:10,justifyContent:'space-around'}}>
         
         <View style={{flexDirection:'row-reverse',alignItems:'center'}}>

            <View style={{marginLeft:10}}>
            <Text style={styles.text}>My Balance</Text>
            <Text style={styles.amount}>$2,000</Text>
            </View>

            <View>
            <Icons name="wallet"/>
            </View>


         </View>

         <View style={{flexDirection:'row-reverse',alignItems:'center'}}>
         <View style={{marginLeft:10}}>
            <Text style={styles.text}>My Coins</Text>
            <Text style={styles.amount}>$1,000</Text>
            </View>


            <View>
            <Icons name="coins"/>
            </View>
         </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
   text:{
    color:'white',
    fontWeight:'bold'
   },
   amount:{
    fontSize:20,
    color:"white",
   }
  });

export default CurrentBalance;