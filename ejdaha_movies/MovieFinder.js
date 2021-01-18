import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import strings from '../localization/index'

const Tab = createBottomTabNavigator();

class TabNavigation extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Tab.Navigator initialRouteName = {strings.entertainmentScreen.movieFinder.tabNavigation.searchScreen}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {fontSize: 30},
          activeBackgroundColor:'gray'
          }}>
              <Tab.Screen name = {strings.entertainmentScreen.movieFinder.tabNavigation.searchScreen} component = {SearchScreen}/>
              <Tab.Screen name = {strings.entertainmentScreen.movieFinder.tabNavigation.favoriteScreen} component = {FavoritesScreen}/>
      </Tab.Navigator>
    )
  }
}

export default TabNavigation;