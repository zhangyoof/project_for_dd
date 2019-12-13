import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');

export default sty = StyleSheet.create({
    container:{
        flex:1
    },
    imgBox:{
        paddingTop:30,
        paddingBottom:20,
        justifyContent:"center",
        alignItems:"center"
    },
    imgSty:{
        width:150,
        height:150,
        marginBottom:15
    },
    aboutFont:{
        fontSize:20
},
    aboutBtnSty:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop: 10,
        paddingBottom: 10
    },
    circle:{
        marginRight:10,
        width:10,
        height:10,
        borderRadius:5
    }

})