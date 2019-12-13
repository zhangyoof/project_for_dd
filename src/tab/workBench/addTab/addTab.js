/*
* JGR
* 工作台下的添加应用组件
*
* */

import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from "react-native"
import {Icon} from "@ant-design/react-native"
import {withNavigation} from "react-navigation"
import styles from "./addTabSty"
import {inject, observer} from "mobx-react";

@inject('rootStore')
@observer
class AddTab extends Component {
    render() {
        let {ThemeColor} = this.props.rootStore;

        return (
            <View style={[ styles.AddBox]}>
                <TouchableOpacity
                    onPress={this.jumpApplicationPage}
                    style={[CommonStyles.flexLAYOUTCENTER, styles.AddTabBtnSty]}>
                    <Text style={[styles.TextSty,{color:ThemeColor}]}>添加新的应用</Text>
                    <Icon name='plus' size='md' color={ThemeColor}/>
                </TouchableOpacity>
            </View>
        );
    }
    jumpApplicationPage=()=>{
        this.props.navigation.navigate("Application")
    }
}

export default withNavigation(AddTab);