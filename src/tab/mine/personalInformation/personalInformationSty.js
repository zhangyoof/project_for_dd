import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    container:{
        flex:1
    },
    moduleBox:{
        marginTop:20,
        paddingLeft:20,
        paddingRight:20,
    },
    everyModuleSty:{
        paddingTop:3,
        paddingBottom:3,
        borderBottomWidth:1,
        borderColor:"#ccc"
    },
    personalImage:{
        width:50,
        height:50,
        borderRadius:25,
    },
    leftFont:{
        fontSize:18,
    },
    IconSty:{
        marginLeft:10
    },
    everyModuleTextSty:{
        paddingTop: 13,
        paddingBottom: 13
    },
    textPersonSty:{
        marginRight:20
    }

})