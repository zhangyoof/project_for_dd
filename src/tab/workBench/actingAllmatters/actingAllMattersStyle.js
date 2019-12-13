import React, {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');
export default styles = StyleSheet.create({
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

})