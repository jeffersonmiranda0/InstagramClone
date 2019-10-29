import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Feed from './pages/feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      defaultNavigationOptions: {
        headerTitle: <Text>Clone Instagram</Text>,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
