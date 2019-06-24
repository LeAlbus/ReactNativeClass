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
        console.log("ssss")
        const year = this.props.navigation.getParam('year');
        this.props.navigation.navigate('DetailsScreen', { year });
    }

    goToDrivers() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
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
                    warning style={{ margin: 10, width: 350, flex: 0 }}>
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
    }
});