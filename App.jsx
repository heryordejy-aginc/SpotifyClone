import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { TextInput, Text } from 'react-native';

import setDefaultProps from 'react-native-simple-default-props';

import TabNavigation from './src/navigation/tab-navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
  const defaultText = {
    style: { color: '#FFFFFF', fontSize: 18, fontFamily: 'CircularStd-Book' },
  };

  const defaultTextInput = {
    underlineColorAndroid: 'transparent',
    placeholder: 'this is placeholder',
    style: {
      fontSize: 30,
      padding: 0,
    },
  };

  // usage
  setDefaultProps(Text, defaultText);
  setDefaultProps(TextInput, defaultTextInput);
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
