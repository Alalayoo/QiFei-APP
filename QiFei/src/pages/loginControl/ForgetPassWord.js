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
import theme from "../../config/theme";

export default class ForgetPassWord extends Component {
    state = {
        userName:'',
        passWord:''
    };
    constructor(props){
        super(props);
        this.state= {
            userName:'',
            passWord:''
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/login_BG.jpg')} style={{width: theme.screenWidth, height: theme.screenHeight * 1.2}}>
                <View style={styles.container}>
                    <View style={styles.settingStyle}>
                        <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>填写手机号，并通过短信验证</Text>
                    </View>
                    {/*账号和密码*/}
                    <TextInput placeholder={'请输入手机号'} style={styles.textInputStyle}
                               onChangeText={(userName)=>this.setState({userName})}/>

                    <View style={styles.textInputArea}>
                        <TextInput placeholder={'请输入验证码'}  secureTextEntry={false}
                                   style={styles.textInputStyle1}
                                   onChangeText={(verifyCode)=>this.setState({verifyCode})}/>
                        <TouchableOpacity
                            style={styles.loginBtnStyle1}
                            activeOpacity={0.9}
                            onPress={()=>{this.registerMethod(this.state)}}>
                            <Text style={{color:'white'}}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>

                    {/*注册*/}
                    <TouchableOpacity
                        style={styles.loginBtnStyle}
                        activeOpacity={0.9}
                        onPress={() => this.props.navigation.navigate('ResetPassWord')}>
                        <Text style={{color:'white'}}>下一步</Text>
                    </TouchableOpacity>
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

    textInputStyle:{
        width:theme.screenWidth * 0.8,
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        // 内容居中
        textAlign:'left',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius:4,
        alignSelf:'center'
    },

    textInputArea:{
        marginTop: 8,
        width: theme.screenWidth * 0.8,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    textInputStyle1:{
        width:theme.screenWidth * 0.5,
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        // 内容居中
        textAlign:'left',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius:4,
        alignSelf: 'flex-start'

    },
    loginBtnStyle1:{
        height:35,
        width:theme.screenWidth * 0.2,
        backgroundColor:'red',
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'flex-end',
        borderRadius:8
    },

    loginBtnStyle:{
        height:35,
        width:theme.screenWidth * 0.7,
        backgroundColor:'red',
        marginTop:30,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },

    settingStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // backgroundColor:'red',
        marginTop: 50,
        marginBottom: 20,
        // 主轴的对齐方式
        width:theme.screenWidth * 0.8,
        justifyContent:'flex-start'
    },

    otherLoginStyle:{
        // backgroundColor:'red',

        // 设置主轴的方向
        flexDirection:'row',

        // 设置侧轴的对齐方式
        alignItems:'center',

        // 绝对定位
        position:'absolute',
        bottom:10,
        left:20
    },

    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8
    }
});
