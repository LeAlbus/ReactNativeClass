import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Text } from 'native-base';

export default class Seasons extends PureComponent {

    state = {
        items: []
    }

    componentDidMount() {
        this.renderSeasons()
    }

    renderSeasons() {
        let years = []

        for (let i = 0; i < 20; i++) {
            const year = '20' + (i > 9 ? i : `0${i}`)
            years.push(
                year
            )
        }
        this.setState({ items: years })
    }

    render() {
        return (
            <View>

                <FlatList
                    data={this.state.items}
                    keyExtractor={item => item}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Button
                            style={{ margin: 10, width: 150, flex: 0 }}
                            onPress={() => this.props.handleClick(item)}>
                            <Text>
                                {item}
                            </Text>
                        </Button>
                    } />

            </View >
        )
    }
}
