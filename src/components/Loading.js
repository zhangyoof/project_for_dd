/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/10/8
 * Time: 17:19
 * Desc: 全局加载中组件
 */

import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {observer} from 'mobx-react';
import rootStore from "../RootStore";

const {width, height} = Dimensions.get('window');

@observer
class Loading extends React.Component {
    constructor() {
        super();
    }

    static show = () => {
        rootStore.showLoading();
    };
    static hide = () => {
        rootStore.hideLoading();
    };

    render() {
        const {loading} = rootStore;
        if (loading) {
            return (
                <View style={styles.LoadingPage}>
                    <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: COLOR.font_black_6,
                        opacity: 0.8,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7
                    }}>
                        <Image
                                    style={{ height: 50, width: 50}}
                                    source={require('../assets/loading.gif')}
                                />
                        {/*<Text style={{marginLeft: 10, color: "#FFF", marginTop: 10}}>正在加载...</Text>*/}
                    </View>
                </View>
            );
        } else {
            return <View/>
        }
    }

}

export default Loading;
const styles = StyleSheet.create({
    LoadingPage: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
});
