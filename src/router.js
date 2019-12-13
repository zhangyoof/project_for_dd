import React from "react"
import {Image,View,Text,Platform} from "react-native"
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Detail from "./pages/detail"//
import Login from "./pages/login/login"//登录页面

import News from "./tab/news/news"//消息页面
import WorkBench from "./tab/workBench/workBench"//工作台
import Mine from "./tab/mine/mine"  //我的页面
import VideoSurveillance from "./pages/videoSurveillance/videoSurveillance";//视频目录列表
import ThemeColorView from "./components/ThemeColorView";//控制主体样式

import WorkBenchRouter from "./tab/workBench/workBenchRouter"//工作台的路由
import NewsRouter from './tab/news/router'//消息列表路由
import MineRouter from "./tab/mine/mineRouter"
import styles from "./tab/tabStyle";
import rootStore from "./RootStore"


const TabNavigator = createBottomTabNavigator({
    News: {
        screen: News,
        navigationOptions : {
            tabBarLabel: '消息',
            tabBarIcon: (({focused, tintColor}) => {
                return <View style={[CommonStyles.flexLAYOUTCENTER,styles.newsBox]}>
                    <View style={[CommonStyles.flexLAYOUTCENTER,styles.IconStyle]}>
                        <Text style={{fontSize:8,color:'#fff'}}>{rootStore.newsBubble}</Text>
                    </View>
                    <Image source={focused ? require("./assets/blue_news.png") : require("./assets/news.png")}
                           style={[styles.imgSty]}/>
                </View>
            }),
        },
    },
    WorkBench: {
        screen: WorkBench,
        navigationOptions: {
            tabBarLabel: '工作台',
            tabBarIcon: (({focused, tintColor}) => {
                return <Image source={focused ? require("./assets/blue_work.png") : require("./assets/work.png")}
                              style={styles.imgSty}/>

            })
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: (({focused, tintColor}) => {
                return <Image source={focused ? require("./assets/blue_mine.png") : require("./assets/mine.png")}
                              style={styles.imgSty}/>

            })
        }
    }
}, {
    initialRouteName: 'WorkBench',
});


const Router = createStackNavigator({
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                header: null
            }
        },
        VideoSurveillance: {
            screen: VideoSurveillance,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login
        },
        ThemeColorView:{
            screen:ThemeColorView
        },
        //工作台的路由模块
        ...WorkBenchRouter,
        //我的页面路由模块
        ...MineRouter,
        // 消息模块路由
        ...NewsRouter,

    },
    {
        initialRouteName: 'Login',
    });
export default createAppContainer(Router)



