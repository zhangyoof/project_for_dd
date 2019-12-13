import React from 'react';
import AppContainer  from "./src/router"
import {observer, Provider} from "mobx-react"
import rootStore from "./src/RootStore"
import Storage from "./src/utils/Storage";
import {StatusBar, SafeAreaView, View} from "react-native"
import NavigationUtil from './src/utils/NavigationUtil';
import Loading from "./src/components/Loading";
import SplashScreen from 'react-native-splash-screen';

@observer
export default class App extends React.Component {

    componentWillMount() {
      SplashScreen.hide();
        // 设置主题颜色
        Storage.get(Constants.STORAGE.LOCAL_DEFAULT_THEME).then((color) => {
            color && rootStore.changeThemeColor(color);
        });
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: rootStore.ThemeColor}}>
                <View style={{flex:1}}>
                    {/* 状态栏样式 */}
                    <StatusBar
                        translucent={true} // 透明
                        backgroundColor={COLOR.transparent} //状态栏颜色
                        barStyle={'light-content'} //状态栏样式（白字）
                    />

                    <Provider rootStore={rootStore}>
                        <AppContainer
                            ref={navigatorRef => {
                                NavigationUtil.setTopLevelNavigator(navigatorRef);
                            }}
                        />
                    </Provider>

                    {/* 加载框 */}
                    <Loading></Loading>
                </View>
            </SafeAreaView>

        )
    }
}
