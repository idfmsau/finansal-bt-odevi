import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center"
    },
    header:{
        flex:1,
        marginBottom:35
    },
    imageBackground: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        height:'100%'
    },
    footer: {
        flex:2
    },
    title:{
        marginLeft:5,
        color:'black',
        fontWeight:'bold',

    },
    action:{
        marginBottom:5,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2"
    },
    textInput:{
        color:'gray',
        flex:1,
        marginTop:5,
        marginLeft:5,
        paddingBottom:5,
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent: 'center'
    },
    button:{
        backgroundColor:'black',
        paddingVertical:10,
        marginRight:10,
        marginLeft:10,
        marginTop:20,
        borderRadius:100,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize:18
    }
})

export default styles;