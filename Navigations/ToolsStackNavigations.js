import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Calculator from '../ejdaha_calculator/Calculator';
import ToolsScreen from '../Screens/toolsScreen/ToolsScreen'
import strings from '../localization/index'

const Stack = createStackNavigator();

const ToolsStackNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = {strings.toolsScreen.toolsText}>
      <Stack.Screen name= {strings.toolsScreen.toolsText} component = {ToolsScreen}/>
      <Stack.Screen name= {strings.toolsScreen.ejdahaCalculatorText} component = {Calculator}/>
      
    </Stack.Navigator>
  );
};

export default ToolsStackNavigation;