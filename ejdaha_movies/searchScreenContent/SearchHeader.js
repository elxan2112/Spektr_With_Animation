import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { cleanSearch, loadData} from '../../redux/Action'
import {styles} from '../myStyles/searchScreenStyles/SearchHeaderStyles'
import strings from '../../localization/index'

class SearchHeader extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logoText}>{strings.entertainmentScreen.movieFinder.searchHeader.logoText}</Text>
                <TextInput 
                style={styles.inputText}
                onChangeText = {(text)=> this.urlName = text}
                placeholder={strings.entertainmentScreen.movieFinder.searchHeader.inputText}/>
                <TouchableOpacity onPress={()=>this.props.loadData(this.urlName)} style ={styles.actionBtns}>
                    <Text style={styles.actionBtnsText}>{strings.entertainmentScreen.movieFinder.searchHeader.searchBtn}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.clean()} style ={styles.actionBtns}>
                    <Text style={styles.actionBtnsText}>{strings.entertainmentScreen.movieFinder.searchHeader.cleanSearchBtn}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


function mapDispatchToProps(dispatch){
    return{
        loadData: (name)=> dispatch(loadData(name)),
        clean: () => dispatch(cleanSearch())
    }
}

export default connect(null, mapDispatchToProps)(SearchHeader);