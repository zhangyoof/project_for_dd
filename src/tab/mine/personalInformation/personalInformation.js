/*
* JGR
* 个人信息页面
*
*
* */

import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native"
import Header from "../../../components/Header/header"
import Icon from "@ant-design/react-native/lib/icon";
import styles from "./personalInformationSty"
import {inject, observer} from "mobx-react";

@inject('rootStore')
@observer
class PersonalInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: {
                headPortrait: "头像：",
                name: "姓名：",
                username: "用户名：",
                phone: "手机号：",
                email: "email：",
                gender: "性别：",
                birthday: "出生日期："
            },
            data: {
                headPortrait: require("../../../assets/u26.png"),
                name: "",
                username: "",
                phone: "",
                email: "",
                gender: "男",
                birthday: "xxxx-xx-xx"
            }
        }
    }

    render() {
        let {personalInformation}=this.props.rootStore
        let {data, dataList} = this.state
        return (
            <View style={styles.container}>
                <Header title="个人信息" leftIconGO="Home"/>
                <View>
                    <ScrollView
                        style={[styles.moduleBox]}>
                        {/*头像*/}
                        <TouchableOpacity
                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.headPortrait}</Text>
                            <View style={[CommonStyles.flexLAYOUT,styles.textPersonSty]}>
                                <Image source={data.headPortrait} style={styles.personalImage}/>
                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                        {/*名字*/}
                        <TouchableOpacity

                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty,styles.everyModuleTextSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.name}</Text>
                            <View style={[CommonStyles.flexLAYOUT]}>
                                <Text style={[CommonStyles.primary_text_large,styles.textPersonSty]}>{personalInformation?personalInformation.accName:null}</Text>
                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                        {/*用户名*/}
                        <TouchableOpacity

                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty,styles.everyModuleTextSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.username}</Text>
                            <View style={[CommonStyles.flexLAYOUT]}>
                                <Text style={[CommonStyles.primary_text_large,styles.textPersonSty]}>{personalInformation?personalInformation.username:null}</Text>
                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                        {/*手机号*/}
                        <TouchableOpacity

                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty,styles.everyModuleTextSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.phone}</Text>
                            <View style={[CommonStyles.flexLAYOUT]}>
                                <Text style={[CommonStyles.primary_text_large,styles.textPersonSty]}>{personalInformation?personalInformation.phoneNumber:null}</Text>
                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                        {/*email*/}
                        <TouchableOpacity

                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty,styles.everyModuleTextSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.email}</Text>
                            <View style={[CommonStyles.flexLAYOUT]}>
                                <Text style={[CommonStyles.primary_text_large,styles.textPersonSty]}>{personalInformation?personalInformation.email:null}</Text>
                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                        {/*性别*/}
                        <TouchableOpacity

                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty,styles.everyModuleTextSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.gender}</Text>

                            <View style={[CommonStyles.JGR_FlexLAYOUT,styles.textPersonSty]}>
                                <Text style={CommonStyles.primary_text_large}>{personalInformation?"":null}</Text>

                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                        {/*生日*/}
                        <TouchableOpacity

                            style={[CommonStyles.flexLAYOUT,styles.everyModuleSty,styles.everyModuleTextSty]}
                        >
                            <Text style={styles.leftFont}>{dataList.birthday}</Text>
                            <View style={[CommonStyles.flexLAYOUT]}>
                                <Text style={[CommonStyles.primary_text_large,styles.textPersonSty]}>{personalInformation?personalInformation.birthday:null}</Text>
                                {/*<Icon name="right" size="md" style={styles.IconSty}/>*/}
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default PersonalInformation;