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
    ImageBackground,
    StatusBar
} from "react-native";
import theme from "../../config/theme";

export default class Login extends Component {
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
  loginMethod=(state)=>{
    Alert.alert(
      '登录提示',
      '请确认账号和密码',
      [
        { text: '取消', onPress: () => {} },
        { text: '确定', onPress:  () => {
            this.props.navigation.navigate('IndexPage');
            ToastAndroid.show(`用户名：${state.userName}\t 密码：${state.passWord}`,ToastAndroid.SHORT);
          }
        }
      ],
      { cancelable: true });
  };

  render() {
    return (
        <View>
          <StatusBar hidden={true} />
          <ImageBackground source={require('../../assets/login_BG.jpg')} style={{width: theme.screenWidth, height: theme.screenHeight * 1.2}}>
            <View style={styles.container}>
              {/*头像*/}
              <Image source={require('../../assets/user_img.jpg')} style={styles.iconStyle}/>
              {/*账号和密码*/}
              <TextInput placeholder={'请输入手机号'} style={styles.textInputStyle}
                         onChangeText={(userName)=>this.setState({userName})}/>

              <TextInput placeholder={'请输入密码'}  secureTextEntry={true} style={styles.textInputStyle}
                         onChangeText={(passWord)=>this.setState({passWord})}/>

              {/*登录*/}
              <TouchableOpacity
                  style={styles.loginBtnStyle}
                  activeOpacity={0.9}
                  onPress={()=>{this.loginMethod(this.state)}}>
                <Text style={{color:'white'}}>登录</Text>
              </TouchableOpacity>
              {/*设置*/}
              <View style={styles.settingStyle}>
                <Text onPress={() => this.props.navigation.navigate('ForgetPassWord')}>忘记密码？</Text>
                <Text onPress={() => this.props.navigation.navigate('Register')}>创建新账户</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
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

  iconStyle:{
    marginTop:120,
    marginBottom:30,
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'white'
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

  loginBtnStyle:{
    height:35,
    width:theme.screenWidth * 0.7,
    backgroundColor:'green',
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

    // 主轴的对齐方式
    width:theme.screenWidth * 0.6,
    justifyContent:'space-between'
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
