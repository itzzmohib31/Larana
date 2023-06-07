import { Text,View,StyleSheet,TextInput,Image,Button } from "react-native";
import Buttons from "../components/Buttons";
import {useState,useContext} from 'react';
import { AuthContext } from "../navigation/AuthProvider";



export default function Login({navigation}): JSX.Element {

  const {login}=useContext(AuthContext);


  const [userData, setUserData] = useState<userType>({
    username: '',
    password: '',
  });


  const handleInputChange = (key:string, value:string) => {
    setUserData((prevFormData:{username:string,password:string},) => ({
      ...prevFormData,
      [key]: value,
    }));
  };


 
  return (
    <View style={styles.container}>

      <Image 

      source={require('../assets/LoginImg.png')} 
      style={{width:'100%',height:'40%'}}
      
      />


     <View style={{width:'100%', height:'60%',backgroundColor:'white',borderTopRightRadius :20,borderTopLeftRadius :20}} >
     <View style={styles.logincontainer} >

        <Text style={styles.mainheading} >Login</Text>
        <Text style={{fontSize:12,textAlign:'center'}} >Sign in to continue</Text>


        <View style={{width:'80%',paddingTop:10}}>
        <Text>Username</Text>
        <TextInput onChangeText={(text) => handleInputChange('username', text)}  style={styles.input}  ></TextInput>
        </View>

        <View style={{width:'80%',paddingTop:10}}>
        <Text>Password</Text>
        <TextInput  onChangeText={(text) => handleInputChange('password', text)} secureTextEntry style={styles.input}></TextInput>
        </View>


        <Buttons text='Login' method={()=>login(userData.username,userData.password)} />
        {/* <Button onPress={Submit} title="Login" ></Button> */}
        <View style={{marginTop:10}} >
          <Text>Don't have an account?   <Text onPress={() => navigation.navigate('Register')}  style={{color:'#FF1616'}} >Create a new account</Text> </Text>
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

  },
  logincontainer:{
   width:'100%',
   margin:'auto',
   justifyContent:"center",
   flex:1,
   alignItems:'center'

  },
  mainheading: {
    fontSize:35,
    color:'black',
    textAlign:'center',
    fontWeight:'400'
  },
  input:{
    backgroundColor:'whitesmoke',
    borderRadius:20,
    marginTop:10,
    padding:10,

  }
 
});

