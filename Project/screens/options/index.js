import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';


export default class OptionsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.goToRaces = this.goToRaces.bind(this);

    }

    static navigationOptions = () => {
        return {
            title: 'Options Screen',
        }
    }

    goToRaces() {
        const year = this.props.navigation.getParam('year');
        this.props.navigation.navigate('DetailsScreen', { year });
    }

    goToDrivers() {
        const year = this.props.navigation.getParam('year');
        this.props.navigation.navigate('DriversScreen', { year });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <Text style={styles.headerFont}>Wich information would you like to see?</Text>

                <Text>Click to see all races for this season</Text>
                <Button
                    warning style={{ margin: 10, width: 350, flex: 0 }}
                    onPress={() => this.goToRaces()}>
                    <Text>
                        Races
                    </Text>
                </Button>

                <Text>Click to see all drivers for this season</Text>
                <Button
                    warning style={{ margin: 10, width: 350, flex: 0 }}
                    onPress={() => this.goToDrivers()}>

                    <Text>
                        Drivers
                    </Text>
                </Button>
            </SafeAreaView>
        )
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