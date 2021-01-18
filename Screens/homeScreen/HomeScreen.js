import React from "react";
import { View, Text,  Image } from "react-native";
import styles from '../../MyStyles/HomeScreenStyles'
import {Spektr_Logo} from '../../MyImages'
import strings from '../../localization/index'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mainContentImg}>
          <Image source={Spektr_Logo} style={styles.logoImg}/>
        </View>
        <View style={styles.mainContentText}>
          <Text style={styles.mainText}>{strings.homeScreen.mainText}</Text>
        </View>
        <View style={styles.mainInfoText}>
            <Text style={styles.infoText}>{strings.homeScreen.infoText}</Text>
        </View>
    </View>
  );
};



export default HomeScreen;