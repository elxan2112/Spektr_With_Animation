import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import {styles} from '../../MyStyles/ToolsScreenStyles'
import strings from '../../localization/index'

function ToolsScreen({navigation}) {
  return (
    <SafeAreaView style ={styles.allArea}>
      <View style = {styles.container}>
        <Text style = {styles.name}>{strings.toolsScreen.ejdahaCalculatorText}</Text>
        <TouchableOpacity onPress = {() => navigation.navigate(strings.toolsScreen.ejdahaCalculatorText)} style ={styles.button}>
<Text style ={styles.buttonText}>{strings.toolsScreen.openBtn}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ToolsScreen;