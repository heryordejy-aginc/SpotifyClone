import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { screenHeight, screenWidth, vh } from '../utils/dimens';
import { fontFamily } from '../styles/font';
import { appIcons } from '../assets/icons';
import { appColors } from '../styles/colors';

export default function JumpBackItem(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={require('../assets/indie.jpeg')} style={styles.image} />
        <View style={styles.overlay} />
        {props.first && (
          <View style={styles.radarWrapper}>
            <Text style={styles.rader}>Release Rader</Text>
          </View>
        )}
      </View>
      {props.first ? (
        <View style={styles.bottomWrapper}>
          <Text style={styles.artist}>
            Catch all the latest music from artist you follow...
          </Text>
        </View>
      ) : (
        <View style={styles.bottomWrapper}>
          <Text style={styles.artistTitle}>This is Kid Cudi</Text>
          <Text style={styles.artistSubtitle}>
            Album<Text style={styles.dot}> • </Text>
            Pop Smoke
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.41,
    // height: screenHeight * 0.09,
    marginBottom: 10,
    paddingRight: 20,
  },
  imageWrapper: {
    elevation: 3,
    overflow: 'hidden',
    height: screenHeight * 0.16789,
    width: '100%',
  },
  bottomWrapper: {
    justifyContent: 'center',
    paddingTop: 5,
  },
  image: {
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1,
    // aspectRatio: '1, 2',
  },
  artist: {
    fontSize: 13,
    fontFamily: fontFamily.Light,
  },
  artistTitle: {
    fontSize: 13,
    fontFamily: fontFamily.Medium,
  },
  artistSubtitle: {
    fontSize: 13,
    fontFamily: fontFamily.Light,
  },
  dot: {
    fontSize: 10,
    fontFamily: fontFamily.Light,
  },
  radarWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 10,
    width: '40%',
  },
  rader: {
    fontSize: 15,
    fontFamily: fontFamily.Bold,
    color: appColors.White,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: appColors.Black + 80,
  },
});
