import React from 'react';
import { Container, View, Text } from 'native-base';

export default class SeasonInfo extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'Season Info',
        }
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');
        //this.fetchFrom(year)
    }

    render() {
        return (
            <Container>
                <View>
                    <Text>

                    </Text>
                </View>
            </Container>
        );

    }
}