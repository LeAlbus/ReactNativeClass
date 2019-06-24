import React from 'react';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Text, List, ListItem, Left, Right, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

export default class DetailScreen extends React.Component {

    state = {
        races: [],
    };

    static navigationOptions = () => {
        return {
            title: 'Races List',
        }
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');

        this.fetchFrom(year)
    }

    async fetchFrom(year) {
        try {
            const response = await fetch(`http://ergast.com/api/f1/${year}.json`)
            const responseJson = await response.json()

            const raceList = responseJson.MRData.RaceTable.Races
            this.setState({ races: raceList })

        } catch{
            console.log('Deu ruim')
        }
    }

    goToRaceDetails(race) {
        this.props.navigation.navigate('RaceInfoScreen', { raceInfo: race });
    }

    renderRaceListItems() {

        let raceList = this.state.races;
        let listItems = [];

        if (raceList.length == 0) {
            let loadingNote = (<Text style={styles.headerFont}>
                Carregando corridas...
            </Text>)

            return loadingNote
        }

        for (let i = 0; i < (raceList.length) - 1; i++) {

            listItems.push(
                <ListItem key={`race-${i}`} button onPress={() => { this.goToRaceDetails(raceList[i]) }}>
                    <Left>
                        <Text>
                            {raceList[i].raceName}
                        </Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            )
        }

        return listItems;
    }

    render() {

        return (
            <SafeAreaView>
                <ScrollView>
                    <List>
                        {this.renderRaceListItems()}
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
