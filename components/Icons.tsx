import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

type IconProps=PropsWithChildren<{
    name:string
}>


const Icons=({name}:any)=>{

    switch (name) {
        case 'coins':
            return <Icon name='coins' size={38} style={{color:'white'}} ></Icon>
            break;

            case 'wallet':
                return <Icon name='wallet' size={38} style={{color:'white'}} ></Icon>
                break;
            case 'search':
                return <Icon name='search' size={38} style={{color:'white'}} ></Icon>
                break;

            case 'tshirt':
                return <Ionicons name='ios-shirt' size={38} style={{color:'white'}} ></Ionicons>
                break;

            case 'shopping-cart':
                return <Icon name='shopping-cart' size={30} style={{color:'white'}} ></Icon>
                break;

            case 'chat':
                return <Entypo name='chat' size={30} style={{color:'white'}} ></Entypo>
                break;

                case 'menu':
                    return <Entypo name='menu' size={30} style={{color:'white'}} ></Entypo>
                    break;
                    case 'cross':
                    return <AntDesign name='delete' size={25} style={{color:'gray'}} ></AntDesign>
                    break;
        
            default:
                return <Icon name='search' size={38} style={{color:'white'}} ></Icon>
                break;
    }

}


export default Icons;