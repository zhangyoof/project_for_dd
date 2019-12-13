import CommonAppSetting from "../../pages/appSetting/CommonAppSetting"//常用应用设置界面
import MonitorFrame from "../../pages/videoSurveillance/monitorFrame/MonitorFrame"//视频监控—监控画面
import MapLarge from "../../pages/map/MapLarge"//
import ActingAllMatters from "./actingAllmatters/actingAllmatters"//查看全部代办事项界面
import Application from "./application/application"//添加选项卡
import MonitorFrameAndroid from "../../pages/videoSurveillance/monitorFrame/MonitorFrameAndroid";

const workBenchRouter = {
    ActingAllMatters:{
        screen:ActingAllMatters,
        navigationOptions: {
            header: null
        }
    },
    CommonAppSetting: {
        screen: CommonAppSetting
    },
    MonitorFrame: {
        screen: MonitorFrame
    },
    MonitorFrameAndroid: {
        screen: MonitorFrameAndroid
    },
    Application:{
        screen:Application,
        navigationOptions: {
            header: null
        }
    },
    MapLarge:{
        screen: MapLarge,
        navigationOptions: {
            header: null
        }
    }
};

export default workBenchRouter;

