import React from 'react';
import { Text, List, ListItem, Left, Right, Icon } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { StyleSheet } from 'react-native';

export default class DriversScreen extends React.Component {

    state = {
        drivers: [],
    };

    static navigationOptions = () => {
        return {
            title: 'Driver List',
        }
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');

        this.fetchFrom(year)
    }

    async fetchFrom(year) {
        try {
            const response = await fetch(`http://ergast.com/api/f1/${year}/drivers.json`)
            const responseJson = await response.json()

            const driversList = responseJson.MRData.DriverTable.Drivers

            this.setState({ drivers: driversList })

        } catch{
            console.log('Deu ruim')
        }
    }

    goToDriverInfo(driver) {
        this.props.navigation.navigate('DriverInfoScreen', { driverId: driver });
    }

    renderDriversList() {

        let driversList = this.state.drivers;
        let listItems = [];

        if (driversList.length == 0) {
            let loadingNote = (<Text style={styles.headerFont}>
                Carregando pilotos...
            </Text>)

            return loadingNote
        }

        for (let i = 0; i < (driversList.length) - 1; i++) {

            listItems.push(
                <ListItem key={`race-${i}`}
                    button onPress={() => { this.goToDriverInfo(driversList[i]) }}>
                    <Left>
                        <Text>
                            {driversList[i].givenName} {driversList[i].familyName}
                        </Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            )
        }

        return listItems
    }

    render() {

        return (
            <SafeAreaView>
                <ScrollView>
                    <List>
                        {this.renderDriversList()}
                    </List>
                </ScrollView>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({
    headerFont: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
