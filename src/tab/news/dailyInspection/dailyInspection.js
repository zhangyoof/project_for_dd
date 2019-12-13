/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/24
 * Time: 16:11
 * Desc: 日常巡查
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from "react-native"
import {observer, inject} from 'mobx-react/index';
import rootStore from "../../../RootStore";
import COLOR from "../../../utils/COLOR";
import {observable} from "mobx";
import Icon from "@ant-design/react-native/lib/icon";
import Header from "../../../components/Header/header";

@inject('rootStore')
@observer
class DailyInspection extends React.Component {

    static navigationOptions = {
        header: null,
    };

    title = '日常巡查';

    @observable
    inputVal = '';

    //修改表单框里面的内容
    changeInputText = (inputVal) => {
        this.inputVal = inputVal;
    };
    //点击搜索
    searchClick = () => {
        this.inputVal && alert(this.inputVal);
    };

    // 搜索框
    renderSearch() {
        const {ThemeColor} = this.props.rootStore;
        return (
            <View style={[CommonStyles.flexLAYOUT, styles.searchBoxSty]}>
                <TextInput
                    value={this.inputVal}
                    style={styles.searchInputSty}
                    placeholder="搜索项目、信息或者进度..."
                    onChangeText={this.changeInputText}
                />
                <TouchableOpacity
                    style={[CommonStyles.flexLAYOUTCENTER, styles.searchIconSty, {backgroundColor: ThemeColor}]}
                    onPress={this.searchClick}
                >
                    <Icon name='search' color="#fff"/>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (

            <View style={styles.container}>
                <Header title={this.title}/>
                {this.renderSearch()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.bg_white_color,
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
});

export default DailyInspection;
