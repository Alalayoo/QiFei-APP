import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import theme from "../config/theme";
import {withNavigation} from 'react-navigation'

type Props = {};

class Header extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        };
    }
    render() {
        return (
            <View style={[this.props.style, styles.header]}>
                <TouchableOpacity activeOpacity={0.2}  onPress={() => this.props.navigation.pop()}>
                    <View style={styles.backer}>
                        <Image source={require('../assets/icon_back.png')} style={styles.icon}/>
                        <Text style={styles.text}>返回</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[styles.title, styles.text]}>{this.props.title}</Text>
            </View>
        );
    }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
    header: {
        width: theme.screenWidth,
        height: theme.screenHeight * 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backer: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 4
    },
    text: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    title: {
        position: 'absolute',
        width: theme.screenWidth,
        textAlign: 'center',
        zIndex: -2
    }
});
