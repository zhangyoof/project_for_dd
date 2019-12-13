import React, {StyleSheet, Dimensions, Platform, StatusBar} from "react-native";

const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    compatible: {
        ...Platform.select({
            ios: {
                height: 20
            },
            android: {
                height: 0
            }
        })
    },
    headerBox:{
        height:60 + StatusBar.currentHeight,
    },
    headerIcon:{
        width:60,
        height:60,
        lineHeight:60,
    },
    blank:{
        minWidth:60,
        height:60,
        lineHeight:60,
    }

})
