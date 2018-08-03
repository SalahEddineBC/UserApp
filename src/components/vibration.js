import React ,{Component} from 'react';
import styles from './Location/style';
import LinearGradient from 'react-native-linear-gradient';
//import Emit from '../../../socket';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    DeviceEventEmitter,
    Picker,
    Image,
    Button,
    Vibration,
  } from 'react-native';
  


class Vibrate extends Component{


    static navigationOptions = {
        header: null
      };

     DURATION = 10000
     PATTERN = [1000, 2000, 3000]
    
    constructor(props) {
        super(props);
        
    }


    ComponentDidMount=() => {
        
        Vibration.vibrate(this.PATTERN, true)
  
 }

    render()
    {

        let pic={ 
            uri:'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/alert-triangle-512.png'
        };

        return (

        <View>
            <View style={styles.containerVibrate}          
            
                 >
        
                <View style={styles.circle1}/ >
                <View style={styles.circle2}/ >
                <View style={styles.circle3}/ >
                <View style={styles.circle4}/ >
        
            </View>
            
            <Image source={pic} style={styles.warningImage}>

            </Image>

            <Text> YOU ARE  </Text>


        <TouchableOpacity style={styles.submitSosVibreur}
         

         onPress={() => {
          // this.popupDialog.show();
          Vibration.cancel();
         }}
         >
        
         <Text style={styles.submitButtonTextVibreur}> Got it !
              </Text>
         </TouchableOpacity>

        </View>
        )
    }


}







export default Vibrate;