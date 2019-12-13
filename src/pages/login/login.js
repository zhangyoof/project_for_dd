/*
* JGR
* 登录界面
*
*
* */

import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    Platform,
    Linking
} from "react-native"
import request from "@src/utils/request"
import apiConfig from "@src/config/apiConfig"
import Icon from '@ant-design/react-native/lib/icon'
import {styles} from "./LoginStyle"
import {inject, observer} from "mobx-react";
import Storage from "@src/utils/Storage";
@inject('rootStore')
@observer
class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            elseBool: true,//控制密码框眼睛的显示与隐藏
            inputDisplay: true,//控制账号框×的显示与隐藏
            passwordDisplay: true//控制密码框×的显示与隐藏
        }
    }

    componentDidMount() {
        console.log("root_api===>>>>>",apiConfig.LoginOut)
        this.changeTextIconDisplay()
        this.getNetWorkState()
        Storage.get("Username").then(res=>{
            let username = res;
            Storage.get("Password").then(pass=>{
                this.setState({
                    username:username,
                    password:pass,
                })
            })
        })
    }

    //获取当前的网络状态
    getNetWorkState = () => {

    }
//登录
    clickBtnHand = () => {
        let {rootStore} = this.props
        let {username, password} = this.state;
//请求登录，获取token
        // 显示加载框
        Loading.show();
        request("post", apiConfig.login.userLogin, {username, password, accountType: 'PERSONAL'})
            .then((res) => {
                console.log('获取token------>', res);
// 登录成功后跳转到主页 zhazihong
                if (res.code === 'SUCCESS') {
                    //rootStore._changeToken(res.result)//将获取到的个人touken存储在apiconfig里面
                    apiConfig.token = res.result
                    // 隐藏加载框
                    Storage.set("Username",this.state.username)
                    Storage.set("Password",this.state.password)


                    rootStore.changeIosTopColor()//登录后修改IOS状态栏颜色
//请求个人信息数据
                    request("get", apiConfig.currentAccount.currentAccount, "")
                        .then((res) => {
                            console.log("请求的个人信息数据--->", res)
                            if (res.code === "SUCCESS") {
                                rootStore._changePersonalInformation(res.result)
                            }else{
                                showToast("获取个人信息数据失败")
                            }
                        })
  //请求代办数据
                    request('get',apiConfig.workBench.getTodoListMobile,{currentPage:1, pageSize:rootStore.workstore.agencyNum})
                        .then(res=>{
                            console.log("获取代办列表的数据--->",res)
                            if(res.code==="SUCCESS"&&res.message==="服务器内部错误"){
                                rootStore.hideLoading()
                                showToast("获取代办列表数据失败")
                            }else{
                                rootStore.workstore._changeAgency(res.records)
                                rootStore.workstore._changeAgencyNumber(res.total)

                            }
                        })
                    Loading.hide();
                    this.props.navigation.navigate('Home');
                }else{
                    Loading.hide();
                    showToast(res.message);
                }
            });

        // this.props.navigation.navigate('Home')
    };

    //点击忘记密码
    forgetPassword = () => {

    };
    //点击注册
    register = () => {


    };
    changeEye = () => {
        this.setState({
            elseBool: !this.state.elseBool
        })
    }
    //密码眼睛按下与抬起时间
    downEventListener = () => {
        this.setState({
            elseBool: false
        })
    }
    upEventListener = () => {
        this.setState({
            elseBool: true
        })
    };


    //初始化时修改的值
    changeTextIconDisplay = () => {
        if (!this.state.username) {
            this.setState({
                inputDisplay: false
            })
        } else {
            this.setState({
                inputDisplay: true
            })
        }
        if (!this.state.password) {
            this.setState({
                passwordDisplay: false
            })
        } else {
            this.setState({
                passwordDisplay: true
            })
        }
    }


    render() {
        let {ThemeColor, changeIosTopColor} = this.props.rootStore
        let {username, password, elseBool, inputDisplay, passwordDisplay} = this.state
        return (
            <View style={styles.bigBox}>

                <View style={[styles.headerBox]}>
                    <Image source={require("../../assets/u5.png")} style={styles.headerImage}/>
                    <Text style={styles.headerText}>甘肃省公路设施建管养一体化信息化集成服务平台</Text>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.topInputBox}>
                        <Icon name="user" style={styles.fontAway}/>
                        <TextInput style={styles.textInput} onChangeText={this.changeUsernameInput}
                                   value={username}/>
                        {
                            inputDisplay ?
                                <TouchableOpacity onPress={() => this.setState({username: "", inputDisplay: false})}>
                                    <Icon name="close-circle" style={styles.fontAway}/>
                                </TouchableOpacity> : <View style={styles.blank}/>
                        }
                    </View>
                    <View style={styles.topInputBox}>
                        <Icon name="unlock" style={styles.fontAway}/>
                        <TextInput style={[styles.textInput, styles.passwordInput]}
                                   value={password}
                                   secureTextEntry={elseBool}
                                   onChangeText={this.changePasswordInput}
                        />
                        {
                            passwordDisplay ?
                                <View style={styles.passwordBox}>
                                    <TouchableOpacity
                                        style={styles.eleSty}
                                        onPress={this.changeEye}
                                        // onPressIn={this.downEventListener}//控制眼睛的按下的显示与隐藏
                                        // onPressOut={this.upEventListener}
                                    >
                                        <Icon name={elseBool ? "eye-invisible" : "eye"}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setState({password: "", passwordDisplay: false})}>
                                        <Icon
                                            name="close-circle"
                                            style={styles.fontAway}
                                            size="md"
                                        />
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={{width: 50, height: 50}}/>

                        }
                    </View>

                </View>

                <View style={styles.btnBox}>
                    <TouchableOpacity
                        style={[styles.lonSinSty, {backgroundColor: ThemeColor}]}
                        onPress={this.clickBtnHand}
                    >
                        <Text style={styles.lonSinStyTxt}>登录</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.lowerBox}>
                        <TouchableOpacity onPress={this.forgetPassword}>
                            <Text style={styles.leftLowerBox}>忘记密码？</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.register}>
                            <Text style={styles.rightLowerBox}>注册</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        )
    }

//修改账号框的值
    changeUsernameInput = (username) => {
        if (!username) {
            this.setState({
                inputDisplay: false,
                username
            })
        } else {
            this.setState({
                inputDisplay: true,
                username
            })
        }
    }
//修改密码框的值
    changePasswordInput = (password) => {
        if (!password) {
            this.setState({
                passwordDisplay: false,
                password
            })
        } else {
            this.setState({
                passwordDisplay: true,
                password
            })
        }
    }

}

export default Login;
