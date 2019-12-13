/*
*jgr
* mine页面的视图层
*
*
* */
import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
} from "react-native"
import {withNavigation} from "react-navigation"
import apiConfig from "../../../config/apiConfig"

import Icon from "@ant-design/react-native/lib/icon";
import {inject, observer} from "mobx-react";
import {styles} from "./mineViewSty"
import Header from "../../../components/Header/header"
import request from "../../../utils/request";
@inject('rootStore')
@observer
class MineView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "谭俊辉",
            username: "18910740802",
            imgUrl: require('../../../assets/u26.png')
        }
    }

    render() {
        let {name, username, imgUrl} = this.state;
        let {ThemeColor, personalInformation} = this.props.rootStore;


        return (
            <View>
                <Header title="我的" hiddenLeft={true}/>
                <TouchableOpacity
                    onPress={this.goToPersonalInformationPage}
                    style={[styles.mineBox]}>
                    <Image source={imgUrl} style={styles.mineImageSty}/>
                    <View>
                        <Text
                            style={[CommonStyles.primary_text_large]}>
                            {personalInformation ? personalInformation.accName : ""}
                        </Text>
                        <Text
                            style={[CommonStyles.primary_text_large]}>
                            账号：{personalInformation ? personalInformation.username : ''}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.mineHelpSty}>
                    <TouchableOpacity style={[CommonStyles.flexLAYOUT, styles.HelpSty]}>
                        <Text>帮助与反馈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[CommonStyles.flexLAYOUT, styles.HelpSty]}
                        onPress={this.toAboutPage}
                    >
                        <Text>关于</Text>
                        <Icon name="right" size="md"/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.goLoginBtnBoxSty]}>
                    <TouchableOpacity
                        style={[styles.goLoginBtnSty, CommonStyles.flexLAYOUTCENTER, {backgroundColor: ThemeColor}]}
                        onPress={this.goLogin}
                    >
                        <Text style={styles.GoLoginTextSty}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    //退出登录
    goLogin = () => {
        this.props.rootStore._Logout()

        // apiConfig.token = ""
        // console.log(apiConfig.token)
        // this.props.navigation.navigate("Login")

    }
    //跳转到个人信息页面
    goToPersonalInformationPage = () => {
        this.props.navigation.navigate("PersonalInformation")
    };

    //跳转到关于页面
    toAboutPage = () => {
        this.props.navigation.navigate("MyReference")
    }
}
export default withNavigation(MineView);
