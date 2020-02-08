import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import SplashPage from './src/pages/loginControl/SplashPage';
import Login from './src/pages/loginControl/Login';
import Register from "./src/pages/loginControl/Register";
import ForgetPassWord from "./src/pages/loginControl/ForgetPassWord";
import ResetPassWord from "./src/pages/loginControl/ResetPassWord";
import IndexPage from "./src/pages/IndexPage";
import UserCenter from "./src/pages/usersInfo/UserCenter";
import RecognizeCard from "./src/pages/recognizePart/RecognizeCard";
import Scanner from "./src/pages/recognizePart/Scanner";

const AppNavigator = createStackNavigator({
  SplashPage: {
    screen: SplashPage,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  },
  ForgetPassWord: {
    screen: ForgetPassWord,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  },
  ResetPassWord: {
    screen: ResetPassWord,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  },
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  },
  UserCenter: {
    screen: UserCenter,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  },
  RecognizeCard: {
    screen: RecognizeCard,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  },
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: null
    }
  }
},{
  mode: 'card',
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal
  })
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
    return <AppContainer/>;
  }
}
