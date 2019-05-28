import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Seasons from '../../components/Seasons/Index'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.redirectTo = this.redirectTo.bind(this); //For not losing 'this' reference
    }
    static navigationOptions = () => {
        return {
            title: 'Home Screen',
        }
    }

    redirectTo(year) {
        this.props.navigation.navigate('Details', { year });
    }

    render() {
        return (
            <View style={styles.container}>
                <Seasons handleClick={this.redirectTo} />
                {/* HandleClick é uma variável que funciona como uma closure */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
