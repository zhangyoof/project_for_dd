/*
*荆国瑞
* 查看全部代办事项页面
* 点击搜索框时：
* 1、有参数查询相关的数据，
* 2、无参数直接刷新数据，下拉也会直接刷新数据，
* 通过点击搜索来控制inputBool的布尔值来控制组件的显示哪一个，
* 状态管理在workstore里面
* agencyList为刷新项目获取全部的列表
* searchAgencyList为点击时搜索列表的数据
*
* */

import React, {Component} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,

} from "react-native"

import Header from "@src/components/Header/header"
import styles from "./actingAllMattersStyle";
import Icon from "@ant-design/react-native/lib/icon";
import {inject, observer} from "mobx-react";
import ActingChildrenList from "../actingChildrenList/actingChildrenList"
import apiConfig from "@src/config/apiConfig";
import request from "../../../utils/request";

@inject('rootStore')
@observer
class ActingAllMatters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            isRefresh: false,
            inputBool: false,

        }
    }

    render() {
        let {inputVal, inputBool} = this.state;
        let {ThemeColor} = this.props.rootStore;
        let {agencyList, searchAgencyList} = this.props.rootStore.workstore;
        return (
            <View style={{flex: 1}}>
                <Header title="查看全部待办事项"/>
                {/*搜索框*/}
                <View style={[CommonStyles.flexLAYOUT, styles.searchBoxSty]}>
                    <TextInput
                        value={inputVal}
                        style={[styles.searchInputSty]}
                        placeholder="搜索代办事项"
                        onChangeText={this.changeInputText}
                    />
                    <TouchableOpacity
                        style={[CommonStyles.flexLAYOUTCENTER, styles.searchIconSty, {backgroundColor: ThemeColor}]}
                        onPress={this.clickSearchProjectClassOne}
                    >
                        <Icon name='search' color="#fff"/>
                    </TouchableOpacity>
                </View>
                {/*全部待办事项*/}
                {
                    !inputBool ?
                        <ActingChildrenList ref='banner' data={agencyList} api={apiConfig.workBench.getTodoListMobile}/>
                        :
                        <ActingChildrenList data={searchAgencyList} inputVal={this.state.inputVal}/>
                }
            </View>
        );
    }


    //修改表单框里面的值
    changeInputText = (inputVal) => {
        this.setState({
            inputVal
        })
    };

    //点击搜索项目
    clickSearchProjectClassOne = () => {
        let {workstore}=this.props.rootStore
        let {inputVal} = this.state
        if (!inputVal) {
            this.setState({
                inputBool: false
            })
        } else {
            this.setState({
                inputBool: true
            })
        }
        request('get',
            apiConfig.workBench.getTodoListMobile,
            {
                name: this.state.inputVal,
                currentPage: 1,
                pageSize: workstore.agencyNum
            })
            .then(res => {
                if (!inputVal) {
                    this.props.rootStore.workstore._changeAgency(res.records)
                    this.props.rootStore.workstore._changeAgencyNumber(res.total)
                } else {
                    if (res.records.length === 0) {
                        showToast("没有查找到相关代办事项")
                        this.props.rootStore.workstore._changeSearchAgencyList([])
                    } else {
                        this.props.rootStore.workstore._changeSearchAgencyList(res.records)
                    }
                }

            })
    }
}


export default ActingAllMatters;