import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goback, hr80, logo1, row } from '../../../CommonCss/pagecss'
import icon from '../../../../assets/icon.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/Formcss'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Signup_AccountCreated = ({ navigation }) => {
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


            <View style={row}>
                <MaterialCommunityIcons name="check-decagram" size={30} color="#99B83C" />
                <Text style={formHead2}> Account Created Successfully</Text>
            </View>

            <Text style={formbtn}
                onPress={() => navigation.navigate('Login')}
            >
                Let's Roll
            </Text>
        </View>
    )
}


export default Signup_AccountCreated

const styles = StyleSheet.create({})