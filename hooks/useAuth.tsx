import { useEffect, useState } from "react";
import userAccounts from "../utils/useraccounts";
import AsyncStorage from '@react-native-async-storage/async-storage';


type userType={
    username:string,
    password:string
}



const useAuth=(account:userType)=>{


    const storeData = async function(){
        try {
          await AsyncStorage.setItem("User", JSON.stringify(account));
          setLoginStatus(true);
        } catch (error) {
          console.log(error);
        }

      };
    const [loginStatus,setLoginStatus]=useState<boolean>();


   useEffect(()=>{
    let auth = userAccounts.find(user => user.username === account.username&&user.password===account.password);
    auth?storeData():setLoginStatus(false);
  
   },[account])
 
   return loginStatus;
    

}

export default useAuth;