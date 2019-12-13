import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
const MODULE_WIDTH=width/5
export default styles = StyleSheet.create({
    shadowStyle: {
        marginLeft:5,
        marginRight:10,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity:0.7,
        shadowRadius: 5,
    },
    container: {
    },
    headerBox: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    entrySty: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,

    },
    entryTextSty: {
        fontSize: 20,
        color: "#fff"
    },
    setSty: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",

    },
    setFontSty: {
        fontSize: 15,
        color: '#fff'
    },
    scrollSty: {
        position:"relative",
        height:120,
        width,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modulesSty: {
        position: 'absolute',
        height:110,
        zIndex:1,
        width,
        paddingLeft: 10,
    },
    moduleChildrenSty: {
        width: 90,
        height:100,
        marginRight: 20,
        // paddingTop:20,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        borderRadius:10,

    },
    imgSty: {
        width: 33,
        height: 34,
        marginBottom:10
    },
    moduleChildrenTextSty:{
        color:'#666',
        textAlign:'center'
    },
    blankStyle:{
        width,
        height:60,
    }
})

