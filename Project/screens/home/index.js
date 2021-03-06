import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Seasons from '../../components/Seasons/Index'
import { SafeAreaView, ScrollView } from 'react-navigation';

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
        this.props.navigation.navigate('OptionsScreen', { year });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Text style={styles.headerFont}>
                        From wich year you want information?
                    </Text>

                    <Seasons handleClick={this.redirectTo} />
                    {/* HandleClick é uma variável que funciona como uma closure */}
                </ScrollView>
            </SafeAreaView>

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
    headerFont: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
