/*
* 工作台的子组件
* 代办事项
* data为父组件传过来的数据
*
*
* */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    FlatList,
    Dimensions
} from "react-native"
import { withNavigation } from 'react-navigation';
import {inject, observer} from "mobx-react";
import styles from "./agencyMatteSty";
import Icon from '@ant-design/react-native/lib/icon'
import stylesA from "@src/tab/workBench/actingChildrenList/actingChildrenListStyle"
const {height, width} = Dimensions.get('window');

@inject('rootStore')
@observer
class AgencyMatters extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(): void {
        //获取信息

    }


    //按钮的点击事件
    clickHandler=(e)=>{
        Alert.alert(e)
    }
    render() {
        let {ThemeColor} = this.props.rootStore;
        let {agencyList,agencyNumber} = this.props.rootStore.workstore;
        let data=agencyList.slice(0,3)
        return (
            <View style={styles.AgencyMattersBox}>
                <TouchableOpacity style={[ styles.flexLayout,styles.headerBox]}
                                  onPress={this.clickToAgencyMatters}
                >
                    <View style={[styles.flexLayout]}>
                        <View style={[CommonStyles.CIRCLE,styles.imgIconSty,{borderColor:ThemeColor}]}/>
                        <Text style={styles.fontText}>待办事项</Text>
                        {
                            agencyNumber?
                                <View style={[CommonStyles.flexLAYOUTCENTER,styles.Bubble]}>
                                    <Text style={[styles.BubbleText]}>{agencyNumber}</Text>
                                </View>
                                :
                                null
                        }

                    </View>
                    <View
                        style={[styles.flexLayout,styles.chaAll,{color:ThemeColor}]}
                    >
                            <Text>查看全部</Text>
                        <Icon name="right" style={styles.rightArrow}/>
                    </View>
                </TouchableOpacity>
                <FlatList
                    style={stylesA.FlatListSty}
                    extraData={[data, ThemeColor]}
                    data={data}               //代办的数据列表
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            style={[stylesA.moduleEvery, CommonStyles.flexLAYOUT, {borderBottomWidth: index === data.length - 1 ? 0 : 1}]}
                        >
                            <View style={{width: (width - 40) / 10 * 6}}>
                                <Text style={stylesA.moduleTitleSty}
                                      numberOfLines={1}
                                >{item.name}</Text>
                                <Text style={stylesA.moduleDateSty}>发布时间{this.changeDate(item.sendTime)}</Text>
                            </View>
                            <View style={[CommonStyles.flexLAYOUTCENTER,stylesA.everyModuleRightStyle]}>
                                <View style={[stylesA.ButtonSty, {backgroundColor: ThemeColor}]}>
                                    <Text style={[stylesA.ButtonTextSty]}
                                    >{item.appName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                   {/*如果无数据时里面的内容*/}
                   {/* <View style={[CommonStyles.flexLAYOUTCENTER,styles.blankBox]}>
                        <Text>暂无代办数据</Text>
                    </View>*/}
            </View>
        );
    }
    clickToAgencyMatters=()=>{
        this.props.navigation.navigate("ActingAllMatters")
    }

    //将时间戳转换为年月日转换为
    changeDate = (dates) => {
        let date = new Date(dates)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return year + '-' + month + '-' + day
    }
}

export default withNavigation(AgencyMatters);
