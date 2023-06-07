import React,{useContext,useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import { AuthContext } from "./AuthProvider";
import auth from '@react-native-firebase/auth';
import { UserType } from "../utils/types";
import AuthStack from "./AuthStack";
const Routes=()=>{

    const { user, setUser }= useContext(AuthContext);
    const [initializing,setInitializing]=useState(true);
    console.log(user);
    const AuthStateChanged=(user:UserType)=>{
      setUser(user);
      console.log(user);
      if(initializing)
      {
        setInitializing(false);

      }
      
    }

    useEffect(()=>{
        const subscriber=auth().onAuthStateChanged(AuthStateChanged);
        return subscriber;
    },[])


    //  if(initializing) return null;
     return(
        <NavigationContainer>
            {user?<AppStack/>:<AuthStack/>}
        </NavigationContainer>
     )

}

export default Routes;