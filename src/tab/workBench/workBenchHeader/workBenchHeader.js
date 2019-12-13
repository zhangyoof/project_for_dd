/*
* JGR
* 工作台的头部子组件，
*
*
* */
import React, {Component, Fragment} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar
} from "react-native"
import {withNavigation} from "react-navigation"
import {inject, observer} from "mobx-react";
import {BoxShadow} from 'react-native-shadow'
import styles from "./workBenchHeaderSty"


@inject('rootStore')
@observer
class WorkBenchHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayApplication: true
        }
    }

    clickModuleHand = (data) => {
        this.props.navigation.navigate(data.jumpPosition)
    };

    render() {
        const list = this.props.rootStore.usedData
        const {ThemeColor} = this.props.rootStore;
        return (
            <Fragment>
                <View style={[styles.headerBox, {backgroundColor: ThemeColor, paddingTop: StatusBar.currentHeight}]}>
                    <TouchableOpacity
                        style={styles.entrySty}
                        onPress={this.ModificationItem}
                    >
                        <Text style={styles.entryTextSty}>柳格国高(G3011)敦煌至当金山口高速公路</Text>
                    </TouchableOpacity>
                    <View style={[styles.setSty, {paddingBottom: list.length !== 0 ? 0 : 20}]}>
                        <TouchableOpacity>
                            <Text style={styles.setFontSty}>常用应用</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CommonAppSetting')}>
                            <Text style={styles.setFontSty}>设置</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    list.length !== 0 ? this.creatList(list) : null
                }

            </Fragment>

        )
    }
    /*
    *荆国瑞
    *创建工作台头部列表项，
    * 通过rootstore里面的usedData的长度来判断是否创建
    */
    creatList = (list) => {
        let {ThemeColor} = this.props.rootStore
        return <View style={[styles.scrollSty]}>
            <View style={[styles.blankStyle, {backgroundColor: ThemeColor}]}/>
            <ScrollView
                style={styles.modulesSty}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {

                    list.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={this.clickModuleHand.bind(this, item)}
                            style={[styles.shadowStyle, {shadowColor: ThemeColor}]}
                        >
                            <BoxShadow setting={{
                                width: 90, //包裹的子内容多宽这里必须多宽
                                height: 100,//同上
                                color: ThemeColor,//阴影颜色
                                border: 5,//阴影宽度
                                radius: 10,//包裹的子元素圆角多少这里必须是多少
                                opacity: 0.7,//透明度
                                x: 0,//偏移
                                y: 0,//
                                style: {marginVertical: 5, marginRight: 5}//
                            }}>
                                <View style={[styles.moduleChildrenSty, {shadowColor: ThemeColor}]}>
                                    <Image
                                        source={item.icon}
                                        style={styles.imgSty}
                                    />
                                    <Text style={styles.moduleChildrenTextSty}>{item.text}</Text>
                                </View>
                            </BoxShadow>

                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    }
    //点击头部项目名称触发事件
    ModificationItem = (e) => {

    };

    //点击相对应的模块
    clickModuleHandler = (data) => {
        this.props.navigation.navigate(data.jumpPosition)
    }
}

export default withNavigation(WorkBenchHeader)
