import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import icon from '../../assets/icon.png'
import { icons1, logo2 } from '../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const TopNavbar = ({ navigation, page }) => {

    // console.log(page)
    return (
        <View style={styles.container}>
            <MaterialIcons name="library-add" size={24} color="black" style={icons1}
                onPress={() => navigation.navigate('AddPost')} />

            <Image source={icon} style={logo2} />
            {
                page === 'MainPage' &&
                <Ionicons name="chatbubbles" size={24} color="black" style={icons1} onPress
                    ={
                        () => navigation.navigate('All_Chats')
                    } />
            }

            {
                page === 'My_UserProfile' &&
                <Ionicons name="settings-sharp" size={24} color="black" style={icons1} onPress
                    ={
                        () => navigation.navigate('Settings_1')
                    } />
            }
        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        top: 8,
        zIndex: 100,
        backgroundColor: "#5539FF",

    }
})