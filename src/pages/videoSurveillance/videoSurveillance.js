/*
*JGR
* 视频监控选择项目界面
* RenderingItem为初始将第几条数据展开
*inputBool控制的是表单里面的内容是否存在？
* 如果存在渲染的是一个antd引用的组件，
* 不存在渲染的是一个flatList组件
*
* */

import React, {Component} from 'react';
import {
    View,
} from "react-native"
import {inject, observer} from "mobx-react";
import styles from "./videosurveillanceSty"
import Header from "../../components/Header/header"


@inject('rootStore')
@observer
class VideoSurveillance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "视频监控",
        }
    }
    render() {
        let {title} = this.state
        return (
            <View style={[styles.container]}>

                {/*头部*/}
                <Header title={title}/>
            </View>
        );
    }
}

export default VideoSurveillance;



