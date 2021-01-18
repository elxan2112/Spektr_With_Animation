import React, { Component } from 'react'
import {styles} from './Styles'
import {Animated, View, Easing, ImageBackground} from 'react-native'
import{ newsPaper2} from '../../images'
import {connect} from 'react-redux'
import {changeNewsBlank} from '../../../redux/Action'

class NewsOpeningSplash extends Component {

  constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    Animated.timing(
        this.animatedValue,
        {
            toValue:1,
            duration:2000,
            easing: Easing.ease,
            useNativeDriver: false,
            delay:0
        }).start(() => setTimeout(this.props.changeStatus, 1000, this.status))
  }
  status = true

  render () {
    const  spinTextLeftRight= this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['735deg', '0deg']
    })
    const spinTextTopBottom = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['-275deg', '360deg']
    })
    const movingTextTopBottom = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-400, 0]
    })
    const movingTextLeftRight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 0]
    })
    return (
      <View style={styles.container}>
      <ImageBackground source={newsPaper2} style={styles.backImage}>
        <Animated.View style={{flexDirection: 'row'}}>
          <Animated.Text style={{...styles.firstLetter, top: movingTextTopBottom, transform: [{rotate: spinTextTopBottom}] }}>N</Animated.Text>
          <Animated.Text style={{...styles.secondLetter, left: movingTextLeftRight, transform: [{rotate: spinTextLeftRight}] }}>E</Animated.Text>
          <Animated.Text style={{...styles.thirstLetter, right: movingTextLeftRight, transform: [{rotate: spinTextTopBottom}] }}>W</Animated.Text>
          <Animated.Text style={{...styles.fourtLetter, bottom: movingTextTopBottom, transform: [{rotate: spinTextLeftRight}] }}>S</Animated.Text>
        </Animated.View>
      </ImageBackground>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch)
  return{
      changeStatus: (booleanStatus)=> dispatch(changeNewsBlank(booleanStatus))
  }
}

export default connect (null, mapDispatchToProps)(NewsOpeningSplash)