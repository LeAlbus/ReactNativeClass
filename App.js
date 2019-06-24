import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './Project/screens/home';
import OptionsScreen from './Project/screens/options';
import SeasonInfo from './Project/screens/seasonInfo';
import DriversScreen from './Project/screens/drivers';
import DetailsScreen from './Project/screens/details';
import DriverInfoScreen from './Project/screens/driverInfo';
import RaceInfoScreen from './Project/screens/raceInfo';

const AppNavigator = createStackNavigator(
  {//Screens
    Home: {
      screen: HomeScreen,
    },
    OptionsScreen: {
      screen: OptionsScreen,
    },
    SeasonInfo: {
      screen: SeasonInfo
    },
    DriversScreen: {
      screen: DriversScreen
    },
    DetailsScreen: {
      screen: DetailsScreen,
    },
    DriverInfoScreen: {
      screen: DriverInfoScreen,
    },
    RaceInfoScreen: {
      screen: RaceInfoScreen,
    }
  },
  {//Configurations
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

export default createAppContainer(AppNavigator);