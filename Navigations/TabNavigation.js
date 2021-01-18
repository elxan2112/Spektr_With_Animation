import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/aboutMeScreen/ProfileScreen';
import {SettingsScreen} from '../Screens/aboutMeScreen/SettingsScreen';
import strings from '../localization/index'

export const Tab = createBottomTabNavigator();

function TabNavigation({navigation}){
    return(
            <Tab.Navigator initialRouteName = {strings.aboutMeScreen.tabNavigation.profile}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: {fontSize: 30},
                }}>
                    <Tab.Screen name = {strings.aboutMeScreen.tabNavigation.profile} component = {ProfileScreen}/>
                    <Tab.Screen name = {strings.aboutMeScreen.tabNavigation.settings} component = {SettingsScreen}/>
            </Tab.Navigator>
    )
}

export default TabNavigation;