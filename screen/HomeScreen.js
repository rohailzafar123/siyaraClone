import React from 'react' ;
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'; 
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DrawerScreen1 from '../screen/Map';
import DrawerScreen2 from '../screen/drawer';
import { createDrawerNavigator } from 'react-navigation-drawer';
const { width, height } = Dimensions.get('window');

// import DrawerScreen2 from '../../screens/drawerScreen/DrawerScreen2' 
// import DrawerScreen3 from '../../screens/drawerScreen/DrawerScreen3' 
// import { Right }from 'native-base';

    const CustomDrawerComponent = (props)=>(   
    <View>

    <SafeAreaView>
          <View style={{
            height:150, backgroundColor:'#35aeff', alignItems:'center', justifyContent:'center',}}>
              <Image source={require('../images/logo.png')} style={{
                height:120,
                 width:120,
                  }} />
          </View>
          <ScrollView>
              <DrawerItems {...props} />
          </ScrollView>  
    </SafeAreaView>
    </View>
     )


    export default createDrawerNavigator( {    
      DrawerScreen1: {
        screen: DrawerScreen1,
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
        }   },

      DrawerScreen2: {
        screen: DrawerScreen2,
        navigationOptions: {
          drawerLabel: 'DrawerScreen2',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
        }   },

      // DrawerScreen3: {
      //   screen: DrawerScreen3,
      //   navigationOptions: {
      //     drawerLabel: 'DrawerScreen3',
      //     drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
      //   }   }, 
      }, 
        {   drawerPosition :"left",   
            contentComponent:CustomDrawerComponent,
            drawerWidth:width * .7,

    });

// import * as React from 'react';
// import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { Container, Button, Header, Content, Left } from 'native-base'
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import Icon from 'react-native-vector-icons/AntDesign'   
// import Location from 'react-native-vector-icons/MaterialIcons'

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import { TextInput } from 'react-native-gesture-handler';
// // import { PROVIDER_GOOGLE } from 'react-native-maps';
// const { width, height } = Dimensions.get('window');

// function Home  ({ navigation }) {
//   return (
    // <Container>
    //   <MapView
    //     provider={ PROVIDER_GOOGLE }
    //     style={{
    //       width: width * 1,
    //       height: height * 1,
    //       position: 'absolute',
    //     }}
    //     initialRegion={{
    //       latitude: 24.8147,
    //       longitude: 67.0707,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421
    //     }}
    //   />

    //   <TouchableOpacity style={{
    //     margin: 10
    //   }}
    //     onPress={() => navigation.openDrawer()}  >
    //     <Icon name='menu-unfold' size={30} />
    //   </TouchableOpacity>

    //   <View style={{
    //     justifyContent:'space-evenly',
    //     // alignItems:'center'
    //     flexDirection: 'row',
    //     position: 'absolute',
    //     bottom: 0,
    //     marginBottom: 15,
    //     // marginLeft: 20,
    //     width:width *1,
    //   }}>
    //     <TextInput style={{
    //       width: width * .75,
    //       backgroundColor: 'white',
    //       borderRadius: 30,
    //       elevation:3,
    //       height:height * .06,
    //       paddingLeft:20,

    //     }}>
    //     </TextInput>

    //     <View style={{
    //       justifyContent:'center',
    //       alignItems:'center',
    //       width: width * .105,
    //       height:height * .06,
    //       backgroundColor: 'white',
    //       borderRadius: 100,
    //       elevation:3,
    //       }}>
    //         <TouchableOpacity>
    //       <Location name='my-location' size={20} />

    //         </TouchableOpacity>

    //     </View>
    //   </View>
    // </Container>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <View><Text>hello</Text>
//       <DrawerItem
//         label="Home"
//         // component={Home}
//         onPress={() => this.Home()}
//       />

//       </View>
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }
// // import React, { Component } from 'react'
// // import { View ,Text ,Dimensions} from 'react-native';
// // // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { NavigationContainer } from '@react-navigation/native';
// // import MapView from 'react-native-maps';
// // import Icon from 'react-native-vector-icons/AntDesign'
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// // const { width, height } = Dimensions.get('window');
// // class Home extends Component{
// //   render(){
// //   return (

// //     <Container>

// //       <MapView 
// //       style={{
// //         width:width * 1,
// //         height:height * 1,
// //         position:'absolute'
// //     }}
// //           initialRegion={{
// //             latitude: 24.8147,
// //             longitude: 67.0707,
// //             latitudeDelta: 0.0922,
// //             longitudeDelta: 0.0421
// //           }}
// //         />
// //         <View>

// //         </View>
// //             <TouchableOpacity style={{
// //         margin:10
// //     }}
//   // onPress={() => navigation.openDrawer()}  >
// //               <Icon name='menu-unfold' size={30} />
// //             </TouchableOpacity>
// //     </Container>


// //   );
// // }
// // }
// // export default Home;

// // function NotificationsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button onPress={() => navigation.goBack()} title="Go back home" />
// //     </View>
// //   );
// // }

// // const Drawer = createDrawerNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Drawer.Navigator initialRouteName="Home" >
// //         <Drawer.Screen name="Home" component={HomeScreen}  />
// //         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );
// // }