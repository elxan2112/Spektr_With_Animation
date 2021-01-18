import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#d9dbd8',
    },
    mainContentImg:{
        flex: 0.2,
    },
    logoImg:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    mainContentText:{
        flex: 0.1,
        alignItems:'center',
    },
    mainText:{
        fontSize: 30,
        marginTop: 30,
        textAlign: 'center'
    },
    mainInfoText:{
        flex: 0.9,
        justifyContent:'center',
        alignItems: 'center',
    },
    infoText:{
        fontSize: 35,
        color: '#53805a',
        textAlign: 'center'
    },
  });

  export default styles