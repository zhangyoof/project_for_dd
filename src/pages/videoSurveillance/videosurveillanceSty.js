import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
export default styles = StyleSheet.create({
    blank: {
        width: 20,
        height: 20,
    },
    container: {
        flex: 1,
    },
    headerBox: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 60,
    },
    headerChildrenBox: {},
    headerIcon: {},
    headerText: {
        color: '#fff',
        fontSize: 20
    },
    //搜索框的样式
    searchBoxSty: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    searchInputSty: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#e4e4e4",
        paddingLeft: 20
    },
    searchIconSty: {
        width: 40,
        height: 40,
        backgroundColor: 'skyblue',
        borderRadius: 20,
        marginLeft: 10
    },
    projectModuleSty: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    projectModuleText: {
        marginLeft: 5,

    },
    flatListBox: {},
    FlatListSty: {
        height: height - 140,
        borderBottomWidth: 1,
        borderColor: 'red'
    },
    flatListHeader: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
    },
    flatListSty: {
        marginBottom: 20

    },
    FlatListBox: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    FlatListStyClassOne:{
        paddingLeft:20,
        paddingRight: 20,
        height:height-200,
    },
    moduleBoxOne:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    moduleTextClassOne:{
        paddingLeft:10,
        fontSize: 16,
        paddingRight:20
    },
    qinStyle:{
        paddingLeft:20,
        paddingRight: 20,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor:"#ccc"
    },
    blankIconBox:{
        width:20,
        height:20
    }



})