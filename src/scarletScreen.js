/**
 * Created by LaNet on 7/24/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code


export default class ScarletScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => Actions.gray()}>
                    Welcome to the Demo!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
