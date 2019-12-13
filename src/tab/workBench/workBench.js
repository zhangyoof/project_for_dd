/*
* JGR
* 工作台的主页面
*
* */
import React from 'react';
import {
    View,
    ScrollView,
} from "react-native"
import {inject, observer} from "mobx-react";

import WorkBenchHeader from "./workBenchHeader/workBenchHeader";//工作台头部组件
import ProjectInformation from "./ProjectInformation/projectInformation"//项目信息组件
import AgencyMatters from "./agencyMatters/agencyMatters";//代办事项组件
import rootStore from "../../RootStore";
import request from "@src/utils/request"
import apiConfig from "@src/config/apiConfig"
import mapStore from "@src/tab/workBench/map/MapStore";

@inject('rootStore')
@observer
class WorkBench extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let {usedData} = this.props.rootStore
        let {agencyList} = this.props.rootStore.workstore
        return (
            <View style={{flex: 1}}>
                {/*头部*/}
                <WorkBenchHeader list={usedData}/>
                <ScrollView style={{flex: 1}}>
                    {/*项目信息*/}
                    <ProjectInformation/>
                    {/*代办事项*/}
                    {
                        agencyList.length !== 0
                            ?
                            <AgencyMatters/>
                            : null
                    }
                </ScrollView>
            </View>
        )
    }

    componentWillUnmount(): void {
        console.log("workbench的卸载")
        this.props.rootStore.workstore._changeAgency([])
    }

}

export default WorkBench;
