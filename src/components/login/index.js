/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props);
    state={
      id:''
    }
  }
  login =()=>{
    fetch('http://10.1.4.233:3000/api/v1/'+this.state.id).then(res=>res.json()).then(res=>
  {
    if(res.length>0){
      this.props.navigation.navigate('Home')
    }
    else{
        console.warn("error");
        
    }
  })
  }
  render() {
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        colors={['#8a65a0', '#705596', '#2f2f7d']}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.firstrow} />
          <View style={styles.secondrow} />
          <View style={styles.thirdrow}>
            <TextInput 
            placeholder='Visa'
            style={{
              backgroundColor: '#ffffff', height: 50,
              width: 320}} 
              onChange={(text)=>{this.setState({id:text})}}
              />
          </View>
          <View style={styles.fourthrow}>
            <TouchableOpacity style={styles.Button} onPress={()=>this.login}>
              <Text style={styles.ButtonText}>{'Login'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdrow} />
          <View style={styles.fourthrow} />
          <View style={styles.fourthrow} />
          <View style={styles.fourthrow} />
          <View style={styles.fourthrow} />
        </View>
      </LinearGradient>
    );
  }
}
export default Login;
