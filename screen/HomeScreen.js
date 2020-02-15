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
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Next from 'react-native-vector-icons/Feather';
import { RadioGroup } from 'react-native-btr';
import { TextInput } from 'react-native-gesture-handler';

const gender = [
    { label: ' Male ', value: 0 },
    { label: ' Female ', value: 1 },
];
const { width, height } = Dimensions.get('window');
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            radioButtons: [
                {
                    label: 'Male',
                    value: 'Male',
                    checked: false,
                    color: '#0277BD',
                    disabled: false,
                    size: 5

                },
                {
                    label: 'Female',
                    value: 'Female',
                    checked: false,
                    color: '#0277BD',
                    disabled: false,
                    size: 5,
                    // marginLeft:10,
                },
            ]
        }
    }
    render() {
        // let selectedItem = this.state.radioButtons.find(e => e.checked == true);
        // selectedItem = selectedItem ? selectedItem.value : this.state.radioButtons[0].value;
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
                            ENTER YOUR
                    </Text >
                        <Text style={{
                            color: '#35aeff',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                            PERSONAL DETAIL
                    </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',

                    }}>
                        <TextInput
                            placeholder='First Name'
                            style={{
                                width: width * .4,
                                borderBottomWidth: 2,
                                borderBottomColor: '#35aeff',
                            }} />
                        <TextInput
                            placeholder='Last Name'
                            style={{
                                width: width * .4,
                                borderBottomWidth: 2,
                                borderBottomColor: '#35aeff',
                            }} />

                    </View>
                    <View>
                        <View style={{
                            marginLeft: 20,
                        }}>
                            <RadioGroup
                                color='#35aeff'
                                labelStyle={{ fontSize: 14, }}
                                radioButtons={this.state.radioButtons}
                                onPress={radioButtons => this.setState({ radioButtons })}
                                style={{
                                    paddingLeft: 6,
                                    paddingTop: 30,
                                    // paddingLeft:20,
                                    flexDirection: 'row',
                                    // textAlign:'center',

                                }}
                            />

                        </View>

                    </View>
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
                            color: '#464646'
                        }}>
                            By clicking next button you will accept all terms and condition and privacy policy.
                </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Verifica')}>
                            <View style={styles.nextButton}>
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
        width: width * .1,
        height: height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 3,

    },
});

export default Signup;