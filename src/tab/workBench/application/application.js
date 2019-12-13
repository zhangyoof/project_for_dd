/*
* JGR
* 添加卡片的路由
*
* */

import React, {Component} from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Alert
} from "react-native"
import styles from "./applicationSty"
import Header from "../../../components/Header/header"
import {Icon} from '@ant-design/react-native'
import {inject, observer} from "mobx-react";


@inject('rootStore')
@observer
class Application extends Component {

    constructor(props){
        super(props)

    }
    render() {
        let {addedList,notAddedList} =this.props.rootStore
        return (
            <View style={styles.container}>
                <Header title='添加卡片'/>
                <View style={styles.cardSty}>
                    <ApplicationChildren
                        title='已添加的卡片'
                        data={addedList}
                        type="delete"

                    />
                    <ApplicationChildren
                        title='未添加的卡片'
                        data={notAddedList}
                        type="add"

                    />
                </View>
            </View>
        );
    }


}
@inject('rootStore')
@observer
class ApplicationChildren extends Component{
    render(){
        let {title,data,type}=this.props
            return (
                <View style={styles.cardBox}>
                    <View style={styles.titleHeadSty}>
                        <Text style={styles.titleTextSty}>{title}</Text>
                    </View>
                        {
                            data.map((item, index)=>(
                                <View key={index} style={[CommonStyles.flexLAYOUT,styles.moduleSty]}>
                                    <View style={[CommonStyles.flexLAYOUT,styles.leftTextSty]}>
                                        <TouchableOpacity
                                            onPress={()=>{this.props.rootStore._addAndDeleteEvent({type,item})}}
                                            style={[
                                                CommonStyles.flexLAYOUTCENTER,
                                                styles.iconSty,
                                                {backgroundColor:type==='add'?"#29a1ff":"#ff5e5e"}
                                                ]}>
                                            <Icon name={type==='add'?"plus":"minus"} color="#fff"/>
                                        </TouchableOpacity>
                                        <Text>{item.title}</Text>
                                    </View>
                                    <Icon name="menu" size="md"/>
                                </View>
                            ))
                        }
                </View>
            )
        }

}

export default Application;
