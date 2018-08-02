import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  DeviceEventEmitter,
  Picker
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import MapView from 'react-native-maps';
import styles from './style';
import Emit from '../../../socket';
class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 0.0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  data = [
    {
      value: 'Banana'
    },
    {
      value: 'Mango'
    },
    {
      value: 'Pear'
    }
  ];

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
        //this.gotoCurrentLocation();
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
      // this.gotoCurrentLocation();
    });
  };
  /* gotoCurrentLocation = () => {
    const { location } = this.state;
    this.map.animateToRegion({
      latitude: parseFloat(location.latitude),
      longitude: parseFloat(location.longitude),
      latitudeDelta: parseFloat(location.latitudeDelta),
      longitudeDelta: parseFloat(location.longitudeDelta)
    });
  };
*/
  render() {
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
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <TouchableOpacity
            style={[
              styles.submitButton,
              { flex: 1, justifyContent: 'center', alignItems: 'center' }
            ]}
            onPress={() => {

              const t = {
                HelpNeeded: this.state.HelpNeeded,
                userId: 3,
                location: this.state.location
              };
              Emit('request-help', t);
            }}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
          <Picker
            selectedValue={this.state.HelpNeeded}
            style={{ flex: 4 }}
            onValueChange={(itemValue, itemIndex) =>{
              this.setState({ HelpNeeded: itemValue }
              );
              console.warn(this.state.HelpNeeded);
              
            }
            }
          >
            <Picker.Item label="Healt Help" value="help" />
            <Picker.Item label="Lost" value="lost" />
          </Picker>
        </View>
      </View>
    );
  }
}
export default Location;
