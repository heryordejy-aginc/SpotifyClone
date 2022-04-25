import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { screenHeight, screenWidth, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';

export default function PopularShowsItem(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NowPlaying')}
    >
      <View style={styles.imageWrapper}>
        <Image source={require('../assets/indie.jpeg')} style={styles.image} />
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={styles.artist}>Money Heist</Text>
      </View>
    </TouchableOpacity>
  );
}
//
const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.45,
    // height: screenHeight * 0.09,
    marginBottom: 10,
    paddingRight: 20,
  },
  imageWrapper: {
    elevation: 3,
    borderRadius: 5,
    overflow: 'hidden',
    height: screenHeight * 0.2,
    width: '100%',
  },
  bottomWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1,
    // aspectRatio: '1, 2',
  },
  artist: {
    fontSize: 17,
    fontFamily: fontFamily.Medium,
  },
});
