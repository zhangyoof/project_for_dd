import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
export default styles = StyleSheet.create({
    container: {
        // paddingLeft:20,
        // paddingRight:20,
        // paddingBottom:20,
    },
    projectHeaderSty:{
        marginLeft:20,
        marginRight:20,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        alignItems:"center",
    },

    textSty:{

        fontSize:18
    },
    content:{
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        alignItems: 'center'
    },
    projectImgSty:{
        width:75,
        height:75,
        marginRight: 20
    },
    projectName:{
        fontSize:15,
    },
    otherName:{
        fontSize:15,
        color:"#a99b99",
        paddingTop:3,
        overflow:'hidden'
    }

})
