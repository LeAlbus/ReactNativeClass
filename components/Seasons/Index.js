import React, { PureComponent, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

export default class Seasons extends PureComponent {

    renderSeasons() {
        let items = []

        for (let i = 0; i < 20; i++) {
            const year = '20' + (i > 9 ? i : `0${i}`)
            items.push(

                <Button full onPress={() => this.props.handleClick(year)}
                    key={`season-${i}`}>
                    <Text style={styles.container}>
                        {year}
                    </Text>
                </Button>

            )
        }

        return items
    }

    render() {
        return (
            <View>

                {this.renderSeasons()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});