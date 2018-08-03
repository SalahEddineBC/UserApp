import React, { Component } from 'react';
const { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import PopupDialog from 'react-native-popup-dialog';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  DeviceEventEmitter,
  Picker,
  Image
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import MapView from 'react-native-maps';
import styles from './style';
import socket from '../../../socket';
class Location extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 21.61,
        longitude: 39.156,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  t = () => {
    socket.on('clear-the-way', eventdata => {
      this.props.navigation.navigate('Vibrate', {
        itemId: 86,
        latitude: eventdata.location.latitude,
        longitude: eventdata.location.longitude
      });
    });
  };
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        };
        this.setState({
          location: pos
        });
        this.gotoCurrentLocation();
      },
      error => console.warn(error.message),
      { enableHighAccuracy: true, timeout: 2500, maximumAge: 3600 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      const pos = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.034
      };
      this.setState({
        location: pos
      });
      this.gotoCurrentLocation();
    });
  };
  gotoCurrentLocation = () => {
    const { location } = this.state;
    this.map.animateToRegion({
      latitude: parseFloat(location.latitude),
      longitude: parseFloat(location.longitude),
      latitudeDelta: parseFloat(location.latitudeDelta),
      longitudeDelta: parseFloat(location.longitudeDelta)
    });
  };

  render() {
    let pic = {
      uri:
        'https://cdn3.iconfinder.com/data/icons/menu-icons-1/100/menu-512.png'
    };
    this.t();
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.map = ref)}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          initialRegion={this.state.location}
          style={styles.redbox}
        />
        <LinearGradient
          colors={['#E54188', '#E54188']}
          style={[styles.LinearGradientStyle, styles.submitSos]}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5, 0.6]}
        >
          <TouchableOpacity
            onPress={() => {
              // this.popupDialog.show();
              const t = {
                HelpNeeded: this.state.HelpNeeded,
                _id: '5b634c992f024a0540f2892e',
                location: this.state.location
              };
              socket.emit('request-help', t);
            }}
          >
            <Text style={styles.submitButtonText}>Ask for Help</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Image source={pic} style={styles.burgerMenu} />
      </View>
    );
  }
}
export default Location;
