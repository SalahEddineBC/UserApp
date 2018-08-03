import { createStackNavigator } from 'react-navigation';
import Vibrate from '../src/components/vibration'
import {Helpontheway,Cleartheway, Location, Login } from '../src/components';
const RootStack= createStackNavigator(
    {
        Home: Location,
        Login: Login,
        Helpontheway:Helpontheway,
        Cleartheway:Cleartheway,
        Vibrate:Vibrate,
    },
    {
        initialRouteName: 'Home'
    }
);
export default RootStack;
