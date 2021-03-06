import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

type Props = {};

export default class Counter extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    };
  }
  render() {
    return (
      <View style={[this.props.style, styles.operateBox]}>
        <TouchableOpacity activeOpacity={0.2} onPress={this._reduce.bind(this)}>
          <View style={styles.reduce}>
            <Text allowFontScaling={false} style={[styles.btn1]}>
              -
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inp1}
            returnKeyLabel="done"
            maxLength={3}
            onEndEditing={this._checkNumber.bind(this)}
            value={this.state.value.toString()}
            keyboardType="numeric"
            onChangeText={txt => this.setState({value: Number(txt)})}
            autoFocus={false}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity activeOpacity={0.2} onPress={this._plus.bind(this)}>
          <View style={styles.plus}>
            <Text allowFontScaling={false} style={[styles.btn1]}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  _checkNumber() {
    let value = this.state.value;
    if (value === '' || value < 1) {
      value = 1;
    } else {
      value = Math.floor(value);
    }
    this.setState({value: value});
  }
  _reduce() {
    this.setState({
      value: this.state.value - 1
    })
  }

  _plus() {
    this.setState({
      value: this.state.value + 1
    })
  }
}

const styles = StyleSheet.create({
  operateBox: {
    width: 120,
    height: 35,
    borderColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  },
  btn1: {
    fontSize: 18,
    textAlign: 'center',
    borderRightColor: 'transparent'
  },
  inputBox: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#ddd'
  },
  reduce: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd'
  },
  plus: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inp1: {
    flex: 1,
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: 0,
    fontSize: 14
  }
});
