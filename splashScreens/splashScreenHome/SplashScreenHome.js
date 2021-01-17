import React, {Component} from 'react';
import { View, Animated, Easing } from 'react-native';
import {helloFriend} from '../images'
import styles from './Style'
import {connect} from 'react-redux'
import {blank} from '../../redux/Action'


class MainScreen extends Component{
  constructor(props){
    super(props)
    this.animatedValueLogo = new Animated.Value(0)
  }
  componentDidMount () {
    this.animate()
  }

  animate () {
        Animated.timing(
            this.animatedValueLogo,
            {
                toValue:1,
                duration:5000,
                easing: Easing.linear,
                useNativeDriver:true
            }).start(()=>this.props.changeStatus(this.booleanStatus))
}
booleanStatus = false
  render(){

    const logoImages = this.animatedValueLogo.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0],
      })
    return(
      <View style={styles.container}>
        <Animated.Image source={helloFriend} style={{...styles.logoImage, opacity: logoImages}}/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return{
        changeStatus: (booleanStatus)=> dispatch(blank(booleanStatus))
    }
}

export default connect (null, mapDispatchToProps)(MainScreen)