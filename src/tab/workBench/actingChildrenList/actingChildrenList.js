/*
* jgr
* 代办事项的子组件
*   data为传过来的内容
*   上拉时所需要的url
*   下拉刷新时的url
*
* */
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Dimensions
} from "react-native"

const {height, width} = Dimensions.get('window');
import styles from "./actingChildrenListStyle";
import {inject, observer} from "mobx-react";
import request from "../../../utils/request";
import apiConfig from "../../../config/apiConfig";

@inject('rootStore')
@observer
class ActingChildrenList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefresh: false,
            page: 1,
        }
    }

    render() {
        let {data, rootStore} = this.props
        return (
            <FlatList
                style={styles.FlatListSty}
                extraData={[data, rootStore.ThemeColor]}
                data={data}               //代办的数据列表
                keyExtractor={(item) => item.id.toString()}
                onRefresh={() => this._onRefresh()}
                refreshing={this.state.isRefresh}
                //下拉刷新
                onEndReached={this.pullUpLoading}
                onEndReachedThreshold={0.01}//距离底部多远时触发事件
                //上拉加载
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={[styles.moduleEvery, CommonStyles.flexLAYOUT, {borderBottomWidth: index === data.length - 1 ? 0 : 1}]}
                    >
                        <View style={{width: (width - 40) / 10 * 6}}>
                            <Text style={styles.moduleTitleSty}
                                  numberOfLines={1}
                            >{item.name}</Text>
                            <Text style={styles.moduleDateSty}>发布时间{this.changeDate(item.sendTime)}</Text>
                        </View>
                        <View style={[CommonStyles.flexLAYOUTCENTER,styles.everyModuleRightStyle]}>
                            <View style={[styles.ButtonSty, {backgroundColor: rootStore.ThemeColor}]}>
                                <Text style={[styles.ButtonTextSty]}
                                >{item.appName}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }

    changeDate = (dates) => {
        let date = new Date(dates)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return year + '-' + month + '-' + day
    }

    componentDidMount(): void {
        this.getData(1)
    }


    //上拉加载
    pullUpLoading = () => {
        this.getData(this.state.page)
    }

    getData = (page) => {
        let {rootStore, inputVal} = this.props
        let url = apiConfig.workBench.getTodoListMobile
        rootStore.showLoading()
        request('get', url, {currentPage: page, pageSize: rootStore.workstore.agencyNum, name: inputVal})
            .then(res => {
                rootStore.hideLoading()
                if (!inputVal) {
                    if (res.currentPage > res.pages) return
                    if (page === 1) {
                        rootStore.workstore._changeAgency(res.records)
                    } else {
                        rootStore.workstore._changeAgencyListConcat(res.records)
                    }
                } else {
                    if (res.currentPage > res.pages) return
                    if (page === 1) {
                        rootStore.workstore._changeSearchAgencyList(res.records)
                    } else {
                        rootStore.workstore._changeSearchAgencyListConcat(res.records)
                    }

                }


                this.setState({page: ++this.state.page}, () => {
                })
            })
    }

//下拉刷新
    _onRefresh = () => {
        let {rootStore, inputVal} = this.props
        this.setState({isRefresh: true})
        request('get', apiConfig.workBench.getTodoListMobile, {
            currentPage: 1,
            pageSize: rootStore.workstore.agencyNum,
            name: inputVal
        })
            .then(res => {
                if (inputVal) {
                    rootStore.workstore._changeSearchAgencyList(res.records)
                } else {
                    this.setState({page: 2})
                    rootStore.workstore._changeAgency(res.records)
                    this.props.rootStore.workstore._changeAgencyNumber(res.total)
                }
                this.setState({isRefresh: false})
            })
    }
}


export default ActingChildrenList;