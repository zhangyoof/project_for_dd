import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from "react-native"
import {inject, observer} from "mobx-react";
import {Icon} from "@ant-design/react-native";
import sty from "./myReferenceSty"
import Header from "../../../components/Header/header"
@inject('rootStore')
@observer
class MyReference extends Component {
    constructor(props){
        super(props)
        this.state={
            isToUpdate:true,
            versionNumber:"v000.0000.0000"
        }
    }

    render() {
        let {ThemeColor}=this.props.rootStore
        let {versionNumber,isToUpdate} =this.state
        return (
            <View style={sty.container}>
                <Header title='关于' leftIconGO="Home"/>
                <View style={[sty.imgBox]}>
                    <Image
                        source={require('../../../assets/u5.png')}
                        style={sty.imgSty}
                    />
                    <Text style={[CommonStyles.primary_text_large,sty.aboutFont]}>{versionNumber}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={this.toVersionIntroduction}
                        style={[CommonStyles.flexLAYOUT,sty.aboutBtnSty]}
                    >
                        <Text>版本介绍</Text>
                        <Icon name='right' size="md"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[CommonStyles.flexLAYOUT,sty.aboutBtnSty]}
                    >
                        <Text>检查更新</Text>
                        {
                            isToUpdate ?
                                <View style={[CommonStyles.flexLAYOUT]}>
                                    <View style={[sty.circle,{backgroundColor:ThemeColor}]}/>
                                    <Text style={CommonStyles.primary_text_normal}>1.01.01</Text>
                                </View>
                                :
                                <Icon name='right' size="md"/>

                        }

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    toVersionIntroduction=()=>{
        this.props.navigation.navigate("VersionIntroduction")
    }
}

export default MyReference;