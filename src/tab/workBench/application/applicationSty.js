import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
export default sty = StyleSheet.create({
    cardBox:{
        marginRight:20,
        marginLeft:20
    },
    leftTextSty:{
        flexDirection:'row'
    },
    titleHeadSty:{
        paddingTop:10,
        paddingBottom:10,
    },
    titleTextSty:{
        fontSize:17
    },
    iconSty:{
        backgroundColor:"red",
        marginRight: 15,
        width:30,
        height:30,
        borderRadius:15
    },
    moduleSty:{
        paddingTop: 10,
        paddingBottom: 10
    }
})