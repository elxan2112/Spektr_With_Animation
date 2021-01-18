import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native'
import { addToFavorit} from '../../redux/Action'
import {styles} from '../myStyles/searchScreenStyles/SearchMainViewStyles'
import WaitingScreen from '../../splashScreens/splashScreenEntertainments/ejdahaMoviesLoading/EjdahaMoviesLoading'
import InternetConnectionErrorScreen from '../../errorScreens/internetConnectionError/InternetConnectionErrorScreen'
import strings from '../../localization/index'

class SearchMainView extends Component{
    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        if(this.props.errorStatus === false){
            <WaitingScreen/>
        }
    }
    render(){
        if(this.props.errorStatus === true){
            if(this.props.visibleStatus === true){
                console.log('-----')
                console.log(this.props.visibleStatus)
                return <WaitingScreen/>
            }
            else{
                console.log('!!!!!')
                console.log(this.props.visibleStatus)
                return(
                    <View style={styles.container}>
                        <ScrollView contentContainerStyle ={styles.resultsScrollContainer}>
                            {this.props.data.map((all, index) =>(
                                <View key={index} style={styles.contentContainer}>
                                    <Image style={styles.contentImages}
                                    source={{uri: all?.show?.image?.medium ?? 'https://cs9.pikabu.ru/post_img/big/2016/09/14/9/1473865516186911796.jpg'}}/>
                                    <Text style={styles.contentText}>{all.show.name}</Text>
                                    <TouchableOpacity onPress={()=>this.props.add(all)}>
                                        <Text style={styles.contentBtnText}>{strings.entertainmentScreen.movieFinder.searchMain.favoriteBtn}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                )
            }
        }
        else{
            return(
                <InternetConnectionErrorScreen/>
            )
        }        
    }
}

function mapDispatchToProps(dispatch){
    return{
        add: (addedData) => dispatch(addToFavorit(addedData))
    }
}

function mapStateToProps(state){
    return{
        data: state.reducerForSearch.data,
        visibleStatus: state.movieLoadingSplashReducer.visibleStatus,
        errorStatus: state.errorScreenReducer.errorStatus
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchMainView);