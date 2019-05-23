import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Seasons from './components/Seasons/Index'

export default class App extends React.Component {

  async fetchFrom(year) {
    try {
      const response = await fetch(`http://ergast.com/api/f1/${year}.json`)
      const responseJson = await response.json()
      console.log(responseJson.MRData.RaceTable.Races)
    } catch{
      console.log('Deu 01 ruim')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Seasons handleClick={this.fetchFrom} />
        {/* HandleClick é uma variável que funciona como uma closure */}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
