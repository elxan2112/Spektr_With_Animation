import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigations/DrawerNavigation';
import {connect} from 'react-redux';
import MainScreen from './splashScreens/splashScreenHome/SplashScreenHome';
import {blank} from './redux/Action'
import {AppState} from 'react-native';
import Toast from 'react-native-simple-toast';
import strings from './localization/index'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      appState: AppState.currentState,
    };
  }
  
  componentDidMount(){
    console.log('didmount!!!');
    this.props.changeStatus(this.status);
    AppState.addEventListener('change', this.myhandlerAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.myhandlerAppStateChange);
  }
  
  myhandlerAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      Toast.show(strings.toastText, Toast.LONG)
    }
    this.setState({appState: nextAppState});
  };

  status = true;

  render(){
    if(this.props.receivedBooleanStatus === true){
        return(
          <MainScreen/>
        )
    }
    else{
      return(
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch)
  return{
      changeStatus: (booleanStatus)=> dispatch(blank(booleanStatus))
  }
}

function mapStateToProps(state) {
  return{
    receivedBooleanStatus: state.reducerForSplash.status
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);