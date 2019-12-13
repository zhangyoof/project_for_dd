/*
* jgr
* 版本信息列表
*
* */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native"
import {inject, observer} from "mobx-react";
import {Icon} from "@ant-design/react-native";
import {sty} from "./versionIntroductionSty"
import Header  from "../../../components/Header/header"


@inject('rootStore')
@observer
class VersionIntroduction extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:2,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:3,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:4,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:5,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:6,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:7,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:8,VersionNumber:"V.3.2.0156515",date:"218.05.08"},
                {id:9,VersionNumber:"V.3.2.0156515",date:"218.05.08"}
            ]
        }
    }
    render() {
        let {data}=this.state
        return (
            <View style={sty.container}>
                <Header title='版本介绍'/>
                <ScrollView>
                    {
                        data.map((item,index)=>(
                            <TouchableOpacity
                                onPress={this.toEditionDetail.bind(this,item.id)}
                                key={item.id}
                                style={[CommonStyles.flexLAYOUT,sty.everyBox]}
                            >
                                <Text>{item.VersionNumber}版本介绍</Text>
                                <View style={[CommonStyles.flexLAYOUT]}>
                                    <Text style={[CommonStyles.assistant_text_normal,sty.textSty]}>{item.date}</Text>
                                    <Icon name="right" size="md"/>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
    //跳转页面
    toEditionDetail=(id)=>{
        // this.props.navigation.navigate()
    }
}

export default VersionIntroduction;