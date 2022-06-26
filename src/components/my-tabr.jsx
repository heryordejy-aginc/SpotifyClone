import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { appColors } from '../styles/colors';
import { fontFamily } from '../styles/font';

import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IC from 'react-native-vector-icons/Ionicons';

const getIcon = (label, isFocused) => {
  switch (label) {
    case 'Home':
      return (
        <MCI
          name={isFocused ? 'home-variant' : 'home-variant-outline'}
          color={isFocused ? appColors.White : appColors.White + 50}
          size={30}
        />
      );

    case 'Search':
      return (
        <IC
          name={isFocused ? 'search' : 'search-outline'}
          color={isFocused ? appColors.White : appColors.White + 50}
          size={30}
        />
      );

    case 'Your Library':
      return (
        <MCI
          name={isFocused ? 'bookshelf' : 'bookshelf'}
          color={isFocused ? appColors.White : appColors.White + 50}
          size={30}
        />
      );

    default:
      return null;
  }
};

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            {getIcon(label, isFocused)}
            <Text
              style={{
                ...styles.tabBarLabelStyle,
                color: isFocused ? appColors.White : appColors.White + 50,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontFamily: fontFamily.Light,
    fontSize: 13,
    // paddingBottom: 10,
    textAlign: 'center',
  },
  tabBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: appColors.Gray2,
    elevation: 4,
    borderTopWidth: 2,
    borderTopColor: appColors.Black + '40',
    paddingVertical: 10,
    height: 60,
  },
  //   tabBarInactiveTintColor: appColors.White + 90,
  //   tabBarActiveTintColor: appColors.White,
  button: { flex: 1, alignItems: 'center' },
});
