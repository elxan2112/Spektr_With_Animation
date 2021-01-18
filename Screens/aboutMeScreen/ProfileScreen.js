import React from "react";
import { View, Text, Image } from "react-native";
import {styles} from '../../MyStyles/ProfileScreenStyles'
import {smouq} from '../../MyImages'
import strings from '../../localization/index'

const ProfileScreen = () => {
    return(
        <View style = {styles.container}>
            <Image source={smouq}></Image>
            <Text style={styles.textStyle}>{strings.aboutMeScreen.profileScreen.name}</Text>
            <Text style={styles.textStyle}>{strings.aboutMeScreen.profileScreen.surname}</Text>
            <Text style={styles.textStyle}>{strings.aboutMeScreen.profileScreen.age}</Text>
        </View>
    )
}

export default ProfileScreen;