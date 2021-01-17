import React, {Component} from 'react'
import { ImageBackground, View, Animated, Text } from 'react-native'
import {cosmos, mars} from '../../images'
import styles from './Styles'
import {connect} from 'react-redux'

const array = [];
for (let i=0; i<3; i++){
    array.push(i)
}


class WaitingScreen extends Component{
    constructor(props){
        super(props)
        this.animatedValue=[]
        array.forEach((value)=>{this.animatedValue[value]=new Animated.Value(0)})
    }

    componentDidMount(){
        this.animation()
    }

    animation(){
            array.forEach((value)=>{this.animatedValue[value].setValue(0)})
            const planArray = array.map((item)=>{
            return Animated.timing(
                this.animatedValue[item],
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            )
        })
        console.log(planArray)
        if(this.props.visibleStatus === true){
            Animated.sequence(planArray).start(()=>this.animation())
        }
        else{
            Animated.sequence(planArray).stop()
        }
        
        
    }


    render(){
        const marsArray = array.map((item, index) => {
            return(
                <Animated.Image key={index} source={mars} 
                style={{...styles.loadingArr, opacity: this.animatedValue[item]}}/>
            )
        })

        return(
            <ImageBackground source={cosmos} style={styles.backImage}>
                <View style={styles.loadingTextView}>
                    <Text style={styles.loadingText}>
                        Waiting!
                    </Text>
                </View>
                <View style={styles.loadingArrView}>
                    {marsArray}
                </View>
            </ImageBackground>
        )
    }
}

function mapStateToProps(state){
    return{
        visibleStatus: state.movieLoadingSplashReducer.visibleStatus,
    }
}

export default connect (mapStateToProps)(WaitingScreen);