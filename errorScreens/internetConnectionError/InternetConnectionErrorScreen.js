import React, {Component} from 'react'
import { Text, View } from 'react-native'
import {styles} from './Styles'
import strings from '../../localization/index'

class InternetConnectionErrorScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.errorText}>{strings.errorScreen.errorCode}</Text>
                <Text style={styles.errorText}>{strings.errorScreen.errorText}</Text>
            </View>
        )
    }
}

export default InternetConnectionErrorScreen