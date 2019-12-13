import React, {StyleSheet, Dimensions} from "react-native";
import COLOR from "../utils/COLOR";

export default styles = StyleSheet.create({
    imgSty : {
        width: 20,
        height: 20
    },
    IconStyle:{
        width: 15,
        height: 15,
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:COLOR.primary_red,
        zIndex:1,
        borderRadius:7
    },
    newsBox:{
        width:30,
        height:30,
        position: 'relative'
    }
})