import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

class TabNavigation extends Component{
  constructor(props){
    super(props)
  }

  render(){
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
}

export default TabNavigation;