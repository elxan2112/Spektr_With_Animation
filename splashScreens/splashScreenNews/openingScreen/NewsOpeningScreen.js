import React, {Component} from "react";
import NewsScreen from '../../../Screens/newsScreen/NewsScreen'
import NewsOpeningSplash from '../openingSplash/NewsOpeningSplash'
import {connect} from 'react-redux';
import {changeNewsBlank} from '../../../redux/Action'

class NewsOpeningScreen extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.changeStatus(this.status)
    }

    status = false

    render(){
        if(this.props.receivedBooleanStatus === true){
            return <NewsScreen/>
        }
        else{
            return <NewsOpeningSplash/>
        }
    }
}

function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return{
        changeStatus: (booleanStatus)=> dispatch(changeNewsBlank(booleanStatus))
    }
}

function mapStateToProps(state) {
    return{
        receivedBooleanStatus: state.newsSplashReducer.visibleStatus
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(NewsOpeningScreen)