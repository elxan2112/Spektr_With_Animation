import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { changeName, cleanSearch} from '../redux/Action'
import {styles} from '../myStyles/searchScreenStyles/SearchHeaderStyles'

class SearchHeader extends Component {
    constructor(props){
        super(props)
    }

    url = "http://api.tvmaze.com/search/shows?q="
    urlChanged = ""

    changeText(nameText){
        this.urlChanged = this.url + nameText
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logoText}>Best Movies!</Text>
                <TextInput 
                style={styles.inputText}
                onChangeText = {(text)=> this.changeText(text)}
                placeholder='input name of movie'/>
                <TouchableOpacity onPress={()=>this.props.search(this.urlChanged)} style ={styles.actionBtns}>
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
        search: (name) => dispatch(changeName(dispatch, name)),
        clean: () => dispatch(cleanSearch())
    }
}

export default connect(null, mapDispatchToProps)(SearchHeader);