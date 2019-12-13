/**.
 * Author: zhangyoof
 * Date: 2019/10/9
 * Time: 17:15
 * Desc: 公共头部组件
 * eg: import Header from "@/components/Header/header" 从某一组件内导入头部组件
 *
 * title <String> 头部标题
 * hiddenLeft <bool> 是否隐藏头部左侧 默认值为false
 * leftIconName <String> 左侧图标名称 默认值'left'
 * leftText <String> 左侧文字 注“当左侧文字与左侧土图标同时存在时显示文字而不显示图标
 * rightIconName <String> 左侧图标名称 默认值'right'
 * showRight <bool> 是否显示标题右侧 默认值为false
 * rightText <String> 右侧文字 注“当右侧文字与右侧土图标同时存在时显示文字而不显示图标
 * onRightIconClick <Function> 标题右侧点击事件
 * onLeftIConClick <Function> 标题左侧点击事件  默认事件为返回上一页面
 *
 * @author zhazihong
 * bgColor <String> 背景颜色 默认主题色 非必传
 */
import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, Platform, StatusBar} from "react-native"
import {inject, observer} from "mobx-react";
import Icon from "@ant-design/react-native/lib/icon";
import {withNavigation} from "react-navigation"
import {styles} from "./headerSty"
@inject('rootStore')
@observer
class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount():void {

    }

    render() {
        let {title,hiddenLeft,leftIconName,leftText,rightIconName,showRight,rightText,onRightIconClick,onLeftIConClick, bgColor} = this.props
        leftIconName = leftIconName || 'left'
        rightIconName = rightIconName || 'right'
        onLeftIConClick = onLeftIConClick || this.clickHandlerGoBack
        const {ThemeColor} = this.props.rootStore;
        const mBgColor = bgColor || ThemeColor;
        return (
            <View style={[CommonStyles.flexLAYOUT, styles.headerBox, {backgroundColor: mBgColor, paddingTop: StatusBar.currentHeight}]}>
                {
                    hiddenLeft?<View style={styles.blank}/>:
                    <TouchableOpacity
                        style={[CommonStyles.flexLAYOUTCENTER,styles.headerIcon,{textAlign:'center'}]}
                        onPress={onLeftIConClick}
                    >
                    {
                        leftText?<Text style={CommonStyles.headerTitleText}>{leftText}</Text>:<Icon name={leftIconName} />
                    }
                    </TouchableOpacity>
                }
                <Text style={[CommonStyles.pageTitle]}>{title}</Text>
                {
                    showRight?<TouchableOpacity
                        style={[CommonStyles.flexLAYOUTCENTER,styles.headerIcon,{textAlign:'center'}]}
                        onPress={onRightIconClick}
                    >
                    {
                        rightText?<Text style={CommonStyles.headerTitleText}>{rightText}</Text>:<Icon name={rightIconName} />
                    }
                    </TouchableOpacity>:<View style={styles.blank}/>
                }
            </View>

        );
    }

    clickHandlerGoBack = () => {
        let {leftIconGO} = this.props;
        if (leftIconGO) {
            this.props.navigation.navigate(leftIconGO)
        } else {
            this.props.navigation.goBack()
        }
    }
}

export default withNavigation(Header);
