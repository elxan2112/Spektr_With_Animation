import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EntertainmentScreen from '../Screens/entertainmentScreen/EntertainmentScreen';
import MovieFinder from '../ejdaha_movies/MovieFinder'
import strings from '../localization/index'

const Stack = createStackNavigator();

const EntertainmentStackNavigation = ({navigation}) => {

    return(
        <Stack.Navigator initialRouteName = {strings.entertainmentScreen.entertainmentText}>
            <Stack.Screen name= {strings.entertainmentScreen.entertainmentText} component = {EntertainmentScreen}/>
            <Stack.Screen name= "Ejdaha Movies" component = {MovieFinder}/>
            
        </Stack.Navigator>
    )
}

export default EntertainmentStackNavigation;