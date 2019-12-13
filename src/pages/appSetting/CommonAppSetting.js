/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/19
 * Time: 15:03
 * Desc: 常用应用设置页面
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native"
import {inject, observer} from "mobx-react/index";
import COLOR from '../../utils/COLOR';
import {Grid} from '@ant-design/react-native/lib/index';
import {observable, action} from "mobx/lib/mobx";
import Header from "../../components/Header/header";

@inject('rootStore')
@observer
class CommonAppSetting extends React.Component {

    static navigationOptions = {
        header: null,
        // headerTitle: '设置常用应用',
    };
    @action
    clickItemUsed = (index) => {
        this.props.rootStore._changeUsedData(index)
    };

    @action
    clickItemUnused = (index) => {
        this.props.rootStore._changeUnUsedData(index)

    };

    // 常用应用 item
    renderViewUsed = (index) => {
        const {icon, text} = this.props.rootStore.usedData[index];
        return (
            <View style={styles.itemView}>
                <Image
                    source={icon}
                    style={styles.itemImg}
                />
                <Image
                    source={require('@src/assets/appsetting_remove.png')}
                    style={styles.itemIcon}
                />
                <Text style={CommonStyles.primary_text_small}>{text}</Text>
            </View>
        )
    };

    // 未设置应用 item
    renderViewUnused = (index) => {
        const {icon, text} = this.props.rootStore.unUsedData[index];

        return (
            <View style={styles.itemView}>
                <Image
                    source={icon}
                    style={styles.itemImg}
                />
                <Image
                    source={require('@src/assets/appsetting_add.png')}
                    style={styles.itemIcon}
                />
                <Text style={CommonStyles.primary_text_small}>{text}</Text>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Header title={'设置常用应用'}/>
                <View style={styles.titleView}>
                    <Text style={CommonStyles.title1}>常用应用</Text>
                    <Text style={[CommonStyles.assistant_text_small, {marginLeft: 5}]}>(按住拖动可排序，最多可添加16个)</Text>
                </View>
                <View style={styles.gridView}>
                    <Grid
                        data={this.props.rootStore.usedData}
                        hasLine={false}
                        onPress={(_el, index) => this.clickItemUsed(index)}
                        renderItem={(_el, index) => this.renderViewUsed(index)}
                    />
                </View>
                <View style={[styles.titleView, {marginTop: 10}]}>
                    <Text style={CommonStyles.title1}>未设置</Text>
                </View>
                <View style={styles.gridView}>
                    <Grid
                        data={this.props.rootStore.unUsedData}
                        hasLine={false}
                        onPress={(_el, index) => this.clickItemUnused(index)}
                        renderItem={(_el, index) => this.renderViewUnused(index)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.bg_white_color,
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.border_color,
        backgroundColor: 'white',
    },
    gridView: {
        backgroundColor: 'white',
        paddingTop: 10,
    },
    itemView: {
        alignItems: 'center',
    },
    itemImg: {
        width: 35,
        height: 35,
        margin: 10,
    },
    itemIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 20,
        top: 5,
    }
});

export default CommonAppSetting;

