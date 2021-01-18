import React, { Component } from 'react'
import {View} from 'react-native'
import SearchHeader from '../searchScreenContent/SearchHeader'
import SearchMainView from '../searchScreenContent/SearchMainView'
import {styles} from '../myStyles/searchScreenStyles/SearchScreenStyles'

class SearchScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <View style={styles.container}>
            <SearchHeader/>
            <SearchMainView/>
        </View>
    )
    }
}

export default SearchScreen;