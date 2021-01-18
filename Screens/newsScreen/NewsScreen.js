import React, {Component} from "react";
import { SafeAreaView } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import {WebView} from 'react-native-webview'
import Spinner from 'react-native-loading-spinner-overlay';
import InternetConnectionErrorScreen from "../../errorScreens/internetConnectionError/InternetConnectionErrorScreen";
import strings from '../../localization/index'

class NewsScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: true,
         };
    }

    unsubscribe = NetInfo.addEventListener(state => {
        this.connectedStatus = state.isInternetReachable
      })

    componentDidMount(){
        this.unsubscribe()
    }
    
    componentWillUnmount(){
        this.unsubscribe()
    }

    showSpinner() {
        console.log('Show Spinner');
        this.setState({ visible: true });
    }

    hideSpinner() {
        console.log('Hide Spinner');
        this.setState({ visible: false });
    }
    
    render(){
        if(this.connectedStatus === true){
        return(
            <SafeAreaView style = {{flex: 1}}>
                <Spinner
                visible={this.state.visible}
                textContent={strings.newsScreen.spinnerText}
                textStyle={{ color: '#FFF', fontSize: 30}}
                />
                <WebView
                onload
                scalesPageToFit
                source={{uri: 'https://www.it-world.ru/'}}
                onLoadStart={() => (this.showSpinner())}
                onLoad={() => (this.hideSpinner())}
                />
            </SafeAreaView>
        )
        }
        else{
            return(
                <InternetConnectionErrorScreen/>
            )   
        }
    }
}

export default NewsScreen;