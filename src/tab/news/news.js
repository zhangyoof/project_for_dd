/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/24
 * Time: 10:11
 * Desc: 首页消息
 */

import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, StatusBar} from "react-native"
import {observer, inject} from 'mobx-react/index';
import rootStore from "../../RootStore";
import Swipeout from 'react-native-swipeout';
import COLOR from "../../utils/COLOR";
import {observable, action} from "mobx";
import request from "../../utils/request";
import apiConfig from "../../config/apiConfig";
import RedPoint from "./components/RedPoint";

let screenHeight = Dimensions.get('window').height;

// 注入 Provider 提供的 rootStore 到该组件的props中
@inject('rootStore')
@observer
class News extends React.Component {

    title = '柳格国高(G3011)敦煌至当金山口高速公路';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.getMessageList();
    }

    getMessageList() {
        console.log(apiConfig.news.getMessageList)
        request("get", apiConfig.news.getMessageList, {currentPage: 0, pageSize: 20})
            .then((res) => {
                console.log("getMessageList-------", res);
                if (res.code === "SUCCESS" || res.code === "200") {
                    this.data = res.data;
                } else {
                    console.log('获取待办列表失败!')
                }
            })
    }

    @observable
    data = [
        {
            title: '日常巡查',
            content: '监理工程师回复',
            iconSrc: require('../../assets/news_1.png'),
            unReadNums: 6,
            time: '09:00',
        }, {
            title: '现场协调',
            content: '现场协调内容答复',
            iconSrc: require('../../assets/news_2.png'),
            unReadNums: 0,
            time: '08:23',
        }, {
            title: '进度管理',
            content: '新消息通知监理工程师回复',
            iconSrc: require('../../assets/news_3.png'),
            unReadNums: 12,
            time: '昨天',
        }, {
            title: '量化考核',
            content: '新消息通知监理工程师回复',
            iconSrc: require('../../assets/news_4.png'),
            unReadNums: 0,
            time: '7月24日',
        }, {
            title: '通知公告',
            content: '新消息通知监理工程师回复监理工程师回复',
            iconSrc: require('../../assets/news_5.png'),
            unReadNums: 142,
            time: '昨天',
        }
    ];

    // 点击跳转
    swipeoutClick = (title) => {
        switch (title) {
            case '日常巡查': // 日常巡查
                this.props.navigation.navigate('DailyInspection');
                break;
            default:
                break;
        }
    }

    // 置顶
    topItem(index, item) {
        this.data.splice(index, 1);
        this.data = [item, ...this.data];
    }

    // 删除
    deleteItem(index) {
        this.data.splice(index, 1);
    }

    // 自定义头部
    renderHeader = () => {
        const {ThemeColor} = this.props.rootStore;
        return (
            <View
                style={[CommonStyles.flexLAYOUTCENTER,
                    {
                        backgroundColor: ThemeColor,
                        paddingLeft: 20,
                        paddingRight: 20,
                        height: 60 + StatusBar.currentHeight,
                        paddingTop: StatusBar.currentHeight,
                        zIndex: 100,
                    }]}>
                <Text style={{color: '#fff', fontSize: 20}}>{this.title}</Text>
                {/* <View style={{
                    width: 60,
                    height: 60,
                    lineHeight: 60,
                    backgroundColor:"red"
                }}></View> */}
            </View>
        )
    };

    // 列表item
    renderNewsItem = (item, index) => {
        const {title, content, unReadNums, iconSrc, time} = item;
        const swipeoutBtns = [
            {
                text: '置顶',
                onPress: () => this.topItem(index, item)
            },
            {
                text: '删除',
                backgroundColor: COLOR.primary_red,
                onPress: () => this.deleteItem(index)
            }
        ];
        return (
            <Swipeout key={index} right={swipeoutBtns} autoClose={true}
                      style={{backgroundColor: COLOR.bg_white_color, marginBottom: 8,}}>
                <TouchableOpacity onPress={() => {
                    this.swipeoutClick(title)
                }}>
                    <View style={styles.itemView}>
                        <Image
                            source={iconSrc}
                            style={styles.itemImg}
                        />
                        <View style={{flex: 1}}>
                            <View style={styles.flexRow}>
                                <Text style={[CommonStyles.title1, {fontWeight: '900', fontSize: 17,}]}>{title}</Text>
                                <Text style={CommonStyles.assistant_text_small}>{time}</Text>
                            </View>
                            <View style={[styles.flexRow, {marginTop: 4}]}>
                                <Text numberOfLines={1}
                                      style={[CommonStyles.assistant_text_normal, {width: '90%'}]}>{content}</Text>
                                <RedPoint nums={unReadNums}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        );
    }

    render() {

        return (
            <View>
                {/* 自定义头部 */}
                {this.renderHeader()}

                {/* 消息列表 */}
                <View style={styles.container}>
                    {
                        this.data.map((item, index) => this.renderNewsItem(item, index))
                    }
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.bg_white_color,
        paddingTop: 8,
        paddingHorizontal: 10,
        height: screenHeight - 60,
    },
    itemView: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    itemImg: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 10,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default News;
