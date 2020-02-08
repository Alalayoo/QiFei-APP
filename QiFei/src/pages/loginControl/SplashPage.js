import React, {Component} from 'react'
import {
  Image
} from 'react-native';
import theme from '../../config/theme';

export default class SplashPage extends Component{
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.replace('Login');
      this.timer && clearTimeout(this.timer);
    }, 2000);
  }

  render(){
    return (
      <Image
        source={require('../../assets/splash_BG.png')}
        style={{width: theme.screenWidth, height: theme.screenHeight * 1.2}}
        resizeMode='cover'
      />
    )
  }

}
