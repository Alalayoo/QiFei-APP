import React, {Component} from "react";
import {
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
    View,
    ToastAndroid,
    Alert,
    ImageBackground
} from "react-native";
import theme from "../config/theme";
import {BoxShadow} from "react-native-shadow";

export default class IndexPage extends Component {
    shadowSetting = {
        width: theme.screenWidth * 0.65,
        height: 120,
        color: '#000000',
        border: 5,
        radius: 15,
        opacity: 0.7,
        x: 5,
        y: 5,
        style:{marginVertical:20}
    };
    state = {
    };
    constructor(props){
        super(props);
        this.state= {
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/index_BG.jpg')} style={{width: theme.screenWidth, height: theme.screenHeight * 1.2}}>
                <View style={styles.container}>
                    <View style={styles.headInfo}>
                        <View style={styles.userInfo}>
                            <Image source={require('../assets/user_img.jpg')} style={styles.iconStyle}/>
                            <View style={styles.infoText}>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Alalayoo</Text>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Lv.9</Text>
                            </View>
                        </View>
                        <Text style={styles.userCenter} onPress={() => this.props.navigation.push('UserCenter')}>家长中心</Text>
                    </View>
                    <BoxShadow setting={this.shadowSetting}>
                        <TouchableOpacity
                            style={[styles.indexBtnStyle, {backgroundColor: 'rgb(49,158,109)'}]}
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.push('RecognizeCard')}
                        >
                            <Text style={styles.textStyle}>卡 片 认 知</Text>
                        </TouchableOpacity>
                    </BoxShadow>
                    <BoxShadow setting={this.shadowSetting}>
                        <TouchableOpacity
                            style={[styles.indexBtnStyle, {backgroundColor: 'rgb(31,107,190)'}]}
                            activeOpacity={0.7}
                        >
                            <Text style={[styles.textStyle]}>趣 味 闯 关</Text>
                        </TouchableOpacity>
                    </BoxShadow>
                    <BoxShadow setting={this.shadowSetting}>
                        <TouchableOpacity
                            style={[styles.indexBtnStyle, {backgroundColor: 'rgb(184,125,60)'}]}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.textStyle}>徽 章 奖 杯</Text>
                        </TouchableOpacity>
                    </BoxShadow>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        // 设置侧轴的对齐方式
        alignItems:'center'
    },
    headInfo: {
        width: theme.screenWidth,
        height: theme.screenHeight * 0.15,
        marginBottom: theme.screenHeight * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userCenter: {
        color: 'white',
        fontSize: 18,
        marginRight: 20,
        fontWeight: 'bold'
    },
    infoText: {
        height:60,
        marginLeft:10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textStyle: {
        color:'white',
        fontSize: 28,
        fontFamily: 'System',
        fontWeight: 'bold',
        textShadowOffset:{width:4, height:4},
        textShadowRadius:10,
        textShadowColor:'#000000'
    },
    iconStyle:{
        marginLeft:20,
        width:60,
        height:60,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
        alignSelf: 'flex-start'
    },
    indexBtnStyle: {
        height:120,
        width:theme.screenWidth * 0.65,
        opacity: 0.8,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16
    }
});
