import React, {Component} from 'react'
import { Text, View } from 'react-native'
import {styles} from './Styles'

class InternetConnectionErrorScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.errorText}>404 Not Found!</Text>
                <Text style={styles.errorText}>Please check your internet connection and try again.</Text>
            </View>
        )
    }
}

export default InternetConnectionErrorScreen