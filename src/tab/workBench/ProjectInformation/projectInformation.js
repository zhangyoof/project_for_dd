/*
* JGR
* 工作台的子组件
* 项目信息
*
* */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import styles from "./ProjectSty"
import {inject, observer} from "mobx-react";
import request from "../../../utils/request";
import apiConfig from "../../../config/apiConfig";

@inject('rootStore')
@observer
class ProjectInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount(): void {
        this.getData()

    }

    //获取项目数据
    getData = () => {
        let {rootStore} = this.props
        request("get",apiConfig.workBench.getProjectInfo +"?projectId=UWkJ91xFf")
            .then(res => {
                console.log("请求的项目信息数据--->", res);
                if (res.message === 'ok' && res.code === "200") {
                    this.setState({
                        data: res.data
                    })
                    rootStore.workstore.changeProjectName(res.data.name)
                } else {
                    this.setState({
                        data: []
                    })

                }
            })
    }

    render() {
        let {data} = this.state
        let {ThemeColor} = this.props.rootStore;
        return (
            <View style={styles.container}>
                <View style={styles.projectHeaderSty}>
                    <View style={[CommonStyles.CIRCLE, {borderColor: ThemeColor}]}/>
                    <Text style={styles.textSty}>项目信息</Text>
                </View>
                <View style={styles.content}>
                    <Image
                        source={require('../../../assets/u5.png')}
                        style={styles.projectImgSty}
                    />
                    <View style={{flex:1}}>
                        <Text style={[styles.projectName]} numberOfLines={2} >{data ? data.name : ""}</Text>
                        <Text style={styles.otherName}>开工日期：{data ? data.startDate?data.startDate:"" : ""}</Text>
                        <Text style={styles.otherName}>竣工日期：{data ? data.endDate ?data.endDate:"": ""}</Text>
                    </View>
                </View>
            </View>
        );
    }

}

export default ProjectInformation;
