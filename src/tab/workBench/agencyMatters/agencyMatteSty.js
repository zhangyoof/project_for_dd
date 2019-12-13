import React, {StyleSheet, Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');
import COLOR from "../../../utils/COLOR"
export default styles = StyleSheet.create({
    AgencyMattersBox: {
        marginTop: 20,
        marginBottom: 20,
    },
//主轴为x，将元素位于两边分开
    flexLayout:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    headerBox:{
        marginTop: 10,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:7,
        paddingTop:7
    },
    imgIconSty: {
        width: 10,
        height: 10,
        marginRight: 11
    },

    rightArrow:{
        width:20,
        height:20,
        marginLeft: 5
    },
    fontText:{
        fontSize:18,
    },
    Bubble:{
        backgroundColor: COLOR.primary_red,
        width:20,
        height:20,
        marginLeft:5,
        borderRadius:2
    },
    BubbleText:{
        textAlign:"center",
        color:"#fff"
    },
    moduleEvery:{

        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        paddingTop:5,
        paddingBottom:5,
    },
    ButtonSty:{
        borderRadius: 5,
        width:70,
        height:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonTextSty:{
        color:"#fff"
    },
    moduleTitleSty:{
        fontSize: 16

    },
    moduleDateSty:{
        marginTop:5,
        color:'#999999'
    },
    chaAll:{
        height:20,
        alignItems:'center'
    },
    blankBox:{
        paddingTop:7,
        paddingBottom:7,
        backgroundColor: 'red'
    }
})