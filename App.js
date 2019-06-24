import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './Project/screens/home';
import OptionsScreen from './Project/screens/options';
import SeasonInfo from './Project/screens/seasonInfo';
import DetailsScreen from './Project/screens/details';

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
    DetailsScreen: {
      screen: DetailsScreen,
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