import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({

    mineBox: {
        paddingTop:20,
        paddingBottom:20,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    mineImageSty: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight:20
    },
    HelpSty:{
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    mineHelpSty:{
        paddingLeft : 20,
        paddingRight: 20
    },
    mineTextSty:{
        color:"red",
        fontSize:100
    },
    goLoginBtnBoxSty:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20
    },
    goLoginBtnSty:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 40
    },
    GoLoginTextSty:{
        fontSize: 18,
        color:"#fff"
    }
})