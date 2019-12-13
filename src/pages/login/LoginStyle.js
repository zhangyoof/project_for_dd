import React, {StyleSheet, Dimensions, StatusBar} from "react-native";

const {height, width} = Dimensions.get('window');
// import {blueStyle} from "../../services/comstyle"

const WIDTH_PM = width / 375
const styles = StyleSheet.create({
    bigBox: {
        flex: 1,
        marginTop:40,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: StatusBar.currentHeight
    },
    headerBox: {
        alignItems:"center"
    },
    headerImage: {
        width: 96,
        height: 96,
        marginBottom:20
    },
    blank: {
        width: 20,
        height: 20
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center'
    },
    inputBox: {
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative',
        // backgroundColor:'red'
    },
    topInputBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        // backgroundColor:'blue'

    },
    passwordInput: {
        paddingLeft: 10,
        flex: 1
    },
    btnBox: {
        marginTop: 40
    },
    lonSinSty: {
        //backgroundColor: blueStyle.btnStyle,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    lonSinStyTxt: {
        fontSize: 20,
        color: "#fff"
    },
    lowerBox: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20
    },
    leftLowerBox: {
        color: '#ccc'
    },
    rightLowerBox: {
        color: "#3385ff"
    },
    fontAway: {
        fontSize: 20,
    },
    passwordBox: {
        height: 50,
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    eleSty: {}
});


export {
    styles,
};
