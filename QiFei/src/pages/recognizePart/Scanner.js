import React from 'react'
import {RNCamera} from "react-native-camera";
import {Animated, Easing, Modal, Platform, StyleSheet, Text, Vibration, View} from 'react-native'
import PropType from 'prop-types'

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

class Scanner extends React.Component {
    static propTypes = {
        visible: PropType.bool.isRequired,
        onClose: PropType.func.isRequired,
        onScanSuccess: PropType.func
    }

    constructor (props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0),
            code: ''
        };
    }

    componentDidMount () {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: -200,
                duration: 5000,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };

    //  识别二维码
    onBarCodeRead = (result) => {
        const {data} = result;
        if (data && !this.state.code) {
            this.setState({code: data})

            // 扫码提示音
            var whoosh = new Sound('scanner.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                // loaded successfully
                console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

                // Play the sound with an onEnd callback
                whoosh.play((success) => {
                    if (success) {
                        whoosh.pause()
                        console.log('scan qr result => ', data)
                        this.props.onScanSuccess && this.props.onScanSuccess(data)
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            });

            whoosh.setNumberOfLoops(1);
            whoosh.release();

            //手机振动
            if (Platform.OS === 'ios') {
                Vibration.vibrate(100, false)
            } else {
                Vibration.vibrate([0, 100], false)
            }
        }
    };

    render () {
        return (
            <Modal
                visible={this.props.visible}
                onRequestClose={this.props.onClose}
            >
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        onBarCodeRead={this.onBarCodeRead}
                    >
                        <View style={styles.rectangleContainer}>
                            <View style={styles.rectangle}/>
                            <Animated.View style={[
                                styles.border,
                                {transform: [{translateY: this.state.moveAnim}]}]}/>
                            <Text style={styles.rectangleText}>将二维码/条码放入框内，即可自动扫描</Text>
                        </View>
                    </RNCamera>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    }
});

export default Scanner
