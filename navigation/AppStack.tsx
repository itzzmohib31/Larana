import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import CategoryItems from "../screens/CategoryItems";
import ProductScreens from "../screens/ProductScreens";
import Cart from "../screens/Cart";
import Search from "../screens/Search";
import SearchResults from "../screens/SearchResults";
const Stack = createNativeStackNavigator();

const AppStack=()=>{

    return(
        <Stack.Navigator initialRouteName={"Home"}  screenOptions={{headerShown: false}}>     
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CategoryItems" component={CategoryItems} />
        <Stack.Screen name="ProductScreen" component={ProductScreens} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    )

}

export default AppStack;