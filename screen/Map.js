import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('window');
class Map extends Component {
  render() {
    return (
        <MapView 
          initialRegion={{
            latitude: 24.8147,
            longitude: 67.0707,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />

    );
  }
}
const styles = StyleSheet.create({
  backgroundImager: {
    position: 'relative',

  },
  heading: {
    marginTop: -90,
    marginLeft: 25,
  },
  nextButton: {
    backgroundColor: '#35aeff',
    width: width * .1,
    height: height * .06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 3,

  },
});

export default Map;