import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    scroolStyle:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearBtn:{
        width: '100%',
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    clearBtnText:{
        fontSize: 20,
    },
    resultsScrollContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer:{
        justifyContent:'center',
        alignItems: 'center'
    },
    contentImages:{
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        height: 300,
        resizeMode: 'contain'
    },
    contentText:{
        fontSize: 25,
        marginTop: 5,
        color: 'red',
    },
    contentBtnText:{
        fontSize: 20,
        marginBottom: 5,
        color: 'green'
    }
})