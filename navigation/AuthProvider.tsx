import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { UserType } from '../utils/types';


// export const AuthContext=createContext<{
//     user:UserType | null,
//     setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
//     login:Function,
//     register:Function,
//     logout:Function
// }>({
//     user:null,
//     setUser:()=>{},
// });

export const AuthContext=createContext<any>({});

export const AuthProvider=({children}:{ children: React.ReactNode })=>{

    const [user,setUser]=useState(null);

    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            login:async(email:string,password:string)=>{
                try
                {
                   await auth().signInWithEmailAndPassword(email,password)
                   console.log(email);
                   console.log(password);
                }
                catch(e){
                    console.log(e)
                }
            },
            register:async(email:string,password:string)=>{
                try
                {
                    await auth().createUserWithEmailAndPassword(email,password);
                }
                catch(e){
                    console.log(e)
                }

            },
            logout:async()=>{
                try{
                     await auth().signOut();
                }
                catch(e){
                    console.log(e);
                }
            }
        
        
        
        
        }}
        >

            {children}

        </AuthContext.Provider>
    )
    
}
