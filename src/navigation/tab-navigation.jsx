import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './home-stack';
import YourLibraryIndex from '../screens/your-library';
import SearchIndex from '../screens/search';
import { fontFamily } from '../styles/font';
import { appColors } from '../styles/colors';

import MyTabBar from '../components/my-tabr';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={'Home'} component={HomeStack} />
      <Screen name={'Search'} component={SearchIndex} />
      <Screen name={'Your Library'} component={YourLibraryIndex} />
    </Navigator>
  );
}
