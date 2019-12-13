import React from 'react';
import {View, Text, Button, StyleSheet} from "react-native"
import MineView from "./mineView/mineView";
import apiConfig from "../../config/apiConfig";
import request from "../../utils/request";

class Mine extends React.Component {
    componentDidMount(): void {

    }

    render() {
        return (
            <View style={styles.container}>
                <MineView/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Mine;
