import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
export default styles = StyleSheet.create({
    FlatListSty:{
        flex:1,
        paddingLeft:20,
        paddingRight: 20,
    },
    moduleEvery:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        paddingTop:5,
        paddingBottom:5,
    },
    moduleTitleSty:{
        fontSize: 16

    },
    moduleDateSty:{
        marginTop:5,
        color:'#999999'
    },
    ButtonTextSty:{
        color:"#fff",
        paddingTop: 5,
        paddingBottom: 5
    },
    ButtonSty:{
        paddingLeft:5,
        paddingRight:5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    everyModuleRightStyle:{
        flex:1,paddingLeft:10,paddingRight:10,justifyContent:"flex-end"
    }
})