/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App'; //引入了App.js
import {name as appName} from './app.json';

//注册程序
AppRegistry.registerComponent(appName, () => App);
