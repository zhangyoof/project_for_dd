import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button,
} from 'react-native';
import {WebView} from 'react-native-webview';

class Detail extends React.Component {
    webview = null;

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{backgroundColor: 'skyblue',height:40}}
                    onPress={()=>{this.webview.postMessage("rn向h5发送的消息")}}
                    >
                    <Text>点击</Text>
                </TouchableOpacity>
                <WebView
                    ref={w=>this.webview=w}
                    style={{flex:1,backgroundColor: "red"}}
                    source={{uri:'https://www.baidu.com'}}
                    injectedJavaScript="
                        document.addEventListener('message',(e)=>{alert(e.data)})
                        window.postMessage('h5向rn发送的消息')
                    "
                    onMessage={(e)=>{Alert.alert(e.nativeEvent.data)}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
});

export default Detail;
