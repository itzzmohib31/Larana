import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState,useEffect} from 'react';
import Home from "./screens/Home";
import {Alert} from 'react-native';
import CategoryItems from "./screens/CategoryItems";
import Categories from "./components/Categories";
import ProductScreens from "./screens/ProductScreens";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  const [InitialScreen,setInitalScreen]=useState<string>();

  useEffect(()=>{
    getData();

  },[InitialScreen])
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("User");
      if (value !== null) {
        // Data found
        Alert.alert(value);
        setInitalScreen("Home")
      } else {
        // Data not found
        setInitalScreen("Login")
      }
    } catch (error) {
      console.log(error);
    }
  };
  const queryClient=new QueryClient();
 
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName={InitialScreen}  screenOptions={{headerShown: false}}>     
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CategoryItems" component={CategoryItems} />
        <Stack.Screen name="ProductScreen" component={ProductScreens} />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
    
  
  );
}

export default App;