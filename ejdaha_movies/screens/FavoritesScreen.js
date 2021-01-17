import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native'
import {cleanFavorites, deleteFromFavorites} from '../../redux/Action'
import {styles} from '../myStyles/favoriteScreenStyles/FavoritesStyles'

class FavoritesScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.clearBtn}
            onPress={()=>this.props.clear()}>
                <Text style={styles.clearBtnText}>Clear all</Text>
            </TouchableOpacity>
                <ScrollView>
                    {this.props.favoritData.map((all, index) =>(
                        <View key={index} style={styles.contentContainer}>
                            <Image style={styles.contentImages}
                            source={{uri: all?.show?.image?.medium ?? 'https://cs9.pikabu.ru/post_img/big/2016/09/14/9/1473865516186911796.jpg'}}/>
                            <Text style={styles.contentText}>{all.show.name}</Text>
                            <TouchableOpacity onPress={()=>this.props.delete(index)}>
                                <Text style={styles.contentBtnText}>Delete from favorite</Text>
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
        clear: ()=>dispatch(cleanFavorites()),
        delete: (elementIndex)=>dispatch(deleteFromFavorites(elementIndex))
    }
}

function mapStateToProps(state){
    return{
        favoritData: state.reducerForFavorites.favoritData
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(FavoritesScreen);