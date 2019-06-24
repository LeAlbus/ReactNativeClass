import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';


export default class DriverInfoScreen extends React.Component {

    state = {
        driverData: [],
        driverSet: false
    };

    static navigationOptions = () => {
        return {
            title: 'Driver Info',
        }
    }

    componentDidMount() {
        const driverInfo = this.props.navigation.getParam('driverId');
        console.log(driverInfo)

        this.setState({
            driverData: driverInfo,
            driverSet: true
        })
    }

    render() {

        if (!this.state.driverSet) {
            return (<SafeAreaView style={styles.container}>
                <Text>
                    Carregando...
                </Text>
            </SafeAreaView>)
        }

        let driver = this.state.driverData

        return (
            <SafeAreaView style={styles.container}>
                <Container />
                <Container>
                    <Text style={styles.titleFont}>
                        Driver's Name:
                </Text>
                    <Text style={styles.infoFont}>
                        {driver.givenName} {driver.familyName}
                    </Text>
                </Container>
                <Container>
                    <Text style={styles.titleFont}>
                        Driver's Code:
                </Text>
                    <Text style={styles.infoFont}>
                        {driver.code}
                    </Text>
                </Container>
                <Container>
                    <Text style={styles.titleFont}>
                        Driver's BirthDay:
                </Text>
                    <Text style={styles.infoFont}>
                        {driver.dateOfBirth}
                    </Text>
                </Container>
                <Container>
                    <Text style={styles.titleFont}>
                        Driver's Nationality:
                </Text>
                    <Text style={styles.infoFont}>
                        {driver.nationality}
                    </Text>
                </Container>
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
    titleFont: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    infoFont: {
        fontSize: 18,
        fontWeight: '600',
    }
});