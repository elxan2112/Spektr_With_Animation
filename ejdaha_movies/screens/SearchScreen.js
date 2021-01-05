import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
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
            <ScrollView>
                <SearchMainView/>
            </ScrollView>
        </View>
    )
    }
}

export default SearchScreen;