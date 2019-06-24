import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class RaceInfoScreen extends React.Component {

    state = {
        raceData: [],
        raceSet: false
    };

    static navigationOptions = () => {
        return {
            title: 'Race Info',
        }
    }

    componentDidMount() {
        const raceInfo = this.props.navigation.getParam('raceInfo');

        this.setState({
            raceData: raceInfo,
            raceSet: true
        })
    }

    render() {

        if (!this.state.raceSet) {
            return (<SafeAreaView style={styles.container}>
                <Text>
                    Carregando...
                </Text>
            </SafeAreaView>)
        }

        let race = this.state.raceData

        return (
            <SafeAreaView style={styles.container}>
                <Container />
                <Container>
                    <Text style={styles.titleFont}>
                        === Race Info ===
                </Text>
                </Container>
                <Container>
                    <Text style={styles.titleFont}>
                        Race Name:
                </Text>
                    <Text style={styles.infoFont}>
                        {race.raceName}
                    </Text>
                </Container>
                <Container>
                    <Text style={styles.titleFont}>
                        Race Date:
                </Text>
                    <Text style={styles.infoFont}>
                        {race.date}
                    </Text>
                </Container>
                <Container>
                    <Text style={styles.titleFont}>
                        Race Country:
                </Text>
                    <Text style={styles.infoFont}>
                        {race.Circuit.Location.country}
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
    headerFont: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    titleFont: {
        fontSize: 21,
        fontWeight: '800',
    },
    infoFont: {
        fontSize: 18,
        fontWeight: '600',
    }
});