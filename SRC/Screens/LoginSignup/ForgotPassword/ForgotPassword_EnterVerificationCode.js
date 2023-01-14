import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goback, hr80, logo1 } from '../../../CommonCss/pagecss'
import icon from '../../../../assets/icon.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/Formcss'
import { MaterialIcons } from '@expo/vector-icons';


const ForgotPassword_EnterVerificationCode = ({ navigation, route }) => {
    const { useremail, userVerificationCode } = route.params;
    console.log(useremail, userVerificationCode)

    const [verificationCode, setVerificationCode] = React.useState('');


    const handleVerificationCode = () => {

        if (verificationCode != userVerificationCode) {
            alert('Invalid Verification Code')
        }
        else {
            alert('Verification Code Matched')
            navigation.navigate('ForgotPassword_ChoosePassword', { email: useremail })
        }

        // navigation.navigate('ForgotPassword_ChoosePassword')
    }
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={icon} style={logo1} />
            <Text style={formHead3}>A verification code has been sent to your email</Text>

            <TextInput placeholder="Enter 6-Digit Code here" style={formInput}
                onChangeText={(text) => setVerificationCode(text)}
            />

            <Text style={formbtn}
                onPress={() => handleVerificationCode()}
            >
                Next
            </Text>
        </View>
    )
}



export default ForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})