import { createStackNavigator } from 'react-navigation';
import {Helpontheway,Cleartheway, Location, Login } from '../src/components';
const RootStack= createStackNavigator(
    {
        Home: Location,
        Login: Login,
        Helpontheway:Helpontheway,
        Cleartheway:Cleartheway
    },
    {
        initialRouteName: 'Home'
    }
);
export default RootStack;
