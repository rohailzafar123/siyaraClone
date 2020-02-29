import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = 0.0922
export default class GeolocationExample extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        initialPosition: {
          latitude: 0,
          longitude: 0,
          latiitudeDelta: 0,
          latiitudeDelta: 0
        },
        markerPosition: {
          latitude: 0,
          longitude: 0,
        }
      }   
    }
  
  

  watchID: ?number = null;

  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        const initialRegion = {
          latitude: lat,
          longitude: long,
          latiitudeDelta: LATITUDE_DELTA,
          latiitudeDelta: LONGITUDE_DELTA
        }
        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout:20000, maximumAge:1000})

      this.watchID = Geolocation.watchPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        const lastRegion = {
          latitude: lat,
          longitude: long,
          latiitudeDelta: LATITUDE_DELTA,
          latiitudeDelta: LONGITUDE_DELTA
      }
        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
    })     
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:''
      }}>
        <MapView
        style={{
          left:0,
          right:0
        }}
        region={this.state.initialPosition}
        >
          <MapView.Marker 
          coordinate ={this.state.markerPosition}>

          </MapView.Marker>

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});