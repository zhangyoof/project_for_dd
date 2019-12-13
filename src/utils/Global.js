/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/18
 * Time: 16:49
 * Desc: 全局变量
 */

import COLOR from './COLOR'
import CommonStyles from './CommonStyles'
import Constants from './Constants'
import NavigationUtil from './NavigationUtil'
import Loading from '../components/Loading'
import showToast from './Toast'

// 全局颜色
global.COLOR = COLOR;

// 全局样式
global.CommonStyles = CommonStyles;

// 全局变量
global.Constants = Constants;

// 全局导航器
global.NavigationUtil = NavigationUtil;

// 全局加载框
global.Loading = Loading;

// 全局toast服务
global.showToast = showToast;

// 全局日志log 只在开发时打印
if (!__DEV__) {
        global.console.log = () => {},
        global.console.info = () => {},
        global.console.warn = () => {},
        global.console.debug = () => {},
        global.console.error = () => {}
}
