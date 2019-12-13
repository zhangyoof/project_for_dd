/*
* jgr
* 工作台的store文件
*子store，需要在rootStore中注册
* 代办项目列表中，根据type来确定时搜索还是获取：obtain为初始化获取的数据，search为搜索时获取的数据
* */

import {observable, action} from "mobx";
import request from "@src/utils/request";

class WorkStore {
    constructor(rootstore) {
        this.rootstore = rootstore
    }
    //代办列表每次初始化以及执行上拉下拉获取多少条数据
    @observable agencyNum:Number=25
    //代表列表的数量
    @observable agencyNumber=""
    //项目名称
    @observable projectName = "";
    //代办事项列表
    @observable agencyList = [];
    //搜索代办事项列表
    @observable searchAgencyList = [];
    //获取代办事项
    @observable _changeAgencyNumber=(num)=>{
        this.agencyNumber=num
    }
    //将获取的数据全部修改
    @action _changeAgency=(data)=>{
       this.agencyList=data
    }

    //将获取到的数据拼接起来
    @action _changeAgencyListConcat=(data)=>{
        this.agencyList=this.agencyList.concat(data)

    }

    //获取到的代办搜索列表数据
    @action _changeSearchAgencyList=(data)=>{
        this.searchAgencyList=data
    }
    //获取到的代办搜索列表数据拼接起来
    @action _changeSearchAgencyListConcat=(data)=>{
        this.searchAgencyList=this.searchAgencyList.concat(data)
    }

    //获取项目的名称
    @action changeProjectName = (name) => {
        this.projectName = name
    }
}

export default WorkStore
