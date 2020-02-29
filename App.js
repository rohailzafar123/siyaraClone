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
import Next from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
class Login extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>

        {/* BackGroung image /Logo /Heading */}
        <View style={{
          flex: 6,
        }}>
          <View style={{
            position: 'absolute',
          }}>
            <Image source={require('./images/logIn-Background.jpg')}
              style={{
                width: wp('100%'),
                height: height * .75,
              }} />
            <View style={styles.heading}>
              <Text style={{
                color: 'black',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
                ENTER YOUR
              </Text>
              <Text style={{
                color: '#35aeff',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
                PHONE NUMBER
              </Text>
            </View>
          </View>
          <View style={styles.backgroundImager}>
            <Image source={require('./images/logo.png')}
              style={{
                alignSelf: 'center',
                width: width * .32,
                height: height * .15,
                marginTop: 40,
              }} />

          </View>

        </View>


        {/* Number */}
        <View style={{
          flex: 1,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 20,
          }}>
            <Text style={{
              borderBottomWidth: 2,
              paddingBottom: 15,
              marginTop: 13.5,
              paddingHorizontal: 10,
              color: '#464646',
              borderBottomColor: '#35aeff',
              // fontWeight: 'bold',

            }}>
              +92
            </Text>
            <TextInput
              placeholder='3xxxxxxxxx'
              keyboardType={'numeric'}
              maxLength={11}
              placeholderTextColor='#464646'
              style={{
                width: width * .7,
                borderBottomWidth: 2,
                borderBottomColor: '#35aeff',
                // fontWeight: 'bold',
              }}>

            </TextInput>
          </View>

        </View>

        {/* Next Button */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginBottom: 20,
            flex: 1,
          }} >

          <View style={{
            width: width * .7,
          }}>
            <Text style={{
              color: '#464646'
            }}>
              An OTP code will be send to your number after clicking next.
                </Text>
          </View>
          <View>
            <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate('Signup')}>
              <View >
                <Next name='arrow-right' size={20} color='white' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    width: wp('10%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
    elevation: 3,

  },
});

export default Login;