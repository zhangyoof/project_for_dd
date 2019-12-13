import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
export const sty = StyleSheet.create({
    container:{
        flex:1
    },
    everyBox:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15
    },
    textSty:{
        marginRight:15,
    }
})