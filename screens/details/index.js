import React from 'react';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Text, List, ListItem, Left, Right, Icon } from 'native-base';

export default class DetailScreen extends React.Component {

    state = {
        races: [],
    };

    componentDidMount() {
        const year = this.props.navigation.getParam('year');
        console.log(year);

        this.fetchFrom(year)
    }

    static navigationOptions = () => {
        return {
            title: 'Details Screen',
        }
    }

    async fetchFrom(year) {
        try {
            const response = await fetch(`http://ergast.com/api/f1/${year}.json`)
            const responseJson = await response.json()

            const raceList = responseJson.MRData.RaceTable.Races
            this.setState({ races: raceList })

        } catch{
            console.log('Deu 01 ruim')
        }
    }

    renderRaceListItems() {

        let raceList = this.state.races;
        let listItems = [];
        console.log(raceList.length)
        for (let i = 0; i < (raceList.length) - 1; i++) {

            listItems.push(
                <ListItem key={`race-${i}`}>
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