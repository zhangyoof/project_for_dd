/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/18
 * Time: 15:45
 * Desc: 全局状态存储
 *       使用时 1. @inject('rootStore')
 *             2. this.props.rootStore.xxx
 */

import {
    observable,
    action,
    extendObservable,
    runInAction
} from 'mobx';
// 全局路由导航 不依赖props
import NavigationUtil from "./utils/NavigationUtil";
import apiConfig from "./config/apiConfig";
import request from "./utils/request";
import WorkStore from "./store/workStore"

class rootStore {
    constructor() {
        this.workstore = new WorkStore(this)
    }

    @observable projectId = "UWkJ91xFf"//项目id
    // 主题颜色 默认蓝色
    @observable ThemeColor: string = COLOR.theme_blue;
    @observable IOSHeaderColor: string = "#fff";
    @observable newsBubble: string = "99+";//news页面的tabbar气泡值
    @observable loading = false;
    @observable token = "";
    @observable personalInformation = null;//个人信息
    @observable projectContract = [];//项目合同段列表
    @observable projectLiveList = [];//含有视频的合同段列表

    /*
    * jingguorui
    * 工作台头部的应用列表，
    * jumpPosition后面的值为跳转到相对应的路由位置
    * */
    @observable usedData = [
        {
            id: '1',
            icon: require("@src/assets/appsetting_monitor.png"),
            text: '视频监控',
            jumpPosition: "VideoSurveillance"
        },
    ];
    @observable unUsedData = [
        /*{
            id: '2',
            text: `安全管理`,
            icon: require('@src/assets/appsetting_safe.png'),
            jumpPosition: "VideoSurveillance"//跳转到相对应得路由页面
        },  {
            id: '3',
            text: `地图导航`,
            icon: require('@src/assets/appsetting_map.png'),
            jumpPosition: "VideoSurveillance"
        }, {
            id: '4',
            text: `进度管理`,
            icon: require('@src/assets/appsetting_ratemanage.png'),
            jumpPosition: "VideoSurveillance"
        },
        {
            id: '5',
            text: `水保管理`,
            icon: require('@src/assets/appsetting_watermanage.png'),
            jumpPosition:"VideoSurveillance"
        }, {
            id: '6',
            text: `安全巡检`,
            icon: require('@src/assets/appsetting_safecheck.png'),
            jumpPosition:"VideoSurveillance"
        }, {
            id: '7',
            text: `工程施工报验`,
            icon: require('@src/assets/appsetting_baoxian.png'),
            jumpPosition:"VideoSurveillance"
        }, {
            id: '8',
            text: `工程施工巡检`,
            icon: require('@src/assets/appsetting_xunjian.png'),
            jumpPosition:"VideoSurveillance"
        }, {
            id:'9',
            text: `环保管理`,
            icon: require('@src/assets/appsetting_huanbao.png'),
            jumpPosition:"VideoSurveillance"
        },*/
    ];

    //修改设置工作台头部常用应用
    @action _changeUsedData = (index) => {
        this.unUsedData.push(this.usedData[index]);
        this.usedData.splice(index, 1);
        this.usedData = [...this.usedData];
    }
    @action _changeUnUsedData = (index) => {
        this.usedData.push(this.unUsedData[index]);
        this.unUsedData.splice(index, 1);
        this.unUsedData = [...this.unUsedData];

    }

    //选项卡中已添加的卡片
    @observable addedList = [
        {id: 1, title: '代办事项'},
        {id: 2, title: '我的图表'},
        {id: 3, title: '量化考核'}
    ]
    //选项卡中未添加的卡片
    @observable notAddedList = [
        {id: 4, title: '代办事项'},
        {id: 5, title: '我的图表'},
        {id: 6, title: '量化考核'}
    ]

    //修改含有视频的合同段列表
    @action changeProjectLiveList = (params) => {
        this.projectLiveList = params
    };
    //修改IOS顶部状态栏颜色
    @action changeIosTopColor = () => {
        this.IOSHeaderColor = this.ThemeColor
    };

    //修改主题的颜色
    @action changeThemeColor = (themeColor) => {
        this.ThemeColor = themeColor;
        COLOR.theme_default = themeColor;
    };

    // 显示加载中
    @action showLoading = () => {
        this.loading = true;
    };

    // 隐藏加载中
    @action hideLoading = () => {
        this.loading = false;
    };

    //改变token的状态值
    @action _changeToken = (token) => {
        this.token = token
    }

    //修改个人信息
    @action _changePersonalInformation = (data) => {
        this.personalInformation = data
    }

    //退出登录清空
    @action _Logout = () => {
        this.personalInformation = {};
        this.token = '';
        apiConfig.token = '';
        this.workstore.agencyList=[]    
        NavigationUtil.navigate('Login');
    };

    //项目合同段
    @action _changeProjectContract = (data) => {
        this.projectContract = data
    };


    //Application页面的选项卡的事件
    @action _addAndDeleteEvent = ({type, item}) => {
        let arr = []
        if (type === 'add') {
            this.addedList.push(item)
            for (let i = 0; i < this.notAddedList.length; i++) {
                if (item.id !== this.notAddedList[i].id) {
                    arr.push(this.notAddedList[i])
                }
            }
            this.notAddedList = arr
        } else if (type === 'delete') {
            this.notAddedList.push(item);
            for (let i = 0; i < this.addedList.length; i++) {
                if (item.id !== this.addedList[i].id) {
                    arr.push(this.addedList[i])
                }
            }
            this.addedList = arr
        }
    }
}


export default new rootStore()
