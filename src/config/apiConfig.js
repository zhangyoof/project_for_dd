
let ROOT_API = ''
let ROOT_API_BASICS = ''

const environment = "RELEASE" //切换环境，TEST->为测试环境，DEVELOP -> 为开发环境 ，DEMO->为演示环境，REALEASE -> 为生产环境

switch(environment){
    case "TEST": //测试环境
    ROOT_API = "http://dd-test.gcnao.cn/gateway";
    ROOT_API_BASICS = "http://zuul-gateway3.c66d1b869e106469494a06e36cb438011.cn-shenzhen.alicontainer.com";
    break;

    case "DEVELOP": //开发环境
    ROOT_API = "";
    ROOT_API_BASICS = "";
    break;

    case "DEMO": //演示环境
    ROOT_API = "";
    ROOT_API_BASICS = "";
    break;

    case "RELEASE": //生产环境
    ROOT_API = "http://dd.gcnao.cn/gateway";
    ROOT_API_BASICS = "http://zuul-gateway3.c62016881c5384d609a57a60291fc62a4.cn-beijing.alicontainer.com";
    break;
}

// 各服务名称
const BIM_SERVICE = 'jsbimpro-bim-service';
const PORTAL_SERVICE = 'jsbimapp-portal-service';
const INDEX_SERVER='index-service'



const appUrlConfig = {
    token: '',
    toast: {
        networkError: '网络请求异常！',
    },
    login: {
        userLogin: `${ROOT_API}/account/appLogin`,
    },
    currentAccount: {
        //个人信息
        currentAccount: `${ROOT_API}/account/currentAccount`
    },
    LoginOut: {
        //登出接口
        LoginOut: `${ROOT_API}/account/loginout`
    },
    workBench: {
        // 获取项目合同段
        getContract: `${ROOT_API_BASICS}/${BIM_SERVICE}/gis/contract/gets`,
        //代办事项的接口
        getTodoListMobile: `${ROOT_API_BASICS}/${INDEX_SERVER}/todo/getTodoListMobile`,
        // 获取项目信息通过项目id
        getProjectInfo: `${ROOT_API_BASICS}/${INDEX_SERVER}/projectIndex/getProjectInfo`,
        // 获取坐标信息 通过合同段id
        getPosition: `${ROOT_API_BASICS}/${BIM_SERVICE}/gis/position/gets`,
        // 获取合同段视频信息
        getVideo: `${ROOT_API_BASICS}/${BIM_SERVICE}/gis/live/gets`,
        // 根据名称获取项目合同段视频信息
        getVideoInfo: `${ROOT_API}/${BIM_SERVICE}/gis/live/gets-by-title`,
        // 根据视频ID获取视频信息
        getVideoInfoById:`${ROOT_API_BASICS}/${BIM_SERVICE}/gis/live/get-url-by-id`,
    },
    news: {
        getMessageList: `${ROOT_API}/${PORTAL_SERVICE}/message/getMessageMobile`,
    }
};

export default appUrlConfig;
