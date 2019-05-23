import React, { PureComponent, Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class Seasons extends PureComponent {

    renderSeasons() {
        let items = []

        for (let i = 0; i < 20; i++) {
            const year = '20' + (i > 9 ? i : `0${i}`)
            items.push(
                <Container key={`season-${i}`} >
                    <Content>
                        <Button onPress={() => this.props.handleClick(year)}>
                            <Text>
                                {year}
                            </Text>
                        </Button>
                    </Content>
                </Container>
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
