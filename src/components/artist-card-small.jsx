import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { screenHeight, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';
import { appColors } from '../styles/colors';

export default function ArtistCardSmall(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftWrapper}>
        {props.lastCard ? (
          <Image source={appIcons.LikedSongsBg} style={styles.image} />
        ) : (
          <Image
            source={require('../assets/punjabi.jpeg')}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.rightWrapper}>
        <Text style={styles.artist}>
          {props.lastCard ? 'Liked Songs' : 'Naira Marley'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '49%',
    borderRadius: 5,
    overflow: 'hidden',
    height: screenHeight * 0.09,
    elevation: 3,
    backgroundColor: appColors.Gray,
    marginBottom: 10,
  },
  leftWrapper: {
    width: '40%',
    height: '100%',
  },
  rightWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    // resizeMode: 'center',
    width: undefined,
    height: undefined,
    flex: 1,
    aspectRatio: 2 / 2,
  },
  artist: {
    fontSize: 14,
    fontFamily: fontFamily.Medium,
  },
});
