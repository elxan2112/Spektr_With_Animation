import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { changeName, cleanSearch, loadData} from '../redux/Action'
import {styles} from '../myStyles/searchScreenStyles/SearchHeaderStyles'

class SearchHeader extends Component {
    constructor(props){
        super(props)
    }

    url = "http://api.tvmaze.com/search/shows?q="
    urlChanged = ""

    urlName = 'batman'

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logoText}>Best Movies!</Text>
                <TextInput 
                style={styles.inputText}
                onChangeText = {(text)=> this.urlName = text}
                placeholder='input name of movie'/>
                <TouchableOpacity onPress={()=>this.props.loadData(this.urlName)} style ={styles.actionBtns}>
                    <Text style={styles.actionBtnsText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.clean()} style ={styles.actionBtns}>
                    <Text style={styles.actionBtnsText}>Clean search list</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


function mapDispatchToProps(dispatch){
    return{
        loadData: (name)=> dispatch(loadData(name)),
        search: (name) => dispatch(changeName(dispatch, name)),
        clean: () => dispatch(cleanSearch())
    }
}

export default connect(null, mapDispatchToProps)(SearchHeader);