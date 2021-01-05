import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

function TabNavigation({navigation}){
    return(
        <Tab.Navigator initialRouteName = "Search"
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {fontSize: 30},
            activeBackgroundColor:'gray'
            }}>
                <Tab.Screen name = "Search" component = {SearchScreen}/>
                <Tab.Screen name = "Favorites" component = {FavoritesScreen}/>
        </Tab.Navigator>
)
}

export default TabNavigation;
