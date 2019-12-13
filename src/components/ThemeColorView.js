import React from 'react';
import {View, Text, Button, StyleSheet} from "react-native"
import {inject, observer} from "mobx-react";
import Storage from "../utils/Storage";

@inject('rootStore')
@observer
class ThemeColorView extends React.Component {
    changeColor(color) {
        Storage.set(Constants.STORAGE.LOCAL_DEFAULT_THEME, color).then((res)=> {
            this.props.rootStore.changeThemeColor(color);
        });
    }

    render() {
        const {ThemeColor} = this.props.rootStore;
        return (
            <View style={styles.container}>
                <Text style={[{color: ThemeColor},styles.textStyle]}>Mine-rootStore.ThemeColor甘肃省公路设施建管养一体化集成服务平台</Text>
                <Text style={[{color: COLOR.theme_default},styles.textStyle]}>Mine-COLOR.theme_default甘肃省公路设施建管养一体化集成服务平台</Text>

                <Button color={COLOR.theme_default} title="主题变成绿色" onPress={() => this.changeColor(COLOR.theme_green)}/>
                <Button color={COLOR.theme_default} title="主题变成红色" onPress={() => this.changeColor(COLOR.theme_red)}/>
                <Button color={COLOR.theme_default} title="主题变成紫色" onPress={() => this.changeColor(COLOR.theme_purple)}/>
                <Button color={COLOR.theme_default} title="主题变成粉色" onPress={() => this.changeColor(COLOR.theme_pink)}/>
                <Button color={COLOR.theme_default} title="主题变成黑色" onPress={() => this.changeColor(COLOR.theme_black)}/>
                <Button color={COLOR.theme_default} title="主题变成蓝色" onPress={() => this.changeColor(COLOR.theme_blue)}/>
                <Button color={COLOR.theme_default} title="主题变成深蓝色" onPress={() => this.changeColor(COLOR.theme_darkblue)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        fontSize: 20,
    }
});

export default ThemeColorView;