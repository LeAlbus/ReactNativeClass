import React from 'react';
import { Container, View, Text } from 'native-base';

export default class SeasonInfo extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'Season Info',
        }
    }

    render() {
        return (
            <Container>
                <View>
                    <Text>
                        RIRIRIRRIR
                    </Text>
                </View>
            </Container>
        );

    }
}