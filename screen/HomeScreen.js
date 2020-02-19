import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Button, Header, Content, Left } from 'native-base'
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/AntDesign'
import Location from 'react-native-vector-icons/MaterialIcons'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { TextInput } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

function Feed({ navigation }) {
  return (
    <Container>
      <MapView
        style={{
          width: width * 1,
          height: height * 1,
          position: 'absolute',
        }}
        initialRegion={{
          latitude: 24.8147,
          longitude: 67.0707,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />

      <TouchableOpacity style={{
        margin: 10
      }}
        onPress={() => navigation.openDrawer()}  >
        <Icon name='menu-unfold' size={30} />
      </TouchableOpacity>

      <View style={{
        justifyContent:'space-evenly',
        // alignItems:'center'
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        marginBottom: 15,
        // marginLeft: 20,
        width:width *1,
      }}>
        <TextInput style={{
          width: width * .75,
          backgroundColor: 'white',
          borderRadius: 30,
          elevation:3,
          height:height * .06
        }}>
        </TextInput>
        <View style={{
          justifyContent:'center',
          alignItems:'center',
          width: width * .1,
          height:height * .06,
          backgroundColor: 'white',
          borderRadius: 100,
          elevation:3,
          }}>
          <Location name='my-location' size={30} />

        </View>
      </View>
    </Container>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
// import React, { Component } from 'react'
// import { View ,Text ,Dimensions} from 'react-native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import MapView from 'react-native-maps';
// import Icon from 'react-native-vector-icons/AntDesign'
// import { TouchableOpacity } from 'react-native-gesture-handler';
// const { width, height } = Dimensions.get('window');
// class Home extends Component{
//   render(){
//   return (

//     <Container>

//       <MapView 
//       style={{
//         width:width * 1,
//         height:height * 1,
//         position:'absolute'
//     }}
//           initialRegion={{
//             latitude: 24.8147,
//             longitude: 67.0707,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421
//           }}
//         />
//         <View>

//         </View>
//             <TouchableOpacity style={{
//         margin:10
//     }}
  // onPress={() => navigation.openDrawer()}  >
//               <Icon name='menu-unfold' size={30} />
//             </TouchableOpacity>
//     </Container>


//   );
// }
// }
// export default Home;

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home" >
//         <Drawer.Screen name="Home" component={HomeScreen}  />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }