/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/9/19
 * Time: 10:30
 * Desc: 公用样式
 */

import COLOR from './COLOR'

export default {

    // 标题
    title1: {
        fontSize: 16,
        color: COLOR.font_black_3,
    },

    title2: {
        fontSize: 14,
        color: COLOR.font_black_3,
    },

    // 表头
    header: {
        fontSize: 14,
        color: COLOR.font_black_primary,
    },
    pageHeader:{
        paddingLeft:20,
        paddingRight:20,
        height:60,
    },
    pageTitle:{
        fontSize:20,
        color:"#fff",
    },
    
    headerTitleText:{
        fontSize:16,
        color:"#fff",
    },

    // 正文
    primary_text_large: {
        fontSize: 16,
        color: COLOR.font_black_6,
    },
    primary_text_normal: {
        fontSize: 14,
        color: COLOR.font_black_6,
    },
    primary_text_small: {
        fontSize: 12,
        color: COLOR.font_black_6,
    },

    // 正文 - 辅助文字
    assistant_text_large: {
        fontSize: 16,
        color: COLOR.font_black_9,
    },
    assistant_text_normal: {
        fontSize: 14,
        color: COLOR.font_black_9,
    },
    assistant_text_small: {
        fontSize: 12,
        color: COLOR.font_black_9,
    },

    // 正文 - 失效文字、提示文字
    mention_text: {
        fontSize: 14,
        color: COLOR.font_black_c,
    },

    //圆圈
    CIRCLE:{
        width:10,
        height:10,
        borderWidth:2,
        borderColor:"blue",
        borderRadius:5,
        marginRight:10
    },

    //flex布局，将布局转为平分在两边
    flexLAYOUT:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    //将布局全部集中在中间
    flexLAYOUTCENTER:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    //将布局改为横向布局
    flexRowRight:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",
    }

}

