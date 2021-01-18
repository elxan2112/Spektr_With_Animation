import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/homeScreen/HomeScreen';
import ToolsStackNavigation from './ToolsStackNavigations'
import TabNavigation from './TabNavigation';
import EntertainmentStackNavigation from './EntertainmentStackNavigation';
import NewsOpeningScreen from '../splashScreens/splashScreenNews/openingScreen/NewsOpeningScreen'
import strings from '../localization/index'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () =>{
  return (
      <Drawer.Navigator initialRouteName = {'Home'}>
        <Drawer.Screen name = {strings.drawer.home} component = {HomeScreen} />
        <Drawer.Screen name = {strings.drawer.news} component = {NewsOpeningScreen}/>
        <Drawer.Screen name = {strings.drawer.entertainment} component = {EntertainmentStackNavigation}/>
        <Drawer.Screen name = {strings.drawer.tools} component = {ToolsStackNavigation}/>
        <Drawer.Screen name = {strings.drawer.aboutMe} component= {TabNavigation} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigator