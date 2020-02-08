import React, {Component} from "react";
import {
    Text,
    TouchableOpacity,
    SectionList,
    TextInput,
    StyleSheet,
    View,
    ToastAndroid,
    Alert,
    ImageBackground
} from "react-native";
import Header from "../../component/Header";
import theme from "../../config/theme";


export default class RecognizeCard extends Component {
    state = {
    };
    constructor(props){
        super(props);
        this.state= {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor: '#3f4c64'}} title={'卡片认知'}/>
                <SectionList
                    renderItem={({ item, index, section }) => <Text key={index} style={{fontSize: 16}}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: "bold", fontSize: 24}} onPress={() => this.props.navigation.push('Scanner')}>{title}</Text>
                    )}
                    sections={[
                        { title: "认知卡片", data: ["item1", "item2"] },
                        { title: "认知训练", data: ["item3", "item4"] }
                    ]}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: 'skyblue'}}/>}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    }
});
