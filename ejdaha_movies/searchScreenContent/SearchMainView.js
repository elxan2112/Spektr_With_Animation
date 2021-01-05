import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native'
import { addToFavorit} from '../redux/Action'
import {styles} from '../myStyles/searchScreenStyles/SearchMainViewStyles'

class SearchMainView extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle ={styles.resultsScrollContainer}>
                    {this.props.data.map((all, index) =>(
                        <View key={index} style={styles.contentContainer}>
                            <Image style={styles.contentImages}
                            source={{uri: all?.show?.image?.medium ?? 'https://cs9.pikabu.ru/post_img/big/2016/09/14/9/1473865516186911796.jpg'}}/>
                            <Text style={styles.contentText}>{all.show.name}</Text>
                            <TouchableOpacity onPress={()=>this.props.add(all)}>
                                <Text style={styles.contentBtnText}>Add to favorit</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        add: (addedData) => dispatch(addToFavorit(addedData))
    }
}

function mapStateToProps(state){
    return{
        data: state.reducerForSearch.data
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchMainView);