import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeIndex from '../screens/home';
import RecentlyPlayed from '../screens/home/recently-played';
import NowPlaying from '../screens/home/now-playing';
import NowPlayingFull from '../screens/home/now-playing-full';

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={'HomeIndex'} component={HomeIndex} />
      <Screen name={'RecentlyPlayed'} component={RecentlyPlayed} />
      <Screen name={'NowPlaying'} component={NowPlaying} />
      <Screen name={'NowPlayingFull'} component={NowPlayingFull} />
    </Navigator>
  );
}
