import React from "react";
import { View, Text } from "react-native";
import {styles} from '../../MyStyles/SettingsScreenStyles'
import strings from '../../localization/index'

export const SettingsScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>{strings.aboutMeScreen.settingsScreen.mainInfo}</Text>
            <Text style = {styles.advText}>{strings.aboutMeScreen.settingsScreen.otherInfo}</Text>
        </View>
    )
}