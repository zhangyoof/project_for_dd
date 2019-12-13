/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/27
 * Time: 16:00
 * Desc: 路由工具 (不依赖navigation prop)
 */

import {NavigationActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

// 路由跳转
function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function reset(routeName) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: routeName})]
    });
    navigator.dispatch(resetAction);
}

// 返回
function goBack() {
    navigator.dispatch(NavigationActions.back());
}

export default {
    navigate,
    reset,
    goBack,
    setTopLevelNavigator
};
