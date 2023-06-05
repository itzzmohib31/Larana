import { Text,View,StyleSheet,TextInput,Image } from "react-native";
import Buttons from "../components/Buttons";
function Register({navigation}:any): JSX.Element {

 
 
  return (
    <View style={styles.container}>

      <View 
      style={{width:'100%',height:'15%'}}
      />


     <View style={{width:'100%', height:'85%',backgroundColor:'white',borderTopRightRadius :20,borderTopLeftRadius :20}} >
     <View style={styles.logincontainer} >

        <Text style={styles.mainheading} >Create A New Account</Text>
        <Text style={{fontSize:12,textAlign:'center'}} >Sign in to continue</Text>


        <View style={{width:'80%',paddingTop:10}}>
        <Text>Name</Text>
        <TextInput style={styles.input}  ></TextInput>
        </View>

        <View style={{width:'80%',paddingTop:10}}>
        <Text>Username</Text>
        <TextInput style={styles.input}></TextInput>
        </View>

        {/* <View style={{width:'80%',paddingTop:10}}>
        <Text>Date Of Birth</Text>
        <TextInput style={styles.input}></TextInput>
        </View> */}

        <View style={{width:'80%',paddingTop:10}}>
        <Text>Password</Text>
        <TextInput secureTextEntry style={styles.input}></TextInput>
        </View>

        <View style={{width:'80%',paddingTop:10}}>
        <Text>Confirm Password</Text>
        <TextInput secureTextEntry style={styles.input}></TextInput>
        </View>


        <Buttons text='Register' />
        <View style={{marginTop:10}} >
          <Text>Already have an account? <Text style={{color:'#FF1616'}} onPress={() => navigation.navigate('Login')}>Login</Text> </Text>
        </View>

        </View>

     </View>
     
    </View>
  
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    height:'100%',
    backgroundColor:'#FF1616',
    maxHeight:'100%'

  },
  logincontainer:{
   width:'100%',
   justifyContent:"center",
   flex:1,
   alignItems:'center'

  },
  mainheading: {
    fontSize:25,
    color:'black',
    textAlign:'center',
    fontWeight:'400',
  },
  input:{
    backgroundColor:'whitesmoke',
    borderRadius:20,
    marginTop:10,

  }
 
});

export default Register;
