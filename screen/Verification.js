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
    Image,
} from 'react-native';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Next from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
class Verification extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
                <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
                <View style={{
                    margin: 10,
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Back name='keyboard-backspace' size={30} color='#002468' />

                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 8,
                    backgroundColor: 'white',
                }}>
                    <View style={{
                        margin: 20,

                    }}>
                        <Text style={{
                            color: '#002468',
                            fontSize: 25,
                            fontWeight: 'bold',

                        }}>
                            VERIFY
                    </Text >
                        <Text style={{
                            color: '#35aeff',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                            YOUR NUMBER
                    </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',

                    }}>
                        <TextInput
                            placeholder='0'
                            keyboardType={'numeric'}
                            maxLength={1}
                            style={{
                                width: width * .15,
                                borderBottomWidth: 2,
                                borderBottomColor: '#35aeff',
                                fontSize: 30,
                                textAlign: "center",

                            }} />
                        <TextInput
                            placeholder='0'
                            maxLength={1}
                            keyboardType={'numeric'}
                            style={{
                                width: width * .15,
                                borderBottomWidth: 2,
                                borderBottomColor: '#35aeff',
                                fontSize: 30,
                                textAlign: "center",
                            }} />
                        <TextInput
                            placeholder='0'
                            maxLength={1}
                            keyboardType={'numeric'}
                            style={{
                                width: width * .15,
                                borderBottomWidth: 2,
                                borderBottomColor: '#35aeff',
                                fontSize: 30,
                                textAlign: "center",
                            }} />
                        <TextInput
                            placeholder='0'
                            maxLength={1}
                            keyboardType={'numeric'}
                            style={{
                                width: width * .15,
                                borderBottomWidth: 2,
                                borderBottomColor: '#35aeff',
                                fontSize: 30,
                                textAlign: "center",

                            }} />

                    </View>
                    <View>
                        {/* <CircleCheckBox
                            onToggle={(checked) => console.log('My state is: ', checked)}
                            labelPosition={LABEL_POSITION.RIGHT}
                            label="Checkbox example"
                            checked={false}
                        /> */}
                    </View>
                </View>
                <View>


                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginBottom: 30,
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: width * .7,
                    }}>
                        <Text style={{
                            color: '#464646',
                            paddingRight: 2,
                        }}>
                            Please enter the Verification code we sent to your phone number.
                </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => this.props.navigation.navigate('Home')}>
                            <View>
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
    nextButton: {
        backgroundColor: '#35aeff',
        width: wp('10%'),
        height: hp('5.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: (width * .1 ) / 1,
        elevation: 3,

    },
});

export default Verification;